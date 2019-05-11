var zhiwu = 'http://139.159.149.232/'
//var zhiwu = 'http://192.168.1.116:8000/'
var ServerURl = "http://139.159.148.149:8081/platform/api/";

function getRequestUser() {
	var user = getUser();
	// user.location = getLocation();
	user.viewType = "ALL";
	return user;
}

//获取url？后面数据
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

function GetRequestbase64(search) {
	var url = location.search; //获取url中"?"符后的字串
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

function mRequest(url, reqdata, success, error) {
	mui.ajax(zhiwu + url, {
		data: reqdata,
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			"token": getToken()
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		success: success,
		error: error
	});
}

function touristGet(url, success, error) {
	mui.ajax(zhiwu + url, {
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'GET', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		success: success,
		error: error
	});
}

function mGet(url, success, error) {
	mui.ajax(zhiwu + url, {
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			"Authorization": getToken()
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'GET', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		success: success,
		error: error
	});
}

function mPut(url, success, error) {
	mui.ajax(zhiwu + url, {
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			"Authorization": getToken()
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'PUT', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		success: success,
		error: error
	});
}

function mPOSTData(url, reqdata, success, error) {
	mui.ajax(zhiwu + url, {
		data: reqdata,
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'POST', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		success: success,
		error: error
	});
}

//查詢智物
function shareCheck(stuffid, callback) {
	var zhireqdata = new Object();
	//	var url = 'zhi/smartstuff/stuff/' + 3033 + "/";
	//	var url = 'zhi/smartstuff/tourist/' + 3033 + "/";
	
	var url = 'zhi/smartstuff/tourist/' + stuffid + "/";
	
	touristGet(url, function(data) {
		callback(0, data); 
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

//查询单位
function orgCheck(stuffid, callback){
	var url = 'zhi/group/tourist/' + stuffid + "/";
	
	touristGet(url, function(data) {
		callback(0, data); 
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

//查询通讯录
function contactCheck(stuffid, callback){
	var url = 'zhi/contact/tourist/' + stuffid + "/";
	
	touristGet(url, function(data) {
		callback(0, data); 
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}
//根据roleid查询角色信息
function getChatRole(roleid ,callback){
	var url = 'zhi/szrole/tourist/' + roleid + '/'
	
	touristGet(url, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}


//获取当前聊一聊角色
function getCurrentCharacter(callback) {
	mGet('zhi/szrole/current/', function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	})
}


//加角色好友
function addFriendsRole(roleid, callback){
	var url = 'zhi/szrole/friendship/addfriendrole/' + roleid + '/';
	mPut(url, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	})
}

//判断是否加为好友
function areFriends(roleA, roleB, callback){
	var url = 'zhi/szrole/friendship/arefriends/?roleb=' + roleB + '&rolea=' + roleA;
	
	mGet(url, function(data){
		callback(0,data);
	}, function error(xhr, type, errorThrown){
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	})
}


//l二维码查询
function lcodeCheck(icode, callback){
	var reqdata = new Object();
	reqdata.qrcode = icode;
//	console.log(reqdata)
	mPOSTData('zhi/qrcode/getobj/', reqdata, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

function base64img(img){
		mui.ajax('http://bb51e21d.ngrok.io/zhi/qrcode/changebase64/', {
		data: {
			"url": img
		},
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',

		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		success: function(data){
			console.log(data);
		},
		error: function(data){
			console.log(data);
		}
	});
}

//添加二十四项
function switchFC(ssInfoGroup, data, name) {
	switch(name) {
		case '1':
			//			console.log(JSON.parse(data)[0].visibility);
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];

			} else {
				ssInfoGroup.phonebook = JSON.parse(data);
				//				ssInfoGroup.phonebook = [];
				//				console.log(ssInfoGroup.phonebook);
			}
			break;
		case '2':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.workunity = JSON.parse(data);
				//				console.log(JSON.parse(data));
				//				console.log(ssInfoGroup.workunity)
			}

			//			console.log(ssInfoGroup.workunity)
			break;
		case '3':
			//			if(data.data == '' ) {
			//				//				ssInfoGroup.shareStore = ['1111'];
			//			} else {
			//				ssInfoGroup.workunity = JSON.parse(data);
			//				console.log(ssInfoGroup.workunity)
			//			}
			break;
		case '4':
			//			console.log(data == "[]")
			if(data == "[]") {
				//				console.log(1111)
			} else {
				ssInfoGroup.family = JSON.parse(data);
				//								console.log(ssInfoGroup.family)
			}
			break;
		case '5':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.notepad = JSON.parse(data);
				//				console.log(ssInfoGroup.notepad)
			}

			//			console.log(ssInfoGroup.notepad);
			break;
		case '8':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.electronicDrawer = JSON.parse(data);
//				console.log(ssInfoGroup.electronicDrawer);
			}

			break;
		case '12':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
//				console.log(JSON.parse(data))
				ssInfoGroup.shareStore = JSON.parse(data);
								console.log(ssInfoGroup.shareStore)
			}

			break;
		case '13':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.securityGuard = JSON.parse(data);
				//				console.log(ssInfoGroup.securityGuard);
			}

			break;
		case '14':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
//				console.log(JSON.parse(data))
				ssInfoGroup.lostSearch = JSON.parse(data);
//				ssInfoGroup.lostSearchAddress = JSON.parse(data)[0].adress;
//				console.log(ssInfoGroup.lostSearchAddress);
			}

			break;
		case '15':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.withWho = JSON.parse(data);
				//				console.log(ssInfoGroup.withWho);
			}
			break;
		case '16':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.coupleRegulation = JSON.parse(data);
				//				console.log(ssInfoGroup.coupleRegulation);
			}

			break;
		case '17':
			if(data.data == '') {

			} else {

				ssInfoGroup.memberGroup = JSON.parse(data);

			}
			//									
			break;
		case '18':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.jobSkill = JSON.parse(data);
				//				console.log(ssInfoGroup.jobSkill);
			}

			break;
		case '19':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.scheduleRemind = JSON.parse(data);
				//				console.log(ssInfoGroup.scheduleRemind);
			}

			break;
		case '20':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.wishingTree = JSON.parse(data);
				//				console.log(ssInfoGroup.wishingTree);
			}

			break;
		case '21':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
