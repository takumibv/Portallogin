			var i;
			
				for(i=0;i<70;i++){
					document.getElementsByTagName("input")[i].value=String.fromCharCode(i+57);
				}

			var pass=[7];
			
			for(i=0;i<7;i++){
				pass[i]=[]
				for(j=0;j<10;j++){
					pass[i][j] = 0;
				}
			}
			document.getElementById("passsave").onclick = function(){
				
				var i,j,k=0;

				for(i=0;i<7;i++){
					pass[i]=[];
					for(j=0;j<10;j++){
						pass[i][j] = document.getElementsByTagName("input")[i*10+j].value;
						//console.log(document.getElementsByTagName("input")[i*10+j].value);
					}
				}

				localStorage.setItem('password',JSON.stringify(JSON.stringify(pass)));

				// for(i=0;i<7;i++){
				// 	for(j=0;j<10;j++){
				// 		console.log(pass[i][j]);
				// 	}
				// }

				//var options = JSON.parse(localStorage.getItem('password'));
				//	console.log(options);
			}

