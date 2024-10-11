const { format } = require("date-fns/format");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const appRoot = path.resolve(__dirname);
dotenv.config();

const devBlogApiUrl = process.env.NUXT_ENV_DEV_TO_API;

const readHTMLFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
      if (err) {
        reject(err);
      } else {
        resolve(html);
      }
    });
  });
};

const fillTemplate = (html, replacements) => {
  return handlebars.compile(html)(replacements);
};

async function fetchDevBlogData() {
  const response = await fetch(`${devBlogApiUrl}/articles?username=m3yevn`);
  const data = await response.json();

  data.forEach(async (blog) => {
    const blogResult = await fetch(`${devBlogApiUrl}/articles/${blog.id}`);
    const blogData = await blogResult.json();
    console.log(blogData);

    const html = await readHTMLFile("templates/Blog.html");
    const templateReplacement = {
      html: blogData.body_html,
      title: blogData.title,
      date: format(new Date(blogData.published_at), "dd MMMM yyyy"),
    };
    const template = fillTemplate(html, templateReplacement);
    const path = appRoot + `/pages/blog/${blog.slug}.vue`;
    fs.readFile(path, (err, data) => {
      if (err) {
        fs.writeFile(path, template, function (err) {
          if (err) {
            return console.log(err);
          }
          console.log(`${blog.slug} was saved!`);
        });
      } else {
        fs.writeFile(path, template, function (err) {
          if (err) {
            return console.log(err);
          }
          console.log(`${blog.slug} was saved!`);
        });
      }
    });
  });
}

fetchDevBlogData();
