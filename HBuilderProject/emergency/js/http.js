document.write("<script language=javascript src='../../js/native.js'></script>");

var ServerURL1 = "http://139.159.148.149:8081/platform/api/";
var ServerURL2 = 'http://139.159.149.232/zhi/';

function getRequestUser() {
	var user = getUser();
	user.location = getLocation();
	user.viewType = "ALL";
	return user;
}

function request(ServerURL, url, reqdata, success, error) {
	if(ServerURL=="http://139.159.148.149:8081/platform/api/"){
		var headers={
			'Content-Type': 'application/json;charset=UTF-8',
			"token": getToken()
		}
	}else if(ServerURL=='http://139.159.149.232/zhi/'){
		var headers={
			'Content-Type': 'application/json;charset=UTF-8',
			"Authorization": getToken()
		}
	}
	mui.ajax(ServerURL + url, {    
		data: reqdata,
		headers: headers,
		    dataType: 'json', //服务器返回json格式数据
		    type: 'post', //HTTP请求类型
		    timeout: 10000, //超时时间设置为10秒；
		    success: success,
		    error: error
	});
}


function getRequestData(ServerURL, url, success, error) {
	if(ServerURL=="http://139.159.148.149:8081/platform/api/"){
		var headers={
			'Content-Type': 'application/json;charset=UTF-8',
			"token": getToken()
		}
	}else if(ServerURL=='http://139.159.149.232/zhi/'){
		var headers={
			'Content-Type': 'application/json;charset=UTF-8',
			"Authorization": getToken()
		}
	}
	mui.ajax(ServerURL + url, {    
		data: {},
		headers: headers,
		    dataType: 'json', //服务器返回json格式数据
		    type: 'get', //HTTP请求类型
		    timeout: 10000, //超时时间设置为10秒；
		    success: success,
		    error: error
	});
}


function IndexsendHelpByCategory(categoryid, item, reminderList, authorizeList, callback) {
	var obj = new Object();
	var category = new Object();
	obj.user = getRequestUser();
	obj.item = item;
	obj.category = category;
	obj.reminderList=reminderList;
	obj.authorizeList=authorizeList;
	category.id = categoryid;
	request(ServerURL1, "activity/v1/create/help", obj, function(data) {
		callback(0, data);
		console.log(JSON.stringify(data));
//		alert(JSON.stringify(data));
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText);
		console.log(xhr.responseText+"=="+type+"=="+errorThrown);
	});

}

function SaveReminderListFunction(operation, saveReminderList, callback){
	var obj = new Object();
	obj.operation=operation;
	obj.reminder=saveReminderList;
	request(ServerURL2, "contact/reminder/bulkoperation/", obj, function(data) {
		callback(0, data);
		console.log(JSON.stringify(data));
//		alert(JSON.stringify(data));
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText);
		console.log(xhr.responseText+"=="+type+"=="+errorThrown);
		alert(xhr.responseText+"=="+type+"=="+errorThrown)
	});
}
