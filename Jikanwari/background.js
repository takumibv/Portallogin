

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
// 	if(tab.url.indexOf('GetAccess') != -1 || tab.url.indexOf('Portallogin') != -1){
// 		chrome.pageAction.show(tabId);
// 	}
// 	});

chrome.browserAction.onClicked.addListener(function(tab) {

	var pass = JSON.parse(localStorage.getItem('password'));
	chrome.tabs.executeScript(null,
		{ code: "var pass = "+pass },
	function(){
		chrome.tabs.executeScript(null, { file: "myscript.js"});
	}
	);

		//{file: "myscript.js"});
});

