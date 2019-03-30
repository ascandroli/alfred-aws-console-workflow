
``` 

wget https://d1.awsstatic.com/webteam/architecture-icons/AWS-Architecture-Icons_PNG_20190207.dc87f146435a511ec9ef9ab7b27578f3936aa2b8.zip
unzip AWS-Architecture-Icons_PNG_20190207.dc87f146435a511ec9ef9ab7b27578f3936aa2b8.zip
mv AWS-Architecture-Icons_PNG pngs
rm -fr pngs/Dark-BG
find pngs/ -type file -name "*.png" > pngs.txt
node icons.js

```
