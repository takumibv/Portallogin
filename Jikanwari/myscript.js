alert("OK.1");
//console.log(pass);
  if(location.href=="https://portal.nap.gsic.titech.ac.jp/GetAccess/Login?Template=userpass_key"){
   
    document.getElementsByTagName("select")[0].value="UserPassword";
    document.getElementsByName("OK")[0].click();
    alert("OK.2");
  
 }



 if(location.href.indexOf("https://portal.nap.gsic.titech.ac.jp/GetAccess/Login")!=-1){
  alert("OK.3");
// window.onload=function(){
    document.getElementsByName("usr_name")[0].value=account[0];
    document.getElementsByName("usr_password")[0].value=account[1];
    //document.getElementsByName("OK")[0].click();
    alert("OK.4");
 }

var a = document.getElementsByTagName("th");
  // console.log(a[6].innerHTML);
  // console.log(a[8].innerHTML);
  // console.log(a[10].innerHTML);

// console.log(pass[(a[6].innerHTML.substr(1,1).charCodeAt(0)-65)][(a[6].innerHTML.substr(3,1)-1)]);
// console.log("["+(a[8].innerHTML.substr(1,1).charCodeAt(0)-65)+","+(a[8].innerHTML.substr(3,1)-1)+"]");
// console.log(pass[(a[10].innerHTML.substr(3,1)-1)][(a[10].innerHTML.substr(1,1).charCodeAt(0)-65)]);

//テキストボックスに文字を入力
  var b = document.getElementsByName("message3"),
      c = document.getElementsByName("message4"),
      d = document.getElementsByName("message5");
      e = document.getElementsByName("OK");
  
  b[0].value = pass[(a[6].innerHTML.substr(3,1)-1)][(a[6].innerHTML.substr(1,1).charCodeAt(0)-65)];
  c[0].value = pass[(a[8].innerHTML.substr(3,1)-1)][(a[8].innerHTML.substr(1,1).charCodeAt(0)-65)];
  d[0].value = pass[(a[10].innerHTML.substr(3,1)-1)][(a[10].innerHTML.substr(1,1).charCodeAt(0)-65)];

  console.log(pass[(a[6].innerHTML.substr(3,1)-1)][(a[6].innerHTML.substr(1,1).charCodeAt(0)-65)]);
  console.log(pass[(a[8].innerHTML.substr(3,1)-1)][(a[8].innerHTML.substr(1,1).charCodeAt(0)-65)]);
  console.log(pass[(a[10].innerHTML.substr(3,1)-1)][(a[10].innerHTML.substr(1,1).charCodeAt(0)-65)]);

  e[0].click();
