var localurl = 'http://192.168.1.95:8020/wishingTreeMuiRem/';
// var localurl = 'http://139.159.148.149:8090/wishtree';

function getUser() {
      		var user = JSON.parse(window.JsInterface.getUser());
      		// user.role_id = user.id;
      		var user = {
      			"userId": user.id,
      			"nickname": user.nickname,
      			"roleId": user.role_id,
      			"token": user.access_token,
      		}

// 	var user = {
// 		"userId": "65",
// 		"nickname": "leungkakin",
// 		"roleId": "65",
// 		"token": "Token 718f21654bc19c57528bf3d886c27ea856b43b02",
// 	}
//	var user = {
//		"userId": "308",
//		"nickname": "李田所",
//		"roleId": "308",
//		"token": "Token a8e02e3795d7b56fedd7ec4c3b5d0227731f7994",
//	}
	return user;
}

function getToken() {
	  var user = JSON.parse(window.JsInterface.getUser());
	 return user.access_token;
			// return "Token 718f21654bc19c57528bf3d886c27ea856b43b02";
//			return "Token a8e02e3795d7b56fedd7ec4c3b5d0227731f7994";
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




