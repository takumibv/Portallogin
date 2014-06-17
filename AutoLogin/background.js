
alert(tab.url.indexOf('e'));

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
	if(tab.url.indexOf('dotinstall') != -1){
		chrome.PageAction.show(tabId);
	}
	});

chrome.pageAction.onClicked.addListener(function(){
	chrome.tabs.executeScript(null, {
		"code":"document.body.style.backgroundColor='red'"
	})
});

// chrome.browserAction.onClicked.addListener(function(){
// 	var color = localStorage['color'] ? localStorage['color'] :'red';
// 	chrome.tabs.executeScript(null,{
// 	"code":"document.body.style.backgroundColor='"+color+"'"
// 	});
// });

