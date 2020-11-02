# PurifyCSS 移除用不到的 CSS
###### tags: `網站速度` `PurifyCSS`

### 前言
現在網站設計考慮 RWD 特性，花很多精神撰寫、測試 CSS，甚至於採用適合的套件，例如 Bootstrap、Materialize、Tailwind CSS 等套件。

然而這寫套件的設計檔案非常大，且有愈來愈大的趨勢，而網頁上或許僅採用其中一部份的功能而已，造成檔案載入效能被延遲。

### Purifycss
[Github](https://github.com/purifycss/purifycss)
[教學](https://www.youtube.com/watch?v=06UsYjOezvc)
[PurifyCSS Online](https://purifycss.online/)

### 手動檢查
教學：[How to Find and Remove Unused CSS](https://www.youtube.com/watch?v=q8lFNQKHPH8&t=83s)

### Purify CSS 協助移除用不到的 CSS Class
目前的 CSS 套件都是以 Class name 的方式崁入到 html 檔案中，所以，可以用本程式做追查，把用不到的 CSS Class name 予以移除，並且產生一個較小版本的 CSS 檔案。

### 安裝
`npm install -g purify-css` 安裝全域程式

### 範例
[Github Purify_CSS](https://github.com/capeta0507/website_speed/tree/main/Purify_CSS)

建製所需要的工作目錄，進入該目錄
#### bootstrap
下載 bootstrap.css , bootstrap.min.css

#### index.html
撰寫引用 Bootstrap CSS 的網頁 index.html
```htmlmixed=
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./bootstrap.min.css">
</head>
<body>

  <div class="jumbotron text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p> 
  </div>
```
#### npm
`npm init -y` 產生 package.josn 檔案，並撰寫 build-css script。
```json=
{
  "name": "Purify_CSS",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build-css": "purifycss bootstrap.css index.html --min --out bootstrap.purify.css --info"
  },
  "keywords": [],
  "author": "davidtpe",
  "license": "ISC"
}
```

#### 執行 purifycss 程序
`npm run build-css`，系統會產生適合引用的 bootstrap.purify.css，檔案裡只留下 index.html 所引用的 Class name。

### 缺點/解決
Purify-css 無法解決在 js 事件執行所做的 Class name 增加，建下面的 index.js
```javascript=
var mySubmit = document.getElementById('btnSubmit');
var myCancel = document.getElementById('btnCancel');
var myMessage = document.getElementById('formMessage');

mySubmit.addEventListener('click',(e)=>{
  // console.log('Submit...');
  e.preventDefault();
  myMessage.classList.remove('alert-secondary');
  myMessage.classList.add('alert-success');
  myMessage.innerText = "註冊資料 已送出"
})

myCancel.addEventListener('click',(e)=>{
  // console.log('Cancel ...');
  e.preventDefault();
  myMessage.classList.remove('alert-success');
  myMessage.classList.add('alert-secondary');
  myMessage.innerText = "請重新填寫 註冊資料"
})
```
程式裡 submit click event 為 myMessage 增加 Class name -> alert-success ，在 bootstrap.purify.css 就無法有效的引用了。

也就是說 Purify-css 無法處理程式的 class name 變動的部分。

解決方法也很簡單，只需在 package.json script 裡修改 `"build-css": "purifycss bootstrap.css index.html index.js --min --out bootstrap.purify.css --info"` 增加引用 index.js 程式即可。

修正如下：
```json=
{
  "name": "Purify_CSS",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build-css": "purifycss bootstrap.css index.html index.js --min --out bootstrap.purify.css --info"
  },
  "keywords": [],
  "author": "davidtpe",
  "license": "ISC"
}
```

再重新執行 `npm run build-css` 指令即可，並引用新的 bootstrap.purify.css。