//				console.log(JSON.parse(data));
				ssInfoGroup.mobileLocation = JSON.parse(data);
//								console.log(ssInfoGroup.mobileLocation);
			}

			break;
		case '22':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.skillMatch = JSON.parse(data);
				//				console.log(ssInfoGroup.skillMatch);
			}

			break;
		case '23':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.personalBelonging = JSON.parse(data);
				//				console.log(ssInfoGroup.personalBelonging);
			}

			break;
		case '24':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.thumbtack = JSON.parse(data);
				//				console.log(ssInfoGroup.thumbtack);
			}

			break;
		case '25':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.releaseNews = JSON.parse(data);
				//				console.log(ssInfoGroup.releaseNews);
			}

			break;
		case '26':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.seekHelp = JSON.parse(data);
				//				console.log(ssInfoGroup.seekHelp);
			}

			break;
		case '27':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.myCollection = JSON.parse(data);
				//				console.log(ssInfoGroup.myCollection);
			}

			break;
		case '28':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.memberGroup2 = JSON.parse(data);
				//				console.log(ssInfoGroup.memberGroup2);
			}

			break;
		case '29':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.companyGroup = JSON.parse(data);
				//				console.log(ssInfoGroup.companyGroup);
			}

			break;
		case '30':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.linkmanGroup = JSON.parse(data);
				//				console.log(ssInfoGroup.linkmanGroup);
			}
			break;
		case '31':
			
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.zhiwuGroup = JSON.parse(data);
//								console.log(ssInfoGroup.zhiwuGroup);
			}
			break;
		case '32':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.mapFlag = JSON.parse(data);
				//				console.log(ssInfoGroup.linkmanGroup);
			}
			break;
		case '33':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.roleGroup = JSON.parse(data);
				//				console.log(ssInfoGroup.linkmanGroup);
			}
			break;
		case '34':
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.companyNews = JSON.parse(data);
				//				console.log(ssInfoGroup.linkmanGroup);
			}
			break;
	}
}