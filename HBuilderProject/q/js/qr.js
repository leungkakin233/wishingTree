function qrNumber(size, typeSetting, number) {
	//	var sn = parseInt(size.charAt(0));
	var sn = parseInt(size);
	console.log(sn);
	console.log(typeSetting);
	if(typeSetting == 'A4') {
		switch(sn) {
			case 1:
				number.innerText = 216;
				break;
			case 2:
				number.innerText = 60;
				break;
			case 3:
				number.innerText = 35;
				break;
			case 5:
				number.innerText = 12;
				break;
			default:
				break;
		}
	} else if(typeSetting == 'A5') {
		switch(sn) {
			case 1:
				number.innerText = 130;
				break;
			case 2:
				number.innerText = 35
				break;
			case 3:
				number.innerText = 20;
				break;
			case 5:
				number.innerText = 6;
				break;
			default:
				break;
		}
	} else if(typeSetting == 'B4') {
		switch(sn) {
			case 1:
				number.innerText = 330;
				break;
			case 2:
				number.innerText = 108;
				break;
			case 3:
				number.innerText = 48;
				break;
			case 5:
				number.innerText = 20;
				break;
			default:
				break;
		}
	} else if(typeSetting == 'B5') {
		switch(sn) {
			case 1:
				number.innerText = 176;
				break;
			case 2:
				number.innerText = 54;
				break;
			case 3:
				number.innerText = 24;
				break;
			case 5:
				number.innerText = 6;
				break;
			default:
				break;
		}
	} else if(typeSetting == 'A41' || typeSetting == 'A51' || typeSetting == 'B41' || typeSetting == 'B51') {
		if(sn != null || sn != NaN) {
			number.innerText = 1;
		}
	}
}

