
``` 
wget https://d1.awsstatic.com/webteam/architecture-icons/Q32020/AWS-Architecture-Assets-For-Light-and-Dark-BG_20200911.478ff05b80f909792f7853b1a28de8e28eac67f4.zip
unzip AWS-Architecture-Icons_PNG_20190207.dc87f146435a511ec9ef9ab7b27578f3936aa2b8.zip
mv AWS-Architecture-Icons_PNG pngs
rm -fr pngs/Dark-BG
find pngs/ -type file -name "*.png" > pngs.txt
node icons.js
```

``` 
wget https://d1.awsstatic.com/webteam/architecture-icons/Q32020/AWS-Architecture-Assets-For-Light-and-Dark-BG_20200911.478ff05b80f909792f7853b1a28de8e28eac67f4.zip\n
unzip AWS-Architecture-Assets-For-Light-and-Dark-BG_20200911.478ff05b80f909792f7853b1a28de8e28eac67f4.zip
mv AWS-Architecture-Assets-For-Light-and-Dark-BG_20200911 pngs
cd pngs
find . -type d -name "*Dark*" | xargs rm -fr
find pngs/ -type file -name "*.png" > pngs.txt
node icons.js
```
