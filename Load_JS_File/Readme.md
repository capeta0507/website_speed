# 動態加入 css, javascript
###### tags: `網站速度` `Dynamic`

為了提升網頁的下載速度，在需要的在加入 CSS File & JS File 是必要的作法，尤其是網頁較複雜時，而使用者也未必會用到該功能，所以，在使用某些特定功能時才加以引用是一個可行的做法。

```htmlmixed=
<!DOCTYPE html>
<html>
<body>

<p>Click the button to make a BUTTON element with text.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "CLICK ME";
  btn.id = "myBtn"
  document.body.appendChild(btn);
  btn.addEventListener("click",()=>{alert('Hello')})
}
</script>

</body>
</html>
```
