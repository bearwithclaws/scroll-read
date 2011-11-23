(function() { 

	chrome.extension.sendRequest(null, function() {
    $('body').append('<div class="scroll-read"></div>');
    var scrollPercentage;
    var pathname = window.location.href;
    $(window).scroll(function() {
      scrollPercentage = ((1 - ($(document).scrollTop() + $(window).height())/$(document).height())*100).toFixed(2) + "% remaining";
      $('.scroll-read').html(scrollPercentage).css("display", "inline").delay(2000).fadeOut('slow');
      localStorage[pathname] = $(document).scrollTop();
    });
    $(document).ready(function() {
      $(document).scrollTop(localStorage[pathname]);
    });
  });
  
})();
