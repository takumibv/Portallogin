

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
// 	if(tab.url.indexOf('GetAccess') != -1 || tab.url.indexOf('Portallogin') != -1){
// 		chrome.pageAction.show(tabId);
// 	}
// 	});
// chrome.browserAction.onClicked.addListener(function() {

// 	chrome.tabs.create({"url": "https://portal.nap.gsic.titech.ac.jp/GetAccess/Login?Template=userpass_key" });
// });

chrome.browserAction.onClicked.addListener(function(tab) {

	chrome.tabs.create({"url": "https://portal.nap.gsic.titech.ac.jp/GetAccess/Login?Template=userpass_key" });
	//alert(tab.url);
	//var account = localStorage.getItem('account');
	var passw = JSON.parse(localStorage.getItem('password'));
	chrome.tabs.executeScript(null,
		{ code: "var pass = "+passw },
		
		function(tab){
			var account = localStorage.getItem('account');
			chrome.tabs.executeScript(null,
				{ code: "var account = "+account },
				function(tab){

					chrome.tabs.getSelected(null, function(tab) {
						//alert(tab.url);
						//while(tab.url.indexOf("https://portal.nap.gsic.titech.ac.jp/GetAccess/Login?Template=userpass_key")!= -1 && i<1){
							//alert("a");
							chrome.tabs.executeScript(null, { file: "myscript2.js"},function(){
								alert("第２段階");
								chrome.tabs.executeScript(null, { file: "myscript2.js"},function(){
										//document.getElementsByName("OK")[0].click();
	    								if(OK_button.click()){
	    									alert("login画面です");
											alert("完了");
										}
								});
							});
							
					});
					//chrome.tabs.create({url: "popup.html"});
					//chrome.tabs.getSelected(null, function(tab) {  
					//chrome.tabs.executeScript(null, { file: "myscript.js"});
						
				
				}
			);
		}
	);
		//{file: "myscript.js"});
});
