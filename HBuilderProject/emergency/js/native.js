function getUser() {
	var user = JSON.parse(window.JsInterface.getUser());
	var user = {
		"userId": user.id,
		"nickname": user.nickname,
		"roleId": user.role_id,
		"token": user.access_token,
	}

	//		var user = {
	//			"userId": 67,
	//			"nickname": "nickname",
	//			"roleId": 67,
	//			"token": 'Token d63dd190225d957db26c0c9f8d31583ca8114fe2',
	//		}
	return user;
}

function getToken() {
	var user = JSON.parse(window.JsInterface.getUser());
	return user.access_token;
	//		return "Token d63dd190225d957db26c0c9f8d31583ca8114fe2";
}

var Address;
function getLocation() {
	var location = JSON.parse(window.JsInterface.getLocation());
	//		var location = {
	//			"address": "人民东路",
	//			"longitude": 0,
	//			"latitude": 0,
	//			"country": "中国",
	//			"province": "广东",
	//			"city": "珠海",
	//			"county": "county",
	//			"street": "street",
	//			"hasSpeed": 1,
	//			"speed": 1,
	//			"hasRadius": 1,
	//			"radius": 1,
	//			"circleRange": 1
	//		}
	return location;
	Address=location;
}

function getFlatternDistance(lat1,lng1,lat2,lng2){
        var f = getRad((lat1 + lat2)/2);
        var g = getRad((lat1 - lat2)/2);
        var l = getRad((lng1 - lng2)/2);
        
        var sg = Math.sin(g);
        var sl = Math.sin(l);
        var sf = Math.sin(f);
        
        var s,c,w,r,d,h1,h2;
        var a = EARTH_RADIUS;
        var fl = 1/298.257;
        
        sg = sg*sg;
        sl = sl*sl;
        sf = sf*sf;
        
        s = sg*(1-sl) + (1-sf)*sl;
        c = (1-sg)*(1-sl) + sf*sl;
        
        w = Math.atan(Math.sqrt(s/c));
        r = Math.sqrt(s*c)/w;
        d = 2*w*a;
        h1 = (3*r -1)/2/c;
        h2 = (3*r +1)/2/s;
        
        return d*(1 + fl*(h1*sf*(1-sg) - h2*(1-sf)*sg));
    }