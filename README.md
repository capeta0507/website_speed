# 如何提升網站速度
###### tags: `網站速度` `intro`

### Github
[如何提升網站速度](https://github.com/capeta0507/website_speed)

### 前言
網站執行速度的提升是現代網頁設計的進階課題，一旦網頁開發所引用的套件愈來越多，網頁開啟、執行的速度就會受影響。

### 影響因素
影響網路效能的因素琳瑯滿目，每次也都不一樣，大致上可以區分以下因素
1. 主機位置 (台灣、亞洲、美國)會影響反應時間。
2. 檔案大小(HTML,JS,CSS,JPG,PNG,MPEG)，也會影響傳輸速度。
3. API 主機效能。

### 移除用不到的 CSS
CSS 檔案的自行開發，或引用套件(Bootstrap, Materialize, Tailwind)等通常都引用一部分所需 Component，卻造成檔案引用過大的問題，這時候就需要適當的工具追蹤使用情況，並予以刪除不需要的 Class。

#### Purify CSS
1. Purify CSS： [Github](https://github.com/purifycss/purifycss)。
2. [教學 Filter Out Unused CSS with PurifyCSS](https://www.youtube.com/watch?v=06UsYjOezvc)
3. 範例：[Github Purify_CSS](https://github.com/capeta0507/website_speed/tree/main/Purify_CSS)

#### Purge CSS
1. Purge CSS：[網站](https://purgecss.com/)
2. [教學 How to Scan and Remove Unused CSS Properties | PurgeCSS Tutorial](https://www.youtube.com/watch?v=y3WQoON6Vfc&t=196s)
3. 範例：[Github Purge_CSS](https://github.com/capeta0507/website_speed/tree/main/Purge_CSS)

### 網站速度測試
以下範例都做正常版以及提速版的測試，用 Google PageSpeed Insights 來觀看執行效能的改善。
檢查：
1. Google PageSpeed Insight
2. 瀏覽器檢查：Network
3. 瀏覽器檢查：Coverage

測試網址：https://backend-functions-8797f.web.app/
本階段測試
1. Purge CSS 壓縮 Bootstrap 所做的改變。
程式碼：[Github](https://github.com/capeta0507/website_speed/tree/main/WebSpeedTest/PurgeCSS)
3. CSS 壓縮 + 圖檔大小的比較。
程式碼：[Github](https://github.com/capeta0507/website_speed/tree/main/WebSpeedTest/Firebase)
5. CSS 壓縮 + 圖檔位置比較。(Local or CDN)。
程式碼：[Github](https://github.com/capeta0507/website_speed/tree/main/WebSpeedTest/Storage)

可以看到測試比較。

![](https://i.imgur.com/aW5eCYm.png)
