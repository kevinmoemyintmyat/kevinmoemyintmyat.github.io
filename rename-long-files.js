const fs = require('fs');
const path = require('path');

// Rename long blog filenames to shorter ones
const renames = [
  {
    from: 'my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff.vue',
    to: 'github-game-off-2020-4dff.vue'
  },
  {
    from: 'portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j.vue',
    to: 'portokalive-platform-4b8j.vue'
  }
];

const blogDir = path.join(__dirname, 'pages', 'blog');

renames.forEach(({ from, to }) => {
  const fromPath = path.join(blogDir, from);
  const toPath = path.join(blogDir, to);
  
  if (fs.existsSync(fromPath)) {
    fs.renameSync(fromPath, toPath);
    console.log(`Renamed: ${from} → ${to}`);
  } else {
    console.log(`File not found: ${from}`);
  }
});

console.log('Renaming complete!');
