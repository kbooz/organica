var keyf = 1500
//Posição inicial
window.onbeforeunload = function(){ window.scrollTo(0,0); }

var s = skrollr.init({
	smoothScrolling: true,
	forceHeight: true,
	constants:{
		keyframe:keyf
	}
});

$("#up").click(function (){
	console.log($("#slide1").offset().top);
	$("body").scrollTop(0);
});

$("#down").click(function (){
	$("body").scrollTop(1510);
});
