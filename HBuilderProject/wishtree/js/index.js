//漂浮愿望卡
function createywk() {

	//设置漂浮愿望卡的函数
	if(content.wishList != null) {
		for(var i = 0; i < content.wishList.length; i++) {
			var ywkgroup = document.getElementById('ywkgroup');
			var ywk = document.createElement('div');
			var coordinate = content.wishList[i].coordinate.split(",");
			var startX = coordinate[0];
			var startY = coordinate[1];
			//			console.log(startX+','+startY);
			// alert(typeof(coordinate));

			ywk.setAttribute('class', 'label-ywk');
			ywk.setAttribute('id', content.wishList[i].id);
			ywk.style.position = "absolute";
			ywk.style.top = startX + "px";
			ywk.style.left = startY + "px";
			ywkgroup.appendChild(ywk);

			ywk.addEventListener('tap', function() {
				var wishid = this.getAttribute('id');
				var wish = null;
				console.log(wishid);
				for(var i = 0; i < content.wishList.length; i++) {
					if(wishid == content.wishList[i].id) {
						wish = content.wishList[i];
						//						console.log(wish)
					}
				}
				localStorage.setItem('wish', JSON.stringify(wish));
				//				console.log('item/watchWish.html?wishId=' + wishid + '&resId=' + wish.res.id)
				openWindow('item/watchWish.html?wishId=' + wishid + '&resId=' + wish.res.id);
			})

			ywk.addEventListener('touchstart', function(e) {
				// console.log(JSON.stringify(e.targetTouches[0]));
				startX = e.targetTouches[0].pageX - this.offsetLeft;
				startY = e.targetTouches[0].pageY - this.offsetTop;
				// console.log(startY);
			});

			ywk.addEventListener('touchmove', function(e) {
				// console.log(JSON.stringify(e));
				if(user.userId == treeUser.userId) {
					var leftX = e.targetTouches[0].pageX - startX;
					// 						console.log(startX);
					// 						console.log('leftX'+leftX)
					var topY = e.targetTouches[0].pageY - startY;
					var parentW = e.targetTouches[0].target.offsetParent.clientWidth;
					var parentH = e.targetTouches[0].target.offsetParent.clientHeight;
					var thisW = e.targetTouches[0].target.clientWidth;
					var thisH = e.targetTouches[0].target.clientHeight;
					var l = parentW - thisW;
					var t = parentH - thisH;
					if(leftX <= 0) {
						leftX = 0;
					}
					if(leftX >= l) {
						leftX = l;
					}
					if(topY <= 0) {
						topY = 0;
					}
					if(topY >= t) {
						topY = t;
					}
					this.style.left = leftX + 'px';
					this.style.top = topY + 'px';
				} else {
					mui.toast('只有树主才能修改愿望牌哦');
				}

			}, false);

			ywk.addEventListener("touchend", function(e) {
				var wishid = this.getAttribute('id');
				var top = this.style.top.split('px');
				var left = this.style.left.split('px');
				var coordinate = top[0] + ',' + left[0];
				if(user.userId == treeUser.userId) {
					tree3004(wishid, coordinate, function(type, data) {
						if(type == 0) {
							mui.toast('愿望牌地址更新成功' + coordinate);
						} else {
							mui.toast('愿望牌更新失败' + data);
						}
					})
				} else {

				}
			}, false);

		}
	}
};

//标题栏滚动样式变动
mui('.mui-bar-transparent').transparent({
	top: 0,
	offset: 100,
	duration: 16,
	scrollby: document.querySelector('.mui-scroll-wrapper')
});

