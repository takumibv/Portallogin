			var i;
				for(i=0;i<70;i++){
					document.getElementsByTagName("input")[i].value=i%10;
				}

			var pass=[7];
			for(i=0;i<7;i++){
				pass[i]=[]
				for(j=0;j<10;j++){
					pass[i][j] = 0;
				}
			}
			document.getElementById("passsave").onclick = function(){
				
				var i,j;

				// for(i=0;i<70;i++){
				// 	document.getElementsByTagName("input")[i].value="a";
				// }

			for(i=0;i<7;i++){
				pass[i]=[];
				for(j=0;j<10;j++){
					pass[i][j] = document.getElementsByTagName("input")[i*10+j].value;
					//console.log(document.getElementsByTagName("input")[i*10+j].value);
				}
			}

			for(i=0;i<7;i++){
				for(j=0;j<10;j++){
					console.log(pass[i][j]);
				}
			}

				//console.log(pass[1],pass[2],pass[3]);
			}