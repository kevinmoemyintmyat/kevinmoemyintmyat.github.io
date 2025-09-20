const { format } = require("date-fns/format");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const { exec } = require("child_process");
const appRoot = path.resolve(__dirname);
dotenv.config();

// Rating system for blog posts
function rateBlogPost(blog) {
  const { title = "", description = "", body_html, body_markdown, tag_list, tags } = blog;
  
  // Special case for "12 Years A Guest" - give it the highest rating
  if (title.includes("12 Years A Guest") || title.includes("12 years a guest")) {
    return {
      rating: 10.0, // Give it the absolute highest rating to ensure it's always first
      ratingReason: "Masterpiece memoir! A deeply moving and beautifully written personal journey spanning 12 years in Singapore. Exceptional storytelling with profound reflections on identity, belonging, and the immigrant experience. Rich emotional depth, vivid imagery, and honest vulnerability make this an extraordinary piece of writing. The narrative structure, personal growth arc, and cultural insights create a compelling and unforgettable read."
    };
  }
  
  // Special case for "The Horrors of AI" - give it a high but lower rating than 12 Years A Guest
  if (title.includes("The Horrors of AI") || title.includes("Horrors of AI") || title.includes("Halloween Edition")) {
    return {
      rating: 9.9, // High rating but lower than 12 Years A Guest
      ratingReason: "Excellent technical blog with engaging personal narrative and strong content structure. Well-written account of AI's impact on coding interviews with good technical depth and personal insights. The Halloween theme adds creative flair while maintaining professional quality. Comprehensive coverage with substantial technical depth and engaging storytelling."
    };
  }
  
  // Base rating factors (10-point scale)
  let rating = 6.0;
  let factors = [];
  
  // Content quality assessment
  const content = body_html || body_markdown || "";
  const wordCount = content.split(/\s+/).length;
  
  // Length and depth
  if (wordCount > 2000) {
    rating += 0.6;
    factors.push("Comprehensive content");
  } else if (wordCount > 1000) {
    rating += 0.4;
    factors.push("Good content length");
  }
  
  // Technical content indicators
  const techKeywords = ['code', 'programming', 'development', 'software', 'engineering', 'javascript', 'react', 'vue', 'api', 'database', 'algorithm', 'architecture', 'debugging', 'testing', 'deployment', 'git', 'framework', 'library', 'function', 'variable', 'component', 'interface', 'backend', 'frontend', 'fullstack', 'devops', 'cloud', 'aws', 'docker', 'kubernetes', 'node', 'python', 'java', 'css', 'html', 'json', 'rest', 'graphql', 'sql', 'nosql', 'mongodb', 'postgresql', 'redis', 'elasticsearch', 'microservices', 'monolith', 'agile', 'scrum', 'ci/cd', 'automation', 'performance', 'optimization', 'security', 'authentication', 'authorization', 'jwt', 'oauth', 'ssl', 'https', 'domain', 'hosting', 'server', 'client', 'browser', 'mobile', 'responsive', 'ux', 'ui', 'design', 'user experience', 'accessibility', 'seo', 'analytics', 'monitoring', 'logging', 'error handling', 'exception', 'try catch', 'async', 'await', 'promise', 'callback', 'event', 'listener', 'state', 'props', 'hooks', 'lifecycle', 'mount', 'unmount', 'render', 'virtual dom', 'bundler', 'webpack', 'vite', 'babel', 'typescript', 'eslint', 'prettier', 'jest', 'testing', 'unit test', 'integration test', 'e2e test', 'mocking', 'stubbing', 'tdd', 'bdd', 'refactoring', 'clean code', 'solid principles', 'design patterns', 'mvc', 'mvp', 'mvvm', 'flux', 'redux', 'mobx', 'context', 'provider', 'consumer', 'hoc', 'render props', 'custom hooks', 'middleware', 'reducer', 'action', 'dispatch', 'selector', 'immutable', 'mutation', 'pure function', 'side effect', 'closure', 'scope', 'hoisting', 'prototype', 'inheritance', 'composition', 'encapsulation', 'abstraction', 'polymorphism', 'recursion', 'iteration', 'loop', 'condition', 'statement', 'expression', 'operator', 'operand', 'literal', 'constant', 'let', 'var', 'const', 'arrow function', 'destructuring', 'spread', 'rest', 'template literal', 'class', 'constructor', 'method', 'property', 'static', 'private', 'public', 'protected', 'extends', 'implements', 'interface', 'abstract', 'final', 'super', 'this', 'new', 'instance', 'object', 'array', 'string', 'number', 'boolean', 'null', 'undefined', 'symbol', 'bigint', 'date', 'regex', 'json', 'xml', 'yaml', 'toml', 'markdown', 'html', 'css', 'scss', 'sass', 'less', 'stylus', 'postcss', 'autoprefixer', 'browserslist', 'polyfill', 'shim', 'ponyfill', 'babel', 'transpiler', 'compiler', 'interpreter', 'runtime', 'engine', 'vm', 'jvm', 'v8', 'spidermonkey', 'javascriptcore', 'chakra', 'hermes', 'quickjs', 'deno', 'bun', 'nodejs', 'npm', 'yarn', 'pnpm', 'package', 'module', 'import', 'export', 'require', 'commonjs', 'es modules', 'amd', 'umd', 'systemjs', 'rollup', 'parcel', 'esbuild', 'swc', 'terser', 'uglify', 'minification', 'compression', 'gzip', 'brotli', 'deflate', 'lz4', 'zstd', 'cache', 'cdn', 'edge', 'serverless', 'lambda', 'function', 'vercel', 'netlify', 'firebase', 'supabase', 'railway', 'render', 'heroku', 'digitalocean', 'linode', 'vultr', 'aws', 'ec2', 's3', 'rds', 'dynamodb', 'lambda', 'api gateway', 'cloudfront', 'route53', 'iam', 'vpc', 'subnet', 'security group', 'load balancer', 'autoscaling', 'elastic beanstalk', 'lightsail', 'amplify', 'cognito', 'ses', 'sns', 'sqs', 'kinesis', 'redshift', 'elasticsearch', 'opensearch', 'kibana', 'grafana', 'prometheus', 'jaeger', 'zipkin', 'datadog', 'newrelic', 'sentry', 'rollbar', 'bugsnag', 'honeycomb', 'lightstep', 'signoz', 'uptrace', 'tempo', 'loki', 'vector', 'fluentd', 'logstash', 'filebeat', 'metricbeat', 'heartbeat', 'auditbeat', 'packetbeat', 'winlogbeat', 'functionbeat', 'journalbeat', 'communitybeat', 'custombeat', 'elastic', 'kibana', 'beats', 'logstash', 'elasticsearch', 'opensearch', 'apm', 'rum', 'synthetics', 'uptime', 'infrastructure', 'kubernetes', 'docker', 'containers', 'orchestration', 'helm', 'kustomize', 'operators', 'crd', 'crd', 'controller', 'reconciler', 'watcher', 'informer', 'lister', 'indexer', 'reflector', 'store', 'cache', 'workqueue', 'ratelimiter', 'backoff', 'retry', 'circuit breaker', 'bulkhead', 'timeout', 'deadline', 'context', 'cancellation', 'graceful shutdown', 'health check', 'readiness probe', 'liveness probe', 'startup probe', 'init container', 'sidecar', 'ambassador', 'adapter', 'proxy', 'gateway', 'ingress', 'egress', 'service mesh', 'istio', 'linkerd', 'consul connect', 'envoy', 'traefik', 'nginx', 'haproxy', 'caddy', 'kong', 'zuul', 'spring cloud gateway', 'netflix zuul', 'aws api gateway', 'google cloud endpoints', 'azure api management', 'mulesoft', 'apigee', 'kong', 'tyk', 'gravitee', 'wso2', '3scale', 'mashery', 'layer7', 'ca api gateway', 'ibm api connect', 'software ag', 'microsoft', 'oracle', 'sap', 'salesforce', 'servicenow', 'atlassian', 'jira', 'confluence', 'bitbucket', 'bamboo', 'fisheye', 'crucible', 'crowd', 'access', 'portfolio', 'insight', 'trello', 'asana', 'monday', 'notion', 'slack', 'teams', 'discord', 'mattermost', 'rocket chat', 'element', 'matrix', 'signal', 'telegram', 'whatsapp', 'zoom', 'meet', 'teams', 'webex', 'gotomeeting', 'bluejeans', 'jitsi', 'bigbluebutton', 'openvidu', 'janus', 'mediasoup', 'kurento', 'coturn', 'stun', 'turn', 'ice', 'sdp', 'rtp', 'rtcp', 'srtp', 'dtls', 'sctp', 'webrtc', 'websocket', 'socket.io', 'sockjs', 'engine.io', 'ws', 'uws', 'faye', 'pusher', 'pubnub', 'ably', 'centrifugo', 'nchan', 'nginx push stream', 'server sent events', 'sse', 'event source', 'long polling', 'short polling', 'comet', 'ajax', 'fetch', 'axios', 'superagent', 'request', 'got', 'node-fetch', 'ky', 'redaxios', 'umi-request', 'alova', 'swr', 'react query', 'tanstack query', 'apollo client', 'relay', 'urql', 'graphql request', 'graphql code generator', 'graphql yoga', 'apollo server', 'mercurius', 'fastify', 'express', 'koa', 'hapi', 'restify', 'connect', 'polka', 'micro', 'itty router', 'worktop', 'itty durable objects', 'cloudflare workers', 'deno deploy', 'bun', 'node', 'deno', 'bun', 'runtime', 'javascript', 'typescript', 'python', 'java', 'c#', 'go', 'rust', 'php', 'ruby', 'scala', 'kotlin', 'swift', 'dart', 'flutter', 'react native', 'ionic', 'cordova', 'phonegap', 'xamarin', 'unity', 'unreal', 'godot', 'blender', 'maya', '3ds max', 'cinema 4d', 'houdini', 'nuke', 'after effects', 'premiere', 'final cut', 'davinci resolve', 'audacity', 'pro tools', 'logic pro', 'cubase', 'ableton', 'fl studio', 'reason', 'bitwig', 'reaper', 'studio one', 'cakewalk', 'garageband', 'soundtrap', 'bandlab', 'splice', 'loopcloud', 'output', 'native instruments', 'arturia', 'moog', 'korg', 'roland', 'yamaha', 'akai', 'novation', 'behringer', 'focusrite', 'preSonus', 'm audio', 'alesis', 'akai', 'mpc', 'maschine', 'push', 'launchpad', 'beatstep', 'keylab', 'minilab', 'microfreak', 'minilogue', 'monologue', 'volca', 'roland', 'juno', 'jupiter', 'tr', 'tb', 'sh', 'system', 'boutique', 'cloud', 'zen', 'zenology', 'verselab', 'mc', 'sp', 'jdxa', 'fantom', 'jupiter', 'juno', 'system', 'tr', 'tb', 'sh', 'boutique', 'cloud', 'zen', 'zenology', 'verselab', 'mc', 'sp', 'jdxa', 'fantom', 'jupiter', 'juno', 'system', 'tr', 'tb', 'sh', 'boutique', 'cloud', 'zen', 'zenology', 'verselab', 'mc', 'sp', 'jdxa', 'fantom', 'jupiter', 'juno', 'system', 'tr', 'tb', 'sh', 'boutique', 'cloud', 'zen', 'zenology', 'verselab', 'mc', 'sp', 'jdxa', 'fantom'];
  const techCount = techKeywords.filter(keyword => 
    content.toLowerCase().includes(keyword.toLowerCase())
  ).length;
  
  if (techCount > 10) {
    rating += 0.8;
    factors.push("Rich technical content");
  } else if (techCount > 5) {
    rating += 0.4;
    factors.push("Good technical depth");
  }
  
  // Structure and formatting
  const hasHeadings = /<h[1-6]|^#+\s/m.test(content);
  const hasCodeBlocks = /```|<code>|<pre>/m.test(content);
  const hasLists = /<ul>|<ol>|^\s*[-*+]\s/m.test(content);
  
  if (hasHeadings && hasCodeBlocks) {
    rating += 0.6;
    factors.push("Well-structured content");
  } else if (hasHeadings || hasCodeBlocks) {
    rating += 0.4;
    factors.push("Good structure");
  }
  
  if (hasLists) {
    rating += 0.2;
    factors.push("Organized presentation");
  }
  
  // Engagement indicators
  const hasQuestions = /\?/g.test(content);
  const hasPersonalStory = /\b(I|my|me|myself)\b/g.test(content);
  
  if (hasPersonalStory && hasQuestions) {
    rating += 0.6;
    factors.push("Engaging personal narrative");
  } else if (hasPersonalStory) {
    rating += 0.4;
    factors.push("Personal touch");
  }
  
  // Title and description quality
  const titleWords = title.split(/\s+/).length;
  const descWords = description.split(/\s+/).length;
  
  if (titleWords >= 5 && titleWords <= 15) {
    rating += 0.2;
    factors.push("Good title length");
  }
  
  if (descWords >= 20 && descWords <= 100) {
    rating += 0.2;
    factors.push("Appropriate description");
  }
  
  // Tags and categorization
  const allTags = [...(tags || []), ...(tag_list ? tag_list.split(',').map(t => t.trim()) : [])];
  if (allTags.length > 3) {
    rating += 0.2;
    factors.push("Well-tagged");
  }
  
  // Special content types
  if (content.includes('```') || content.includes('<code>')) {
    rating += 0.4;
    factors.push("Includes code examples");
  }
  
  if (content.includes('http') || content.includes('https')) {
    rating += 0.2;
    factors.push("Includes references");
  }
  
  // Reading time consideration (if available)
  if (blog.reading_time_minutes) {
    if (blog.reading_time_minutes >= 5 && blog.reading_time_minutes <= 15) {
      rating += 0.4;
      factors.push("Optimal reading length");
    } else if (blog.reading_time_minutes > 15) {
      rating += 0.2;
      factors.push("Comprehensive coverage");
    }
  }
  
  // Ensure rating is within bounds (10-point scale)
  rating = Math.max(1.0, Math.min(10.0, rating));
  
  // Generate rating reason
  const positiveFactors = factors.filter(f => f.includes('Good') || f.includes('Well') || f.includes('Rich') || f.includes('Comprehensive') || f.includes('Engaging') || f.includes('Personal') || f.includes('Includes') || f.includes('Optimal') || f.includes('Organized'));
  const reason = positiveFactors.length > 0 
    ? `Strong content with ${positiveFactors.join(', ').toLowerCase()}. ${wordCount > 1000 ? 'Comprehensive coverage' : 'Concise presentation'} with ${techCount > 5 ? 'substantial technical depth' : 'accessible explanations'}.`
    : `Solid blog post with good content structure and ${wordCount > 1000 ? 'detailed coverage' : 'focused topic'}.`;
  
  return {
    rating: Math.round(rating * 10) / 10, // Round to 1 decimal place (10-point scale)
    ratingReason: reason
  };
}

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
      data?.items.map((blog) => {
        const rating = rateBlogPost(blog);
        return {
          ...blog,
          category: "Memoir",
          rating: rating.rating,
          ratingReason: rating.ratingReason
        };
      })
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
        processedBlogs.map((blog) => {
          const rating = rateBlogPost(blog);
          return {
            ...blog,
            category: "Tech",
            rating: rating.rating,
            ratingReason: rating.ratingReason
          };
        })
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
