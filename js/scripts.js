jQuery(function($){

'use strict';
    // ----------------------------------------------
    // Preloader
    // ----------------------------------------------
	(function () {
	    $(window).load(function() {
	        $('#pre-status').fadeOut();
	        $('#st-preloader').delay(350).fadeOut('slow');
	    });
	}());

	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
});

$body = $("body");
$(document).on({
	ajaxStart: function() { $body.addClass("loading");    },
	ajaxStop: function() { $body.removeClass("loading"); }    
});

function openSideBar() {
	var element = document.getElementById("mobile_drawer");
	element.classList.add("drawer_open");
  }
  
function closeSideBar() {
	var element = document.getElementById("mobile_drawer");
	element.classList.remove("drawer_open");
}  


var getCookies = function(){
	var pairs = document.cookie.split(";");
	var cookies = {};
	for (var i=0; i<pairs.length; i++){
		var pair = pairs[i].split("=");
		cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
	}
	return cookies;
}

function del_cookies() {
	cookies = getCookies()
	var multiple = document.cookie.split(";");
	for(var i = 0; i < multiple.length; i++) {
		document.cookie = multiple[i].split("=")[0]+" =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
	}
}
