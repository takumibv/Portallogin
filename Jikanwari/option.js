			//設定画面のパスワード（localStrage[pass]に格納）
			if(localStorage.getItem('pass')){
				(function(){
					PRO=prompt("パスワードを入力してください");
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
			//console.log("password:"+p);

			var i,j;
			
			// for(i=0;i<70;i++){
			// 	document.getElementsByTagName("input")[i].value=String.fromCharCode(i+57);
			// }

			 var saves = JSON.parse(localStorage.getItem('account')) ? JSON.parse(localStorage.getItem('account')) : "";
			 var saved = JSON.parse(localStorage.getItem('password')) ? JSON.parse(localStorage.getItem('password')) : "";

				console.log(saved);
			
			//localstorage[password]に要素があればそれを入力
			if(JSON.parse(localStorage.getItem('password'))){
				for(i=0;i<7;i++){
					for(j=0;j<10;j++){
						document.getElementsByTagName("input")[4+i*10+j].value=saved[3+i*42+j*4];
					}
				}
			}
			//localstorage[account]に要素があればそれを入力
			if(JSON.parse(localStorage.getItem('password'))){
				document.getElementById("account").value=saves[0];
				document.getElementById("password").value=saves[1];
			}

			//アカウントパスワードの「保存」をクリックした時の動作
			document.getElementById("passsave1").onclick = function(){
				var account = [document.getElementById("account").value,document.getElementById("password").value];

				//account[0]=document.getElementById("account").value;
				//account[1]=document.getElementById("password").value;
				console.log(account[0]);
				console.log(account[1]);				

				localStorage.setItem('account',JSON.stringify(account));
			}

			//アカウントパスワードの「クリア」をクリックした時の動作
			document.getElementById("clear1").onclick = function(){
				document.getElementById("account").value="";
				document.getElementById("password").value="";
			}

			//シリアルナンバーの「保存」をクリックした時の動作
			document.getElementById("passsave").onclick = function(){
				
				var i,j,k=0;
				var pass=[];

				for(i=0;i<7;i++){
					pass[i]=[];
					for(j=0;j<10;j++){
						pass[i][j] = document.getElementsByTagName("input")[4+i*10+j].value;
						//console.log(document.getElementsByTagName("input")[i*10+j].value);
					}
				}

				localStorage.setItem('password',JSON.stringify(JSON.stringify(pass)));
			}

			//シリアルナンバーの「クリア」をクリックした時の動作
			document.getElementById("clear").onclick = function(){
				var i,j,k=0;

				for(i=0;i<70;i++){
						document.getElementsByTagName("input")[4+i].value="";
				}
			}
			//シリアルナンバーの「パスワードをクリア」をクリックした時の動作
			document.getElementById("passclear").onclick = function(){
				localStorage.removeItem('pass');
			}
