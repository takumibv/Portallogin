
// chrome.extension.sendRequest({"action": "getName"}, function(response) {
//                            var name = response;
//                            if (name == '' || name == null) {
//                                name = 'guest';
//                            }
//                            var hello = document.createElement('div');
//                            hello.innerText = "Hello, " + name;
//                            var d = document.getElementsByTagName('body')[0];
//                            var dp = d.parentNode;
//                            dp.insertBefore(hello, d);
//                        });

	// var password=[7],i,j;
	// for(i=0;i<7;i++){
	// 	password[i]=[];
	// 	for(j=0;j<10;j++){
	// 		password[i][j] = pass[i][j];
	// 	}
	// }


var a = document.getElementsByTagName("th");
  console.log(a[6].innerHTML);
  console.log(a[8].innerHTML);
  console.log(a[10].innerHTML);

  console.log("["+(a[6].innerHTML.substr(1,1).charCodeAt(0)-65)+","+(a[6].innerHTML.substr(3,1)-1)+"]=["+"]");

  //console.log(pass[4,3]);

//テキストボックスに文字を入力
  var b = document.getElementsByName("message3"),
      c = document.getElementsByName("message4"),
      d = document.getElementsByName("message5");
  
  //b[0].value = password[2][3];
  c[0].value = "abc";
  d[0].value = "abc";