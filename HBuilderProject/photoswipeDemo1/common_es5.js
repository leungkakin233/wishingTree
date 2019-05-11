"use strict";

function showLargePics(small_pics) {

	//define
	var large_pics_element = document.createElement("div");
	var small_pics_element = $(small_pics);
	large_pics_element.className = "pics-show-wrapper";
	large_pics_element.innerHTML = "<div class='pics-list'></div><div class='num-show'><i class='current-num'></i>/<i class='total-num'></i><a href='javascript:;' class='close-icon'>x</a><a href='javascript:;' class='garbage'></a></div>";
	
	var total_width = 0;
	var temp = 0;
	var len = $(small_pics).querySelectorAll("li").length;
	var currentindex = 0;
	
	//small_pics tap
	var s_hammer = new Hammer(small_pics_element);
	s_hammer.on("tap",function(e){

		if( !document.querySelectorAll(".pics-show-wrapper")[0] ) {

			document.body.appendChild(large_pics_element);
			large_pics_element.firstElementChild.appendChild(small_pics_element.querySelectorAll("ul")[0].cloneNode(true));

		}else{
			// if( large_pics_element.style.display == "none" ) {
			// 	large_pics_element.style.display = "block";
			// }
		}

		Array.prototype.slice.call($(small_pics).querySelectorAll("li"),0).map(function(value,index) {
			if( value == e.target.parentNode ) {
				currentindex = index;
			}
		});

		//init
		initPic(large_pics_element,len,currentindex);
		slidePics(large_pics_element.firstElementChild,-currentindex*(100/len)+"%");

	});

	//large_pics carousel
	var l_hammer = new Hammer(large_pics_element.firstElementChild);
	l_hammer.on("panend",function(e){
		
		//add animation
		large_pics_element.firstElementChild.style.transitionDuration = ".35s";
		large_pics_element.firstElementChild.style.webkitTransitionDuration = ".35s";

		if( e.deltaX > 0 ) {
			currentindex--;
			if( currentindex < 0 ) {
				currentindex = 0;
			}
		}

		if( e.deltaX < 0 ) {
			currentindex++;
			if( currentindex > len-1 ) {
				currentindex = len-1;
			}
		}

		temp = -currentindex * (100/len) + "%";
		slidePics(large_pics_element.firstElementChild,temp);
		large_pics_element.querySelectorAll(".current-num")[0].innerHTML = currentindex + 1;

		return false;
	});

	//status bar hide or show
	large_pics_element.addEventListener("tap",function(){

		var ele = this.querySelectorAll(".num-show")[0];
		var className = "slideToTop";

		if( ele.classList.contains(className) == true ) {
			ele.classList.remove(className);
		}else {
			ele.classList.add(className);
		}

		//stopPropagation
		this.querySelectorAll(".num-show")[0].addEventListener("tap",function(e){
			e.stopPropagation();
		});
	});

	//close
	large_pics_element.querySelectorAll(".close-icon")[0].addEventListener("tap",function(){

		document.body.removeChild(large_pics_element);
		// large_pics_element.style.display = "none";
	});

	//delete
	large_pics_element.querySelectorAll(".garbage")[0].addEventListener("tap",function(){

		//cancel animation
		large_pics_element.firstElementChild.style.transitionDuration = "0s";
		large_pics_element.firstElementChild.style.webkitTransitionDuration = "0s";

		//delete
		large_pics_element.querySelectorAll("ul")[0].removeChild(large_pics_element.querySelectorAll("li")[currentindex]);
		small_pics_element.querySelectorAll("ul")[0].removeChild(small_pics_element.querySelectorAll("li")[currentindex]);

		if( currentindex == len-1 ) {
			currentindex--;
		}
		len--;
		slidePics(large_pics_element.firstElementChild,(-currentindex*(100/len)+"%"));

		if( len == 0 ) {
			document.body.removeChild(large_pics_element);
		}

		initPic(large_pics_element,len,currentindex);
	});

}

function $(str) {
	return document.querySelectorAll(str).length > 1 ? document.querySelectorAll(str) : document.querySelectorAll(str)[0];
}

function slidePics(ele,num) {
	ele.style.transform = "perspective(800px) translate("+num+",-50%)";
	ele.style.webkitTransform = "perspective(800px) translate("+num+",-50%)";
}

function initPic(ele,len,currentindex) {
	ele.firstElementChild.style.width = 100*len + "%";
	Array.prototype.slice.call(ele.firstElementChild.querySelectorAll("li"),0).map(function(value,index){
		value.style.width = 100/len + "%";
		value.style.left = index*(100/len) + "%";
	});
	ele.querySelectorAll(".total-num")[0].innerHTML = len;
	ele.querySelectorAll(".current-num")[0].innerHTML = currentindex+1;
}