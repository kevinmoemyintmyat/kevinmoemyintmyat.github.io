npm run generate
npm run deploy

#Art deployment
cd .output/public/art
git init
git remote add origin https://github.com/kevinmoemyintmyat/art.git
git add .
git commit -a -m "deploy"
git push -f origin master
cd ../../..

#Music deployment
cd .output/public/music
git init
git remote add origin https://github.com/kevinmoemyintmyat/music.git
git add .
git commit -a -m "deploy"
git push -f origin master
cd ../../..

#Blog deployment
cp .output/public/200.html .output/public/blog
cp .output/public/404.html .output/public/blog
cd .output/public/blog
git init
git remote add origin https://github.com/kevinmoemyintmyat/blog.git
git add .
git commit -a -m "deploy"
git push -f origin master
cd ../../..

#AboutMe deployment
cd .output/public/about
git init
git remote add origin https://github.com/kevinmoemyintmyat/about.git
git add .
git commit -a -m "deploy"
git push -f origin master
cd ../../..
