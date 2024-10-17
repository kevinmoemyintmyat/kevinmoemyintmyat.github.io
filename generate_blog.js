const { format } = require("date-fns/format");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const { exec } = require("child_process");
const appRoot = path.resolve(__dirname);
dotenv.config();

const devBlogApiUrl = process.env.NUXT_ENV_DEV_TO_API;
const devApiKey = process.env.DEV_TO_API_KEY;
const bloggerApiUrl =
  process.env.NUXT_ENV_BLOGGER_API + "/" + process.env.BLOGGER_ID + "/posts";
const bloggerApiKey = process.env.BLOGGER_API_KEY;

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

const fillTemplate = (html, replacements) => {
  return handlebars.compile(html)(replacements);
};

async function fetchBlogsplotData() {
  const response = await fetch(`${bloggerApiUrl}?key=${bloggerApiKey}`, {
    cache: "no-cache"
  });
  const data = await response.json();
  for (blogData of data?.items) {
    const html = await readFile("templates/Blog.html");
    const templateReplacement = {
      html: blogData.content,
      title: blogData.title,
      date: format(new Date(blogData.published), "dd MMMM yyyy"),
      slug: blogData.id,
      source: blogData.url,
      tags: blogData.labels,
    };
    const template = fillTemplate(html, templateReplacement);
    const path = appRoot + `/pages/blog/${blogData.id}.vue`;
    fs.readFile(path, () => {
      fs.writeFile(path, template, function (err) {
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
      }))
    ),
  };
  const dataFile = fillTemplate(dataJson, dataJsonReplacement);
  const dataPath = appRoot + `/assets/data/data-blogspot-blogs.js`;
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
  const response = await fetch(`${devBlogApiUrl}/articles/me/all`, {
    cache: "no-cache",
    headers: {
      "api-key": devApiKey,
    },
  });
  const data = await response.json();

  const devBlogs = await Promise.all(
    data.map(async (blog) =>
      (await fetch(`${devBlogApiUrl}/articles/${blog.id}`)).json()
    )
  );
  for (blogData of devBlogs) {
    const html = await readFile("templates/Blog.html");
    const templateReplacement = {
      html: blogData.body_html,
      title: blogData.title,
      date: format(new Date(blogData.published_at), "dd MMMM yyyy"),
      slug: blogData.slug,
      source: blogData.url,
      tags: blogData.tags,
      cover_image: blogData.cover_image,
    };
    const template = fillTemplate(html, templateReplacement);
    const path = appRoot + `/pages/blog/${blogData.slug}.vue`;
    fs.readFile(path, () => {
      fs.writeFile(path, template, function (err) {
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
      devBlogs.map((blog) => ({
        ...blog,
      }))
    ),
  };
  const dataFile = fillTemplate(dataJson, dataJsonReplacement);
  const dataPath = appRoot + `/assets/data/data-dev-blogs.js`;
  fs.readFile(dataPath, () => {
    fs.writeFile(dataPath, dataFile, function (err) {
      if (err) {
        return console.log(err);
      }
    });
    exec(`npm run prettier ${dataPath}`);
  });
}

fetchDevBlogData();
fetchBlogsplotData();
