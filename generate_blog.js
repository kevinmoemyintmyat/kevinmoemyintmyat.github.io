const { format } = require("date-fns/format");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const { exec } = require("child_process");
const appRoot = path.resolve(__dirname);
dotenv.config();

// Add fallback values and validation for environment variables
const devBlogApiUrl = process.env.NUXT_ENV_DEV_TO_API || "https://dev.to/api";
const devApiKey = process.env.DEV_TO_API_KEY;
const bloggerApiUrl = process.env.NUXT_ENV_BLOGGER_API && process.env.BLOGGER_ID && process.env.BLOGGER_API_KEY 
  ? `${process.env.NUXT_ENV_BLOGGER_API}/${process.env.BLOGGER_ID}/posts`
  : null;
const bloggerApiKey = process.env.BLOGGER_API_KEY;

// Validate required environment variables
if (!devApiKey) {
  console.warn("⚠️  Warning: DEV_TO_API_KEY is not set. Dev.to blog fetching will be skipped.");
}

if (!bloggerApiUrl || !bloggerApiKey) {
  console.warn("⚠️  Warning: Blogger API configuration is incomplete. Blogger blog fetching will be skipped.");
  console.warn("   Required: NUXT_ENV_BLOGGER_API, BLOGGER_ID, BLOGGER_API_KEY");
}

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, function (err, file) {
      if (err) {
        reject(err);
      } else {
        resolve(file);
      }
    });
  });
};

const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const fillTemplate = (html, replacements) => {
  return handlebars.compile(html)(replacements);
};

async function fetchBlogsplotData() {
  if (!bloggerApiUrl || !bloggerApiKey) {
    console.warn("Skipping fetchBlogsplotData due to incomplete Blogger API configuration.");
    return;
  }

  const response = await fetch(`${bloggerApiUrl}?key=${bloggerApiKey}`, {
    cache: "no-cache",
  });
  const data = await response.json();
  for (blogData of data?.items) {
    const html = await readFile("templates/Blog.vue");
    const templateReplacement = {
      html: blogData.content,
      title: blogData.title,
      date: format(new Date(blogData.published), "dd MMMM yyyy"),
      slug: blogData.id,
      source: blogData.url,
      tags: blogData.labels,
    };
    const template = fillTemplate(html, templateReplacement);
    const filePath = appRoot + `/pages/blog/${blogData.id}.vue`;
    ensureDirectoryExists(filePath);
    fs.readFile(filePath, () => {
      fs.writeFile(filePath, template, function (err) {
        if (err) {
          return console.log(err);
        }
      });
    });

    console.log(`${blogData.id} is saved.`);
  }

  const dataJson = await readFile("templates/data.js");
  const dataJsonReplacement = {
    data: JSON.stringify(
      data?.items.map((blog) => ({
        ...blog,
        category: "Memoir"
      }))
    ),
  };
  const dataFile = fillTemplate(dataJson, dataJsonReplacement);
      const dataPath = appRoot + `/assets/data/data-blogspot-blogs.js`;
    ensureDirectoryExists(dataPath);
    fs.readFile(dataPath, () => {
      fs.writeFile(dataPath, dataFile, function (err) {
        if (err) {
          return console.log(err);
        }
      });
      exec(`npm run prettier ${dataPath}`);
    });
}

async function fetchDevBlogData() {
  if (!devApiKey) {
    console.warn("Skipping fetchDevBlogData due to missing DEV_TO_API_KEY.");
    return;
  }

  try {
    const response = await fetch(`${devBlogApiUrl}/articles/me/all`, {
      cache: "no-cache",
      headers: {
        "api-key": devApiKey,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Process blogs one by one with delays to avoid rate limiting
    const devBlogs = [];
    for (const blog of data) {
      try {
        const blogResponse = await fetch(`${devBlogApiUrl}/articles/${blog.id}`);
        if (!blogResponse.ok) {
          throw new Error(`HTTP error! status: ${blogResponse.status}`);
        }
        const blogData = await blogResponse.json();
        devBlogs.push(blogData);
        
        // Add delay between requests to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
        
      } catch (error) {
        console.error(`Error fetching blog ${blog.id}:`, error);
        // Continue with other blogs instead of failing completely
      }
    }
    
    // Process blogs and generate shorter filenames
    const processedBlogs = devBlogs.map(blogData => {
      return { ...blogData };
    });
    
    for (blogData of processedBlogs) {
      const html = await readFile("templates/Blog.vue");
      const templateReplacement = {
        html: blogData.body_html,
        title: blogData.title,
        date: format(new Date(blogData.published_at), "dd MMMM yyyy"),
        slug: blogData.slug, // Use original slug
        source: blogData.url,
        tags: blogData.tags,
        cover_image: blogData.cover_image,
      };
      const template = fillTemplate(html, templateReplacement);
      
      const filePath = appRoot + `/pages/blog/${blogData.slug}.vue`;
      ensureDirectoryExists(filePath);
      fs.readFile(filePath, () => {
        fs.writeFile(filePath, template, function (err) {
          if (err) {
            return console.log(err);
          }
        });
      });

      console.log(`${blogData.slug} is saved.`);
    }

    const dataJson = await readFile("templates/data.js");
    const dataJsonReplacement = {
      data: JSON.stringify(
        processedBlogs.map((blog) => ({
          ...blog,
          category: "Tech",
        }))
      ),
    };
    const dataFile = fillTemplate(dataJson, dataJsonReplacement);
    const dataPath = appRoot + `/assets/data/data-dev-blogs.js`;
    ensureDirectoryExists(dataPath);
    fs.readFile(dataPath, () => {
      fs.writeFile(dataPath, dataFile, function (err) {
        if (err) {
          return console.log(err);
        }
      });
      exec(`npm run prettier ${dataPath}`);
    });
  } catch (error) {
    console.error("Error fetching Dev.to blogs:", error);
  }
}

// Execute blog fetching functions with proper error handling
(async () => {
  try {
    console.log("🚀 Starting blog generation...");
    
    if (devApiKey) {
      console.log("📝 Fetching Dev.to blogs...");
      await fetchDevBlogData();
    }
    
    if (bloggerApiUrl && bloggerApiKey) {
      console.log("📝 Fetching Blogger blogs...");
      await fetchBlogsplotData();
    }
    
    if (!devApiKey && (!bloggerApiUrl || !bloggerApiKey)) {
      console.log("ℹ️  No API keys configured. Please set up environment variables to fetch blogs.");
      console.log("   Create a .env file with the required API keys:");
      console.log("   - DEV_TO_API_KEY for Dev.to");
      console.log("   - NUXT_ENV_BLOGGER_API, BLOGGER_ID, BLOGGER_API_KEY for Blogger");
    }
    
    console.log("✅ Blog generation completed!");
  } catch (error) {
    console.error("❌ Error during blog generation:", error);
    process.exit(1);
  }
})();
