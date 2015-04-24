
/**
 * Adapta el footer de acuerdo 
 * al tamaño de la ventana
 */
function onRezize(){
	onLoad();
}

function onLoad(){
	check.checked = false;
	var w = $(window).height();
	if($(window).height() <= 680){
		var s = -140 +(680-w);
		$('.wrapper ').css('margin-bottom',s+'px');
	}else{
		$('.wrapper ').css('margin-bottom','-140px');
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