//返回8位uuid
function guid() {
	function S4() {
		return(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}
	
	return(S4() + S4());
//	return(S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
};

function createQR(size, number, typeSetting, headimg, qrgroup) {
	//number控制生成数量
	//			alert('size:' + size + 'number:' +number + 'typeSetting'+typeSetting);
	var sizeInt = parseInt(size);
	var numberInt = parseInt(number);
	if(numberInt > 150){
		numberInt = 150 ;
	}
	var canctl = typeSetting + '-' + size;
	//		alert(canctl);
	//	console.log(canctl);
	//	console.log(document.styleSheets[3]);
	var canstyle = document.styleSheets[3].cssRules[1].style;
	var qrstyle = document.styleSheets[3].cssRules[2].style;
	//typesetting控制canvas
	switch(canctl) {
		case 'A4-1':
			canstyle.paddingTop = '0.075rem';
			canstyle.width = '0.48rem';
			canstyle.height = '0.555rem';
			qrstyle.padding = '.10rem 0';
			break;
		case 'A4-2':
			canstyle.paddingTop = '.10rem';
			canstyle.width = '.95rem';
			canstyle.height = '1.05rem';
			qrstyle.padding = '.10rem 0';
			break;
		case 'A4-3':
			canstyle.paddingTop = '.10rem';
			canstyle.width = '1.44rem';
			canstyle.height = '1.54rem';
			qrstyle.padding = '.40rem 0';
			break;
		case 'A4-5':
			canstyle.paddingTop = '.26rem';
			canstyle.width = '2.38rem';
			canstyle.height = '2.64rem';
			qrstyle.padding = '.40rem 0';
			break;
		case 'A41-15':
			canstyle.width = '7.15rem';
			canstyle.height = '7.15rem';
			qrstyle.paddingTop = '1.88rem';
			qrstyle.paddingBottom = '3.94rem';
			break;
		case 'A5-1':
			canstyle.paddingTop = '.2rem';
			canstyle.width = '1.35rem';
			canstyle.height = '1.35rem';
			qrstyle.padding = '08rem 0';
			break;
		case 'A5-2':
			canstyle.paddingTop = '.20rem';
			canstyle.width = '1.35rem';
			canstyle.height = '1.55rem';
			qrstyle.padding = '.08rem 0';
			break;
		case 'A5-3':
			canstyle.paddingTop = '.20rem';
			canstyle.width = '2.02rem';
			canstyle.height = '2.22rem';
			qrstyle.padding = '.40rem 0';
			break;
		case 'A5-5':
			canstyle.paddingTop = '.265rem';
			canstyle.width = '3.38rem';
			canstyle.height = '3.645rem';
			qrstyle.padding = '.40rem 0';
			break;
		case 'A51-11':
			canstyle.width = '7.42rem';
			canstyle.height = '7.42rem';
			qrstyle.paddingTop = '1.85rem';
			qrstyle.paddingBottom = '3.7rem';
			break;
		case 'B4-1':
			canstyle.paddingTop = '.1rem';
			canstyle.width = '0.85rem';
			canstyle.height = '0.95rem';
			qrstyle.padding = '.08rem 0';
			break;
		case 'B4-2':
			canstyle.paddingTop = '.1rem';
			canstyle.width = '0.85rem';
			canstyle.height = '0.95rem';
			qrstyle.padding = '.08rem 0';
			break;
		case 'B4-3':
			canstyle.paddingTop = '.15rem';
			canstyle.width = '1.2rem';
			canstyle.height = '1.35rem';
			qrstyle.padding = '.08rem 0';
			break;
		case 'B4-5':
			canstyle.paddingTop = '.19rem';
			canstyle.width = '2rem';
			canstyle.height = '2rem';
			qrstyle.padding = '.08rem 0';
			break;
		case 'B41-20':
			canstyle.width = '8.01rem';
			canstyle.height = '8.01rem';
			qrstyle.paddingTop = '1.6rem';
			qrstyle.paddingBottom = '4.05rem';
			break;
		case 'B5-1':
			canstyle.paddingTop = '.07rem';
			canstyle.width = '1.13rem';
			canstyle.height = '1.13rem';
			break;
		case 'B5-2':
			canstyle.paddingTop = '.07rem';
			canstyle.width = '1.13rem';
			canstyle.height = '1.13rem';
			break;
		case 'B5-3':
			canstyle.paddingTop = '.2rem';
			canstyle.width = '1.7rem';
			canstyle.height = '1.9rem';
			qrstyle.padding = '.08rem 0';
			break;
		case 'B5-5':
			canstyle.paddingTop = '.34rem';
			canstyle.width = '2.84rem';
			canstyle.height = '3.18rem';
			qrstyle.padding = '1rem 0';
			break;
		case 'B51-13':
			canstyle.width = '7.38rem';
			canstyle.height = '7.38rem';
			qrstyle.paddingTop = '1.85rem';
			qrstyle.paddingBottom = '3.7rem';
			break;
		default:
			break;
	}

	for(var i = 0; i < numberInt; i++) {
		var a = document.createElement('div');
		switch(sizeInt) {
			case 1:
				a.setAttribute('id', 'qr' + i);
				a.setAttribute('class', 'qr-' + typeSetting + "-1");
				break;
			case 2:
				a.setAttribute('id', 'qr' + i);
				a.setAttribute('class', 'qr-' + typeSetting + '-2');
				break;
			case 3:
				a.setAttribute('id', 'qr' + i);
				a.setAttribute('class', 'qr-' + typeSetting + '-3');
				break;
			case 5:
				a.setAttribute('id', 'qr' + i);
				a.setAttribute('class', 'qr-' + typeSetting + '-5');
				break;
			case 11:
				a.setAttribute('id', 'qr' + i);
				a.setAttribute('class', 'qr-' + typeSetting);
			case 13:
				a.setAttribute('id', 'qr' + i);
				a.setAttribute('class', 'qr-' + typeSetting);
			case 15:
				//					alert(typeSetting);
				a.setAttribute('id', 'qr' + i);
				a.setAttribute('class', 'qr-A41');

			case 20:
				a.setAttribute('id', 'qr' + i);
				a.setAttribute('class', 'qr-' + typeSetting);
			default:
				//				a.setAttribute('id', 'qr' + i);
				//				a.setAttribute('class', 'qr-' + typeSetting +'-5');
				break;
		}

		qrgroup.appendChild(a);

		var qrSetting = {
			render: 'canvas', //设置渲染方式，有table和canvas，使用canvas方式渲染性能相对来说比较好
			text: qrurl + guid(), //扫描二维码后显示的内容,可以直接填一个网址，扫描二维码后自动跳向该链接
//			text:'智加',
			width: 800, //二维码的宽度
			height: 800, //二维码的高度
			background: "#ffffff", //二维码的后景色
			foreground: "#000000", //二维码的前景色
			src: headimg,
		}

		$("#qr" + i).qrcode(qrSetting);
		var qrp = document.createElement('p');
		qrp.innerHTML = '智加扫我聊一聊';
		document.getElementById('qr' + i).appendChild(qrp);
	}
}

function selectSize() {
	console.log(this);
	var size = document.getElementById('size');
	var number = document.getElementById('number');
	var typeSetting = document.getElementById('typeSetting').innerHTML.slice(0, 2);

	size.innerHTML = this.children[1].innerHTML;
	//				console.log(this.parentNode.children[0])
	for(var i = 0; i < this.parentNode.children.length; i++) {
		this.parentNode.children[i].children[0].style.border = '0px';
	}
	this.children[0].style.border = '0.04rem solid #1672F9';
	qrNumber(size.innerHTML, localStorage.getItem('type'), number);
}