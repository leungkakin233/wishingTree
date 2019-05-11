var localurl = 'http://192.168.1.168:8020/wishtree/';
var zhiUrl = 'http://zjfx.vip/wishtree/';
// var localurl = 'http://139.159.148.149:8090/wishtree/';
//var localurl = 'http://zjfx.vip/wishtree/'

function getUser() {
	var user = JSON.parse(window.JsInterface.getUser());
	user.role_id = user.id;
	var user = {
		"userId": user.id,
		"nickname": user.nickname,
		"roleId": user.role_id,
		"token": user.access_token,
	}

//		var user = {
//			"userId": "14",
//			"nickname": "114514",
//			"roleId": "14",
//			"token": "Token 76c9a359422d437c6fb93979b1e9279a2795ca0c",
//		}
//		alert(JSON.stringify(user));
	return user;
}

function getToken() {
			var user = JSON.parse(window.JsInterface.getUser());
			return user.access_token;

//		return "Token 76c9a359422d437c6fb93979b1e9279a2795ca0c";
}

function openWindow(url) {
	window.JsInterface.openWindow(localurl + url);
}

function openShareshop(url) {
	window.JsInterface.openWindow(url);
}

function selectAddress() {
	window.JsInterface.selectAddress();
}

function checkPosition(head, lat, lon) {
	window.JsInterface.checkPosition(head, lat, lon);
}

function bindScanWindow(){
	window.JsInterface.bindScanWindow()
}

function getLocation() {
	var location = JSON.parse(window.JsInterface.getLocation());
	// 		var location = {
	// 			"longitude": 0,
	// 			"latitude": 0,
	// 			"country": "中国",
	// 			"province": "广东",
	// 			"city": "珠海",
	// 			"county": "county",
	// 			"street": "street",
	// 			"hasSpeed": 1,
	// 			"speed": 1,
	// 			"hasRadius": 1,
	// 			"radius": 1,
	// 			"circleRange": 1
	// 		}
	return location;
}

function shareLink(title, desc, imageUrl, link) {
	window.JsInterface.shareLink(title, desc, imageUrl, link);
}