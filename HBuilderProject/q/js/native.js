var localurl = 'http://192.168.1.168:8020/q/'
//var localurl = 'http://139.159.148.149:8090/q/';
//var permissionUrl = 'http://zjfx.vip/q/';
var permissionUrl = 'http://192.168.1.168:8020/q/'

var qrurl = 'http://zjfx.vip/l/';

//	var qrurl = 'http://139.159.148.149:8090/qrcode/';

function getUser() {
	var user = JSON.parse(window.JsInterface.getUser());
	// user.role_id = user.id;
	var user = {
		"userId": user.id,
		"nickname": user.nickname,
		"roleId": user.role_id,
		"token": user.access_token,
	}

	return user;
}

function getToken() {
	var user = JSON.parse(window.JsInterface.getUser());
	return user.access_token;
}

function openWindow(url) {
	window.JsInterface.openWindow(localurl + url);
}

function selectAddress() {
	window.JsInterface.selectAddress();
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

function GetRequest(search) {
	//	var url = location.search; //获取url中"?"符后的字串
	//	 alert(url);
	var theRequest = new Object();
	if(search.indexOf("?") != -1) {
		var str = search.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	// alert(JSON.stringify(theRequest));
	return theRequest;
}

function decoderBase64File(str) {
	//	alert(1111)
	window.JsInterface.decoderBase64File(str);
}

function shareLink(title, desc, imageUrl, link) {
	window.JsInterface.shareLink(title, desc, imageUrl, link);
}

function str_substr(start, end, str) {
	temp = str.split(start, 2);
	content = temp[1].split(end, 2);
	return content[0];
}