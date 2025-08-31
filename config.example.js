// Copy this file to config.js and fill in your actual API keys
// This file shows the required configuration for the blog generation script

module.exports = {
  // Dev.to API Configuration
  // Get your API key from: https://dev.to/settings/account
  devTo: {
    apiUrl: 'https://dev.to/api',
    apiKey: 'your_dev_to_api_key_here'
  },
  
  // Blogger API Configuration
  // Get your API key from: https://console.developers.google.com/
  blogger: {
    apiUrl: 'https://www.googleapis.com/blogger/v3/blogs',
    blogId: 'your_blogger_id_here',
    apiKey: 'your_blogger_api_key_here'
  },
  
  // Karaoke API Configuration
  karaoke: {
    apiUrl: 'your_karaoke_api_url_here'
  }
};
