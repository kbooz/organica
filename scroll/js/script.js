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

// $("#down").click(function(){
// 	skrollr.goTO
// })
