// ==UserScript==
// @name        Hello World !
// @namespace   http://www.m-bsys.com/
// @description 「Hello World !」を表示するだけのサンプルです。「http://www.m-bsys.com/」の「code」以外のページを開いた場合にのみ動作します。
// @include     https://portal.nap.gsic.titech.ac.jp/GetAccess/
// @exclude     http://www.m-bsys.com/code/*
// ==/UserScript==
alert("開始");
var OK_button=document.getElementsByName("OK")[0];


//if(location.href.indexOf("https://portal.nap.gsic.titech.ac.jp/GetAccess/Login/")!=1){

if(location.href=="https://portal.nap.gsic.titech.ac.jp/GetAccess/Login?Template=userpass_key"){
   
    document.getElementsByTagName("select")[0].value="UserPassword";
    OK_button.click();
    alert("login画面1");
  
 }else{
 	//document.getElementsByName("usr_name")[0].value=account[0];
    //document.getElementsByName("usr_password")[0].value=account[1];
    //OK_button.click();
    alert("login画面2");
    //location.href="http://portal.titech.ac.jp/"
 }
