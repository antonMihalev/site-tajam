// $(document).ready(function() {
// 	var item = $(".team_item");
// 	var pos = item.position();

// 	var form = $(".form_text");
// 	var formPos = form.position();

// 	var partner = $(".partners_item");
// 	var partnerPos = partner.position();

// 	$(window).scroll(function() {
// 		var windowpos = $(window).scrollTop();
// 		if (windowpos >= (pos.top-400) && windowpos<=(pos.top+200)) {
// 			console.log(windowpos+"window");
// 			console.log(pos.top+"posTop");
// 			item.toggleClass("bounceInLeft");
// 		}
// 		if (windowpos >= formPos.top-400 && windowpos<=formPos.top+200) {
// 			form.toggleClass("zoomInDown");
// 		}
// 		if (windowpos >= partnerPos.top-400 && windowpos<=partnerPos.top+200) {
// 			partner.toggleClass("jello");
// 		}
// 	});
// });
var wow = new WOW(
  {
    // boxClass:     'wow',      // animated element css class (default is wow)
    // animateClass: 'animated', // animation css class (default is animated)
    // offset:       100,          // distance to the element when triggering the animation (default is 0)
    // mobile:       true,       // trigger animations on mobile devices (default is true)
    // live:         true,       // act on asynchronously loaded content (default is true)
    // callback:     function(box) {
    //   // the callback is fired every time an animation is started
    //   // the argument that is passed in is the DOM node being animated
    // },
    // scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
