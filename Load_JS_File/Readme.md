# 動態加入 css, javascript
###### tags: `網站速度` `Dynamic`

為了提升網頁的下載速度，在需要的在加入 CSS File & JS File 是必要的作法，尤其是網頁較複雜時，而使用者也未必會用到該功能，所以，在使用某些特定功能時才加以引用是一個可行的做法。

### Github
[Github](https://github.com/capeta0507/website_speed/tree/main/Load_JS_File)

### 參考資料
1. [Load a javascript file dynamically](https://htmldom.dev/load-a-javascript-file-dynamically/)

#### index.html
```htmlmixed=
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>動態加入</title>
</head>
<body>
  <p>Click the <strong>"Try it button"</strong> to make a BUTTON element with <strong>"CLICK ME"</strong> text.</p>
  <button onclick="myFunction()">Try it</button>

  <script>
    // Try it 按鈕所執行的程式
    function myFunction() {
      var btn = document.createElement("button");         // 建立 button Element
      btn.setAttribute("type","button");
      btn.innerHTML = "CLICK ME";                         // 文字 CLICK ME
      btn.id = "myBtn"                                    // id = myBtn
      document.body.appendChild(btn);                     // 將 button 加到 body 下面
      btn.addEventListener("click",()=>{alert('Hello')})  // btn.addEventListener("click",()=>{alert('Hello')});
    }
  </script>
  <script src="./js/jquery-3.5.1.js"></script>            // 引進 jQuery.js
</body>
</html>
```
以上的案例在 Try 增加一個 CKICK ME 按鈕，並且為按鈕增加一個 click event ，執行 `alert('Hello')` 指令。
見下圖。
![](https://i.imgur.com/Cpf0j8P.png)

本系統在最後引用了 jQuery.js 套件，作為後續的處理，而 jQuery.js 的檔案不小，所以，在需要時才動態引用，可以縮短網頁下載的時間。

#### index-onload.html
在 window.onload 之後產生一個 "button"，才引用 jQuery.js，並且在 jQuery.js Load 完成之後，才指定 button 的 click 監聽。

見下圖：

![](https://i.imgur.com/EjE6jNP.png)


```htmlmixed=
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>動態加入</title>
  <link rel="stylesheet" href="./css/bootstrap.purge.css">
</head>
<body>
  <div id="mainContainer" class="container">
    <p>Click the <strong>"CLICK ME"</strong> Button.</p>
  </div>
  
  <script>
    var jQLoad = false;  // jQuery 不要重複載入 jQload = false -> 可以載入 -> jQload = true
    window.onload = () =>{
      var myContainer = document.getElementById("mainContainer"); //定義 mainContainer
      var btn = document.createElement("button");  // 建立 button Element
      btn.setAttribute("type","button");
      btn.classList.add("btn","btn-success");      // 增加 Class name
      btn.innerHTML = "CLICK ME";                  // 文字 CLICK ME
      btn.id = "myBtn";                            // id = myBtn
      myContainer.appendChild(btn);                // 將 button 加到　mainContainer 下面
      console.log("Button ... 產生")
      // btn.addEventListener("click",()=>{alert('Hello')});
      if (jQLoad == false){
        var jQFile = document.createElement('script');      // 建立 script Element
        jQFile.setAttribute("type","text/javascript");
        jQFile.setAttribute("src","./js/jquery-3.5.1.js");  // src
        jQFile.addEventListener('load',()=>{
          console.log('jQuery 下載完成...');
          var myJQBtn = $('#myBtn');
          myJQBtn.click(myJQueryHi);
        })
        console.log('jQuery append ...');                    
        document.body.appendChild(jQFile);                   // jQFile 加到　body 下面
        jQLoad = true;
      } else{
        console.log('jQuery 不須重複載入...');
      }
    }

    // 載入 jQuery 之後 CLICK ME 按鈕的執行程式
    function myJQueryHi(){
      alert('Hi jQuery ...');
    }

  </script>
  
</body>
</html>
```

#### index-click-load.html
在 Load jQuery 按鈕上才去下載 jQuery，而且用 jQLoad (True/False)設定來讓 jQuery.js 只下載一次。
當 jQuery.js 下載完成之後才 Enable CLICK ME 按鈕，並且以jQuery指定 CLICK ME 按鈕執行 click 事件指令。

見下圖：

![](https://i.imgur.com/14pFSmn.png)

```htmlmixed=
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>動態加入</title>
  <link rel="stylesheet" href="./css/bootstrap.purge.css">
</head>
<body>
  <div id="mainContainer" class="container">
    <p>Click the <strong class="text-primary">"Try it button"</strong> to make a BUTTON element with <strong class="text-danger">"CLICK ME"</strong> text.</p>
    <button type="button" class="btn btn-primary" onclick="myFunction()">Try it</button>
  </div>
  <hr/>
  <div id="loadContainer" class="container">
    <p>按 <strong class="text-warning bg-dark">"Load jQuery"</strong> 按鈕，程式才下載 jquery-3.5.1.js 下來。</p>
    <button type="button" class="btn btn-dark text-warning" onclick="myLoadJQuery()">Load jQuery</button>
    <button id="jQBtn" type="button" class="btn bg-warning text-danger" disabled>CLICK ME</button>
  </div>
  
  <script>
    var jQLoad = false;  // jQuery 不要重複載入 jQload = false -> 可以載入 -> jQload = true
    // Try it 按鈕，自動產生一個新的 CLICK ME 按鈕，並監聽 click 事件。
    function myFunction() {
      var myContainer = document.getElementById("mainContainer"); //定義 mainContainer
      var btn = document.createElement("button");  // 建立 button Element
      btn.setAttribute("type","button");
      btn.classList.add("btn","btn-success");      // 增加 Class name
      btn.innerHTML = "CLICK ME";                  // 文字 CLICK ME
      btn.id = "myBtn";                            // id name
      myContainer.appendChild(btn);                // 將 button 加到　mainContainer 下面
      btn.addEventListener("click",()=>{alert('Hello')})
    }

    // Load jQuery 按鈕，下載 jQuery.js，下載完成之後就可以執行 jQuery 所需的指令，並且避免多次下載 jQuery
    function myLoadJQuery(){
      if (jQLoad == false) {  // 沒下載過才處理本段落
        var jQFile = document.createElement('script');      // 建立 script Element
        // jQFile.type = "text/javascript";
        jQFile.setAttribute("type","text/javascript");
        // jQFile.src = "./js/jquery-3.5.1.js"
        jQFile.setAttribute("src","./js/jquery-3.5.1.js");  // src
        jQFile.addEventListener('load',()=>{                // script addEventListener 'load' 完成才處理
          console.log('jQuery 下載完成...');
          // jQuery 下載完成才加入以 jQuery 執行的 Button 指令。
          var myJQBtn = $('#jQBtn');                     // jQBtn
          myJQBtn.attr('disabled',false);                // Enable
          myJQBtn.click(myJQueryHi);                     // Click -> myJQueryHi()
        })
        console.log('jQuery append ...');                    
        document.body.appendChild(jQFile);                   // jQFile 加到　body 下面
        jQLoad = true;
      } else {
        console.log('jQuery 不須重複載入...');
      }
    }
    // 載入 jQuery 之後 CLICK ME 按鈕的執行程式
    function myJQueryHi(){
      alert('Hi jQuery ...');
    }
  </script>
  
</body>
</html>
```
