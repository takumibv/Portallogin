

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	if(tab.url.indexOf('Portallogin') != -1){
		chrome.pageAction.show(tabId);
	}
	});

chrome.pageAction.onClicked.addListener(function(tab) {
	// var password[7],i,j;
	// for(i=0;i<7;i++){
	// 	password[i]=[];
	// 	for(j=0;j<10;j++){
	// 		password[i][j] = pass[i][j];
	// 	}
	// }

	chrome.tabs.executeScript(null,
		{file: "myscript.js"});
});


// function change(){
// 	var a = document.getElementsByTagName("th");
//   console.log(a[6].innerHTML);
//   console.log(a[8].innerHTML);
//   console.log(a[10].innerHTML);

//   console.log("["+(a[6].innerHTML.substr(1,1).charCodeAt(0)-65)+","+(a[6].innerHTML.substr(3,1)-1)+"]=["+"]");

// //テキストボックスに文字を入力
//   var b = document.getElementsByName("message3"),
//       c = document.getElementsByName("message4"),
//       d = document.getElementsByName("message5");
  
//   b[0].value = "abc";
//   c[0].value = "abc";
//   d[0].value = "abc";

// }
