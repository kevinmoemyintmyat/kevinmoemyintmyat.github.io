npm run build
npm run deploy

npm run generate

#Art deployment
cd .output/public/art
git init
git remote add origin https://github.com/kevinmoemyintmyat/art.git
git add .
git commit -a -m "deploy"
git push origin master
cd ../../..

#Music deployment
cd .output/public/music
git init
git remote add origin https://github.com/kevinmoemyintmyat/music.git
git add .
git commit -a -m "deploy"
git push origin master
cd ../../..
