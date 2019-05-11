//			获取用户信息
var user = window.JsInterface.getUser();
var userid = JSON.parse(user).id;
var nickname = JSON.parse(user).nickname;
var roleId = JSON.parse(user).role_id;
var token = JSON.parse(user).access_token;
var uuid = JSON.parse(user).uid;

//			参加求助接口
function participate_in_activities() {
	mui.ajax('http://139.159.148.149:8081/platform/api/activity/v1/signIn/help', {
		data: {
			"user": {
				"userId": userid,
				"nickname": nickname,
				"roleId": roleId,
				"viewType": "ALL"
			},
			"item": {
				"id": id
			}
		},
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			"token": token
		},
		    dataType: 'json', //服务器返回json格式数据
		    type: 'post', //HTTP请求类型
		    timeout: 10000, //超时时间设置为10秒；
		    success: function(data) {
//			alert(JSON.stringify(data))
		},
		    error: function(xhr, type, errorThrown) {        
			mui.toast('参加求救失败');
		}
	});
}


