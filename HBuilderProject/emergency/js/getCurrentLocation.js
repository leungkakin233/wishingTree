var address = window.JsInterface.getLocation();
			var Address = JSON.parse(address).address;
			var longitude = JSON.parse(address).longitude;
			var latitude = JSON.parse(address).latitude;
			var country = JSON.parse(address).country;
			var province = JSON.parse(address).province;
			var city = JSON.parse(address).city;
			var county = JSON.parse(address).county;
			var street = JSON.parse(address).street;
			var hasSpeed = JSON.parse(address).hasSpeed;
			var speed = JSON.parse(address).speed;
			var hasRadius = JSON.parse(address).hasRadius;
			var radius = JSON.parse(address).radius;
			var circleRange = JSON.parse(address).circleRange;