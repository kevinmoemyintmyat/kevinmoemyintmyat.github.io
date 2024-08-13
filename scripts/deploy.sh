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
