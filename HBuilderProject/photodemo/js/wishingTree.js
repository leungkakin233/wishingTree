//document.write("<script language=javascript src='js/native.js'></script>");

// var ServerURl = "http://node1.xiuhuahui.xyz:8080/platform/api/";
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
	if (search.indexOf("?") != -1) {
		var str = search.substr(1);
		strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	// alert(JSON.stringify(theRequest));
	return theRequest;
}

function mRequest(url, reqdata, success, error) {
	mui.ajax(ServerURl + url, {
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

function tree1001(treeid, callback) {
	var treereqdata = new Object();
	var tree = new Object();
	tree.id = treeid;
	treereqdata.user = getRequestUser();
	treereqdata.tree = tree;
	mRequest("tree/v1/data/get", treereqdata, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

function tree1002(item, data, callback) {

	var reqdata = new Object();
	var location = new Object();
	var tree = new Object();
	location.longitude = data.longitude;
	location.latitude = data.latitude;
	location.country = data.country;
	location.province = data.province;
	location.city = data.city;
	location.county = data.county;
	location.street = data.street + data.streetNumber;
	location.circleRange = data.circleRange;
	tree.id = item.id;
	tree.name = item.name;
	tree.tag = item.tag;
	tree.location = location;
	reqdata.user = getRequestUser();
	reqdata.tree = tree;

	mRequest("tree/v1/tree/update", reqdata, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

function tree2002(treeid, finished, callback) {
	var reqdata = new Object();
	var tree = new Object();
	var wish = new Object();
	tree.id = treeid;
	reqdata.tree = tree;
	if (finished == 0) {
		wish.finished = false;
		reqdata.wish = wish;
	} else if (finished == 1) {
		wish.finished = true;
		reqdata.wish = wish;
	} else {

	}

	mRequest("tree/v1/wish/list", reqdata, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

function tree2003(treeid, callback) {
	var treereqdata = new Object();
	var tree = new Object();
	tree.id = treeid;
	treereqdata.user = getRequestUser();
	treereqdata.tree = tree;
	mRequest("tree/v1/log/list", treereqdata, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}


function tree3001(bubbleid, callback) {
	var reqdata = new Object();
	var bubble = new Object();

	bubble.id = bubbleid;
	reqdata.user = getRequestUser();
	reqdata.bubble = bubble;

	mRequest("tree/v1/bubble/pick", reqdata, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

function tree3002(treeid, wish, callback) {
	var reqdata = new Object();
	var tree = new Object();

	tree.id = treeid;
	reqdata.user = getRequestUser();
	reqdata.tree = tree;
	reqdata.wish = wish;

	mRequest("tree/v1/wish/add", reqdata, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

function tree3003(wish, callback) {
	var reqdata = new Object();
	
	reqdata.user = getRequestUser();

	reqdata.wish = wish;

	mRequest("tree/v1/wish/finish", reqdata, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

function tree3004(wishid, coordinate, callback) {
	var reqdata = new Object();
	var wish = new Object();

	wish.id = wishid;
	wish.coordinate = coordinate;
	reqdata.user = getRequestUser();
	reqdata.wish = wish;

	mRequest("tree/v1/wish/update", reqdata, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

function tree5001(treeid, callback) {
	var reqdata = new Object();
	var tree = new Object();
	var favorite = new Object();


	tree.id = treeid;
	favorite.add = true;
	reqdata.user = getRequestUser();
	reqdata.tree = tree;
	reqdata.favorite = favorite;

	mRequest("tree/v1/tree/favorite/add", reqdata, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

function tree5002(treeid, callback) {
	var reqdata = new Object();
	var tree = new Object();
	var favorite = new Object();

	tree.id = treeid;
	favorite.cancel = true;
	reqdata.user = getRequestUser();
	reqdata.tree = tree;
	reqdata.favorite = favorite;

	mRequest("tree/v1/tree/favorite/cancel", reqdata, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

function comment1001(resid, commentid, orderby, callback) {
	var reqdata = new Object();
	var res = new Object();
	var comment = new Object();
	var requestUrl = null;
	res.id = resid;
	reqdata.res = res;
	if (commentid == 0) {

	} else {
		comment.id = commentid;
		reqdata.comment = comment;
	}

	if (orderby == 0) {
		requestUrl = "comment/v1/list";
	} else {
		requestUrl = "comment/v1/list?orderBy=like";
	}

	mRequest(requestUrl, reqdata, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

function comment1002(resid, txt, imgs, commentid, callback) {
	var reqdata = new Object();
	var res = new Object();
	var comment = new Object();

	res.id = resid;
	comment.content = txt;
	comment.imageUrlList = imgs;

	if (commentid == 0) {

	} else {
		comment.id = commentid;
	}

	reqdata.res = res;
	reqdata.comment = comment;

	mRequest('comment/v1/reply', reqdata, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

function comment1004(commentId, replyId, callback) {
	var reqdata = new Object();
	var res = new Object();
	var comment = new Object();

	res.id = commentId;
	comment.id = replyId;
	reqdata.user = getRequestUser();
	reqdata.comment = comment;
	reqdata.res = res;


	mRequest('comment/v1/delete', reqdata, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

function comment1005(resid, commentid, callback) {
	var reqdata = new Object();
	var res = new Object();
	var comment = new Object();

	res.id = resid;
	reqdata.res = res;
	reqdata.user = getRequestUser();

	if (commentid == 0) {

	} else {
		comment.id = commentid;
		reqdata.comment = comment;
	}

	mRequest('comment/v1/like/add', reqdata, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}


function comment1007(resid, commentid, callback) {
	var reqdata = new Object();
	var res = new Object();
	var comment = new Object();

	res.id = resid;
	reqdata.res = res;
	reqdata.user = getRequestUser();
	if (commentid == 0) {

	} else {
		comment.id = commentid;
		reqdata.comment = comment;
	}


	mRequest('comment/v1/like/cancel', reqdata, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});
}

function sendHelpByCategory(categoryid, item, callback) {
	var obj = new Object();
	var category = new Object();
	obj.user = getRequestUser();
	//	obj.item = item;
	obj.category = category;
	category.id = categoryid;
	request("activity/v1/create/help", obj, function(data) {
		callback(0, data);
	}, function error(xhr, type, errorThrown) {
		callback(-1, xhr.responseText + 'type: ' + type + 'errorThrown' + errorThrown);
	});

}
