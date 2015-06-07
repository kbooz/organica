// var s = skrollr.init({
// 	smoothScrolling: true,
// 	forceHeight: true
// 	// constants:{
// 	// 	keyframe:keyf
// 	// }
// });

//Navegação do site

var $sections = $("section");
var ids = [];
var currentId=0;
var $nextButton = $("#next");
var $previousButton = $("#previous");

$sections.each(function(){ids.push($(this).attr("id"))})

$sections.waypoint(
		function(direction) {
	  if (direction === 'down') {
			currentId = ids.indexOf(this.element.id);

			//Checa se é o ultimo elemento do array
			if(currentId == ids.length-1)
			{
				//Desabilita o botão next
				disableButton($nextButton);
			}
			if(currentId != 0)
				activatePrevious();
	  }
	}, {
	  offset: '25%'
	}
);

$sections.waypoint(
		function(direction) {
	  if (direction === 'up') {
			currentId = ids.indexOf(this.element.id);

			//Checa se é o primeiro elemento do array
			if(currentId == 0)
			{
				//Desabilita o botão next
				disableButton($previousButton);
			}
			activateNext();
	  }
	}, {
	  offset: function() {
	    return -this.element.clientHeight*0.5;
	  }
	}
);

function disableButton($button){
	$button.addClass("disable");
	$button.off();
}

function activateNext(){
	$nextButton.removeClass("disable");
	$nextButton.on("click",function(){
		$('html, body').animate({scrollTop: $("#"+ids[currentId+1]).offset().top});
	});
}


function activatePrevious(){
	$previousButton.removeClass("disable");
	$previousButton.on("click",function(){
		$('html, body').animate({scrollTop: $("#"+ids[currentId-1]).offset().top});
	});
}

activateNext();
