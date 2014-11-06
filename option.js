			//設定画面のパスワード（localStrage[pass]に格納）
			if(localStorage.getItem('pass')){
				(function(){
					PRO=prompt("オプションページに入るためのパスワードを入力してください");
					if(PRO==null){ window.close() }
					while(PRO!=localStorage.getItem('pass')){
						if(PRO==null){ window.close() }
						alert("パスワードが違います。");
						PRO=prompt("パスワードを入力してください");
					}
				})()
			}else{
				(function(){
					PRO=prompt("passwordを設定してください");
					localStorage.setItem('pass',PRO);
					if(PRO!=null && PRO!=""){
						PRO=prompt("もう一度入れてください");
						if(PRO!=localStorage.getItem('pass')){
							alert("パスワードが違います。\nパスワードは生成されませんでした。");
							localStorage.removeItem('pass');
						}
					}else{
						alert("パスワードは生成されませんでした。");
						localStorage.removeItem('pass');
					}
				})()

			}

			var p=localStorage.getItem('pass') ? localStorage.getItem('pass') : "";
			console.log("password:"+p);

			var i,j;
			
			// for(i=0;i<70;i++){
			// 	document.getElementsByTagName("input")[i].value=String.fromCharCode(i+57);
			// }

			 var saved = JSON.parse(localStorage.getItem('password')) ? JSON.parse(localStorage.getItem('password')) : "";

				console.log(saved);
			
			if(JSON.parse(localStorage.getItem('password'))){
				for(i=0;i<7;i++){
					for(j=0;j<10;j++){
						document.getElementsByTagName("input")[i*10+j].value=saved[3+i*42+j*4];
					}
				}
			}

			document.getElementById("passsave").onclick = function(){
				
				var i,j,k=0;
				var pass=[];

				for(i=0;i<7;i++){
					pass[i]=[];
					for(j=0;j<10;j++){
						pass[i][j] = document.getElementsByTagName("input")[i*10+j].value;
						//console.log(document.getElementsByTagName("input")[i*10+j].value);
					}
				}

				localStorage.setItem('password',JSON.stringify(JSON.stringify(pass)));
				if(i==7 && j==10){
					alert("保存しました。");
				}
				
			}

			document.getElementById("clear").onclick = function(){
				var i,j,k=0;

				for(i=0;i<70;i++){
						document.getElementsByTagName("input")[i].value="";
				}
			}
			document.getElementById("passclear").onclick = function(){
				localStorage.removeItem('pass');

			}
