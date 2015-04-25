check.checked = false;

/**
 * Adapta el footer de acuerdo 
 * al tamaño de la ventana
 */
function onResize(){
	onLoad();
}

function onLoad(){
	var w = $(window).height();
	if($(window).height() <= 680){
		var s = -120 +(680-w);
		$('.wrapper ').css('margin-bottom',s+'px');
	}else{
		$('.wrapper ').css('margin-bottom','-120px');
	}
}


function verify(){
	var check = $('#navbar-main-collapse').attr('aria-expanded');
	var w = $(window).height();
	if((!check|| check == 'false') && w <= 740){
		$('#footer-social').css('margin-top','120px');
	}else{
		$('#footer-social').css('margin-top','0px');

	}
}


function showContent() {
    element = document.getElementById("content");
    check = document.getElementById("check");
    if (check.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    }
}


