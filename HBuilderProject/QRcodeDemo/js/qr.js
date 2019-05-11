function qrNumber(size, typeSetting, number) {
	var sn = parseInt(size.charAt(0));
	console.log(sn);
	console.log(typeSetting);
	if (typeSetting == 'A41' || typeSetting == 'A4') {
		switch (sn) {
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
	} else if (typeSetting == 'A51' || typeSetting == 'A5') {
		switch (sn) {
			case 1:
				number.innerText = 108;
				break;
			case 2:
				number.innerText = 30;
				break;
			case 3:
				number.innerText = 15;
				break;
			case 5:
				number.innerText = 6;
				break;
			default:
				break;
		}
	} else if (typeSetting == 'B41' || typeSetting == 'B4') {

	} else if (typeSetting == 'B51' || typeSetting == 'B5') {

	}
}
