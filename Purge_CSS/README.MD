# PurgeCSS 移除用不到的 CSS
###### tags: `網站速度` `PurgeCSS`

### 前言
要移除用不到的 CSS，除了 PurifyCSS 之外，還有一套功能強大的工具，叫 PurgeCSS。

### PurgeCSS
1. [網站](https://purgecss.com/)
2. 教學 [How to Scan and Remove Unused CSS Properties | PurgeCSS Tutorial](https://www.youtube.com/watch?v=y3WQoON6Vfc&t=196s)

### PurgeCSS 協助移除用不到的 CSS Class
目前的 CSS 套件都是以 Class name 的方式崁入到 html 檔案中，所以，可以用本程式做追查，把用不到的 CSS Class name 予以移除，並且產生一個較小版本的 CSS 檔案。

### 安裝
`npm install -g purgecss` 安裝全域程式。

### 範例
[Github Purify_CSS](https://github.com/capeta0507/website_speed/tree/main/Purify_CSS)

建製所需要的工作目錄，進入該目錄。
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
    "build-css": "purgecss --css styles.css --content *.html *.js --out styles.purge.css"
  },
  "keywords": [],
  "author": "davidtpe",
  "license": "ISC"
}
```
#### 執行 Purgecss 程序
`npm run build-css`，系統會產生適合引用的 bootstrap.purge.css，檔案裡只留下 index.html 所引用的 Class name。

