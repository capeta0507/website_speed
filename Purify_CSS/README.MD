# PurifyCSS 移除用不到的 CSS
###### tags: `網站速度` `PurifyCSS`

### 前言
現在網站設計考慮 RWD 特性，花很多精神撰寫、測試 CSS，甚至於採用適合的套件，例如 Bootstrap、Materialize、Tailwind CSS 等套件。

然而這寫套件的設計檔案非常大，且有愈來愈大的趨勢，而網頁上或許僅採用其中一部份的功能而已，造成檔案載入效能被延遲。

### Purify CSS 協助移除用不到的 CSS Class
目前的 CSS 套件都是以 Class name 的方式崁入到 html 檔案中，所以，可以用本程式做追查，把用不到的 CSS Class name 予以移除，並且產生一個較小版本的 CSS 檔案。

### 安裝
`npm install -g purify-css` 安裝全域程式

### 範例

