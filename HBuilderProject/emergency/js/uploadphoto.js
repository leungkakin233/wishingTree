//		选取照片
		var C=document.getElementById('exam');
		document.getElementById('choosephoto').addEventListener('tap', function() {
				window.JsInterface.selectImages(9-arr.length);
			})
			var arr=new Array;
			function picUploadComplete(data){
				var len=data.length;
				for(i=0;i<len;i++){
					one=data[i].url;
					arr.push(one);
					if(arr.length>8){
						C.style.display='none';
					}
					img=new Image();
					img.src=one;
			 		img.setAttribute('data-preview-group','1');
					img.setAttribute('data-preview-src','');
					var div=document.createElement('div');
					div.setAttribute('class','imgbox');
					var close=document.createElement('img');
					close.setAttribute('class','close_icon'); 
					close.setAttribute('src','../../image/pub_ico_close.png');
					div.appendChild(close);
					div.appendChild(img);
					document.getElementById("selectphoto").insertBefore(div,C);
				};
			};
//			删除候选照片
			mui('body').on('tap','.close_icon',function() {
				var url=this.parentNode.children[1].src;
				for(var i=0;i<arr.length;i++){
					var replace=arr[i].replace(/\\/g,'/')
					if(url==replace){
					arr.splice(i,1);
					document.getElementById('selectphoto').removeChild(this.parentNode);
					if(arr.length<9){
						C.style.display='inline';
					}
					}
				}
			})
			