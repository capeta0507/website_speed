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