//气泡生成
function createBubble() {
	var bubblegroup = document.getElementById('bubblegroup');
	var bubblesLeft = [];
	var bubblesTop = [];
	// console.log(content.bubbleList.length);
	if(content.bubbleList.length != 0) {
		for(var i = 0; i < content.bubbleList.length; i++) {
			var temp = document.documentElement.clientWidth * 0.1;
			if(i == 0) {
				bubblesLeft[0] = document.documentElement.clientWidth * (0.72 - content.bubbleList.length * 0.1);
				bubblesTop[0] = Math.random() * 1.2 + 0.8;
			} else {
				temp += bubblesLeft[i - 1];
				bubblesLeft[i] = temp + Math.random() * 15;
				bubblesTop[i] = Math.random() * 1.2 + 0.8;

			}
		};
		for(var i = 0; i < content.bubbleList.length; i++) {
			var b1 = document.createElement('div');
			b1.setAttribute('class', 'bubble-true bubble-move' + (i + 1));
			b1.setAttribute('id', content.bubbleList[i].id);
			b1.style.animation = 'bmove' + (i + 1) + " " + (1000 + Math.random() * 200) + 'ms infinite';
			b1.style.animationFillMode = 'forwards';
			b1.style.animationDirection = 'alternate';
			b1.style.animationTimingFunction = "linear";
			b1.style.left = bubblesLeft[i] + "px";
			b1.style.top = bubblesTop[i] + "rem";
			b1.innerText = content.bubbleList[i].currentPoints;
			bubblegroup.appendChild(b1);
		};
		//获取css样式表
		var mycssstyles;
		console.log(document.styleSheets);
		mycssstyles = document.styleSheets[3];
		console.log(mycssstyles);
		//修改气泡动画的跳动 jump
		for(var i = 17; i < 23; i++) {
			var y = i - 17;
			console.log(mycssstyles.cssRules[i]);
			mycssstyles.cssRules[i].cssRules[0].style.top = bubblesTop[y] + "rem";
			mycssstyles.cssRules[i].cssRules[1].style.top = bubblesTop[y] + 0.25 + Math.random() * 0.1 + "rem";
		}
	} else {
		mui.toast('没有气泡');
	}
};

//收集气泡
mui('.bubble-group').on('tap', '.bubble-true', function() {

	var id = this.getAttribute("id");
	var bm = document.getElementById(id);

	var points = bm.innerText;

	tree3001(id, function(type, data) {
		if(type == 0) {
			var getpoints = points;
			var log = new Object();
			var user = getRequestUser();
			delete user.token;

			user.location = getLocation();
			user.avatar = null;

			log.id = null;
			log.point = getpoints;
			log.time = 1545985434000;
			log.user = user;
			log.description = "收取能量值";

			if(data.success == false) {
				bm.setAttribute('class', 'bubble-false');
				mui.toast('这个气泡已经不能再被采摘了');
			} else if(data.data.currentPoints == 0) {
				//		当归零的时候调用这个函数
				bm.style.animation = 'bubbleclear 2s 1';
				bm.style.animationFillMode = 'forwards';
				bm.setAttribute('class', 'bubble-false');

				content.logList.unshift(log);
			} else {
				// console.log(JSON.stringify(data));
				bm.setAttribute('class', 'bubble-false');
				bm.innerText = data.data.currentPoints;
				content.logList.unshift(log);
			}
		} else {
			console.log('收集气泡失败' + data);
		}
	});
});

//获取地址
function onSelectAddressComplete(data) {
	//				alert(JSON.stringify(data));
	var item = content.item;
	tree1002(item, data, function(type, data) {
		if(type == 0) {
			mui.toast('地图更新成功');
		} else {
			mui.toast('地图更新失败' + data);
		}
	});
}

//确认树的位置

