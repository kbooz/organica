// ScrollTo Navigation
var slideTopPosisition = [0, 2535, 12000, 22500, 31000, 50000, 65000, 74000];

var animateScrollNext = function(duration) {
	$('html, body').animate({ scrollTop: slideTopPosisition[currentSlide+1] }, duration);
}
// var animateScrollPrev = function(duration) {
//   $('html, body').animate({ scrollTop: slideTopPosisition[currentSlide-1] }, duration);
// }

var currentSlide = 0,
		$nextButton = $('#next');
		// $prevButton = $('#prev');

$nextButton.on('click', function() {
	switch (currentSlide) {
		case 0:
			animateScrollNext(1500);
			currentSlide += 1;
			// $prevButton.removeClass('inactive');
			break;
		case 1:
			animateScrollNext(4000);
			currentSlide += 1;
			break;
		case 2:
			animateScrollNext(4000);
			currentSlide += 1;
			break;
		case 3:
			animateScrollNext(4000);
			currentSlide += 1;
			break;
		case 4:
			animateScrollNext(6000);
			currentSlide += 1;
			break;
		case 5:
			animateScrollNext(6000);
			currentSlide += 1;
			break;
		case 6:
			animateScrollNext(4000);
			currentSlide += 1;
			$nextButton.addClass('inactive');
			break;
	}
});

// $prevButton.on('click', function() {
//   switch (currentSlide) {
//     case 8:
//       animateScrollPrev(4000);
//       currentSlide -= 1;
//       $nextButton.removeClass('inactive');
//       break;
//     case 7:
//       animateScrollPrev(4000);
//       currentSlide -= 1;
//       break;
//     case 6:
//       animateScrollPrev(4000);
//       currentSlide -= 1;
//       break;
//     case 5:
//       animateScrollPrev(4000);
//       currentSlide -= 1;
//       break;
//     case 4:
//       animateScrollPrev(4000);
//       currentSlide -= 1;
//       break;
//     case 3:
//       animateScrollPrev(4000);
//       currentSlide -= 1;
//       break;
//     case 2:
//       animateScrollPrev(4000);
//       currentSlide -= 1;
//       break;
//     case 1:
//       animateScrollPrev(1500);
//       currentSlide -= 1;
//       $prevButton.addClass('inactive');
//       break;
//   }
// });

// Back to top button
$('.back-to-top').on('click', function() {
	$('html, body').animate({ scrollTop: 0 }, 5000);
	currentSlide = 0;
	$nextButton.removeClass('inactive');
});
