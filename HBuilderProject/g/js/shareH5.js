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

function mGet(url, success, error) {
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

function shareCheck(stuffid, callback) {
	var zhireqdata = new Object();
	//	var url = 'zhi/smartstuff/stuff/' + 3033 + "/";
	//	var url = 'zhi/smartstuff/tourist/' + 3033 + "/";
	var url = 'zhi/smartstuff/tourist/' + 3321 + "/";
	mGet(url, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

function switchFC(ssInfoGroup, data, name) {
	switch(name) {
		case '1':
//			console.log(JSON.parse(data)[0].visibility);
			if(data.data == '') {
				//				ssInfoGroup.shareStore = ['1111'];

			} else {
				ssInfoGroup.phonebook = JSON.parse(data);
//				ssInfoGroup.phonebook = [];
				console.log(ssInfoGroup.phonebook);
			}
			break;
		case '2':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.workunity = JSON.parse(data);
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
			if(data == '') {
				console.log(1111)
			} else {
				ssInfoGroup.family = JSON.parse(data);
				//				console.log(ssInfoGroup.family)
			}
			break;
		case '5':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.notepad = JSON.parse(data);
				//				console.log(ssInfoGroup.notepad)
			}

			//			console.log(ssInfoGroup.notepad);
			break;
		case '8':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.electronicDrawer = JSON.parse(data);
				//				console.log(ssInfoGroup.electronicDrawer);
			}

			break;
		case '12':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.shareStore = JSON.parse(data);
				//				console.log(ssInfoGroup.shareStore)
			}

			break;
		case '13':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.securityGuard = JSON.parse(data);
				//				console.log(ssInfoGroup.securityGuard);
			}

			break;
		case '14':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.lostSearch = JSON.parse(data);
				//				console.log(ssInfoGroup.lostSearch);
			}

			break;
		case '15':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.withWho = JSON.parse(data);
				//				console.log(ssInfoGroup.withWho);
			}
			break;
		case '16':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.coupleRegulation = JSON.parse(data);
				//				console.log(ssInfoGroup.coupleRegulation);
			}

			break;
		case '17':
			if(data.data == '') {
				
			} else{
				
					ssInfoGroup.memberGroup = JSON.parse(data);
				
					
			}
				//									
				break;
		case '18':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.jobSkill = JSON.parse(data);
				//				console.log(ssInfoGroup.jobSkill);
			}

			break;
		case '19':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.scheduleRemind = JSON.parse(data);
				//				console.log(ssInfoGroup.scheduleRemind);
			}

			break;
		case '20':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.wishingTree = JSON.parse(data);
				//				console.log(ssInfoGroup.wishingTree);
			}

			break;
		case '21':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssHeadImgGroup.mobileLocation = JSON.parse(data);
				//				console.log(ssInfoGroup.mobileLocation);
			}

			break;
		case '22':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.skillMatch = JSON.parse(data);
				//				console.log(ssInfoGroup.skillMatch);
			}

			break;
		case '23':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.personalBelonging = JSON.parse(data);
				//				console.log(ssInfoGroup.personalBelonging);
			}

			break;
		case '24':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.thumbtack = JSON.parse(data);
				//				console.log(ssInfoGroup.thumbtack);
			}

			break;
		case '25':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.releaseNews = JSON.parse(data);
				//				console.log(ssInfoGroup.releaseNews);
			}

			break;
		case '26':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.seekHelp = JSON.parse(data);
				//				console.log(ssInfoGroup.seekHelp);
			}

			break;
		case '27':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.myCollection = JSON.parse(data);
				//				console.log(ssInfoGroup.myCollection);
			}

			break;
		case '28':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.memberGroup2 = JSON.parse(data);
				//				console.log(ssInfoGroup.memberGroup2);
			}

			break;
		case '29':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.companyGroup = JSON.parse(data);
				//				console.log(ssInfoGroup.companyGroup);
			}

			break;
		case '30':
			if(data.data == '' ) {
				//				ssInfoGroup.shareStore = ['1111'];
			} else {
				ssInfoGroup.linkmanGroup = JSON.parse(data);
				//				console.log(ssInfoGroup.linkmanGroup);
			}

			break;
	}
}