//window onload
window.onload = function() {

	user = getUser();

	//		alert('现在的用户:' + JSON.stringify(user));
	var search = location.search;
//		alert(location.search);
	request = GetRequest(search);
	token = user.token;
	treeid = request['treeId'];
//								 alert(treeid);

	//3bbc50b7的树
	//	treeid = 'ff8080816941ddf60169478f4dc802da';
	//skr-a0的树
	//		treeid = 'ff8080816941ddf60169475c2e45028d'
	//存入localstorage
	if(!window.localStorage) {
		alert("浏览器bu支持localstorage");
	} else {
		var storage = window.localStorage;
		//写入字段
		var d = JSON.stringify(user);
		storage.setItem("user", d);
		storage.setItem("treeid", treeid);
		storage.setItem("token", token);
	}

	//TREE1001获取许愿树
	tree1001(treeid, function(type, data) {
		if(type == 0) {
			//						console.log(JSON.stringify(data));
			//			console.log(data)
			//						alert(JSON.stringify(data.data));
			treeUser = data.data.item.user;
//									alert('树的主人'+JSON.stringify(treeUser));
			header.banner = {
				name: data.data.item.name,
				points: data.data.item.points,
				img: data.data.item.avatar
			};
			window.localStorage.setItem('headImg', data.data.item.avatar);
			content.item = data.data.item;
			//									 alert('item内的信息:' + JSON.stringify(content.item));
			topPopover.favoriteFlag = data.data.item.favorite;
			content.bubbleList = data.data.bubbleList;
			content.wishList = data.data.wishList;
			content.logList = data.data.logList;
			console.log(data.data);
			createBubble();
			createywk();

			//			window.localStorage.setItem('item',JSON.stringify(data.data.item));
			//			completeLoading();
		} else {
			console.log("获取许愿树失败" + data)
		}
	});

	//地图跳转事件
	document.getElementById('address').addEventListener('tap', function() {
		//		if(user.userId == treeUser.userId) {
		//			selectAddress();
		var head = '';
		if(content.item.avatar != null) {
			head = content.item.avatar;
		}
		if(content.item.location == null) {
			mui.toast('该许愿树未绑定地址')
		} else {
			checkPosition(head, content.item.location.latitude, content.item.location.longitude);
		}

		//		} else {
		//			mui.toast('您无权修改树信息');
		//		}
	});

	//左上角愿望卡跳转事件		
	document.getElementById('hope').addEventListener('tap', function() {
		//					window.JsInterface.openWindow(localurl + '/item/lookForWish.html?treeId=' + treeid);
		openWindow('item/lookForWish.html?treeId=' + treeid);
	});

	//新增愿望跳转事件
	document.getElementById('wishing').addEventListener('tap', function() {
		//					window.JsInterface.openWindow(localurl + '/item/wishing.html?treeId=' + treeid);
		openWindow('item/wishing.html?treeId=' + treeid);
	});

	//活动记录列表跳转事件
	document.getElementById('powerlist').addEventListener('tap', function() {
		openWindow('item/powerList.html');
	});

	//分享店跳转事件
	document.getElementById('shareshop').addEventListener('tap', function() {
		//		openWindow('item/powerList.html');
		openShareshop('http://139.159.152.145:9280/#/CurrShop');
	});
	//功德箱跳转事件
	document.getElementById('virtueBox').addEventListener('tap', function() {
		if(content.item.canDonation == true) {
			openWindow('item/virtueBox.html');
		} else {
			mui.toast('树主暂未开启捐款功能哦');
		}
	});

	//移植跳转事件
	document.getElementById('transplant').addEventListener('tap', function() {
		openWindow('item/transplant.html');
	});
	//浇水事件 
	document.getElementById('xsh').addEventListener('tap', function() {
		console.log(1111)
		var img = document.createElement('img');
		img.setAttribute('src', 'images/jiaoshui.gif');
		//		img.src = 'images/jiaoshui.gif';
		img.setAttribute('class', 'xshImg');
		img.setAttribute('id', 'xshImg')

		document.getElementById('content').appendChild(img);
		setTimeout(remove, 2700);

	});

	function remove() {
		document.getElementById('content').removeChild(document.getElementById('xshImg'));
	}

	//setting 跳转事件
	document.getElementById('setting').addEventListener('tap', function() {
		if(user.userId == treeUser.userId) {
			openWindow('item/setting.html?treeId=' + treeid);
		} else {
			mui.toast('您不是树主，无法设置哦')
		}
	});
	//
	document.getElementById('share').addEventListener('tap', function() {
		shareLink('来自于智加的许愿树分享信息',  header.banner.name + '(点击查看详情--> http://zjfx.vip/...)',
					header.banner.img, zhiUrl + 'index.html?treeId=' + treeid);
	});

	//收藏事件
	document.getElementById('favorite').addEventListener('tap', function() {
		if(topPopover.favoriteFlag == false) {
			tree5001(treeid, function(type, data) {
				if(type == 0) {
					topPopover.favoriteFlag = true;
					mui.toast('收藏成功' + JSON.stringify(data));
				} else {
					console.log("收藏失败" + data);
					alert("收藏失败" + data);
				}
			})
		} else {
			tree5002(treeid, function(type, data) {
				if(type == 0) {
					topPopover.favoriteFlag = false;
					mui.toast('取消收藏' + JSON.stringify(data));
				} else {
					console.log("取消失败" + data);
					alert("收藏失败" + data);
				}
			})
		}

	});

	document.getElementById('back').addEventListener('tap', function() {
		//				alert('111');
		localStorage.clear();
		window.JsInterface.closeWindow();

	});

//	document.addEventListener('scroll', winScroll, false);
//
//	function winScroll(e) {
//		
//		if(document.getElementById('header').offsetTop < document.body.scrollTop) {
//			document.getElementById('back').src = '../images/pub_ico_goback_white.png';
//		};
//		if(document.getElementById('header').offsetTop > document.body.scrollTop) {
//			document.getElementById('back').src = '../images/pub_ico_goback.png';
//		};
//	}
};