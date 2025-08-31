# Kevinmoemyintmyat.github.io

****

<p>Version 2.0</p>
<p>by m3yevn</p>

<hr/>





## ⭐ Public Url

https://kevinmoemyintmyat.github.io

## 📚 Tech Stack

 - Nuxt
 - Vue


## 📸 Screenshots

N.A

## 📜 Scripts

```sh
build : $ nuxt build
dev : $ nuxt dev
generate : $ nuxi generate
generate-blog : $ node generate_blog.js
preview : $ nuxi preview
postinstall : $ nuxi prepare
deploy : $ gh-pages --dotfiles -d .output/public

```

## 🔧 Environment Variables

To use the blog generation script, you need to set up environment variables. Create a `.env` file in the root directory with the following variables:

```bash
# Dev.to API Configuration
NUXT_ENV_DEV_TO_API=https://dev.to/api
DEV_TO_API_KEY=your_dev_to_api_key_here

# Blogger API Configuration
NUXT_ENV_BLOGGER_API=https://www.googleapis.com/blogger/v3/blogs
BLOGGER_ID=your_blogger_id_here
BLOGGER_API_KEY=your_blogger_api_key_here

# Karaoke API Configuration
NUXT_ENV_KARAOKE_API=your_karaoke_api_url_here
```

### Getting API Keys:
- **Dev.to**: Get your API key from [Dev.to Settings](https://dev.to/settings/account)
- **Blogger**: Get your API key from [Google Cloud Console](https://console.developers.google.com/)

### Blog Generation:
The `generate-blog` script fetches blog posts from Dev.to and Blogger APIs and generates Vue components for your Nuxt site. Run it with:
```sh
npm run generate-blog
```

## 🔑 Keywords



## 👾 Submit issues at

Visit the repository to open bug reports and issues

## ©️ License

This project is licensed under the MIT License. See the LICENSE file for details.

## Dependencies

 - @nuxtjs/sitemap : $ ^7.4.3
 - dotenv : $ ^16.4.5
 - handlebars : $ ^4.7.8

## Dev Dependencies

 - @types/node : $ ^18
 - autoprefixer : $ ^10.4.14
 - gh-pages : $ ^5.0.0
 - nuxt : $ ^3.5.0
 - postcss : $ ^8.4.25
 - tailwindcss : $ ^3.3.2


<img src="https://cdn.dribbble.com/users/2401141/screenshots/5487982/developers-gif-showcase.gif"/>

## Documentations



<hr/>
Happy Coding!
