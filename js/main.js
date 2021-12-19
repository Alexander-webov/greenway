//menu
$(document).ready(function(){
	var men=true;
$("#sandwich").click(function()
{
	if(men==false)
	{
		$(".header_nav").slideUp();
		men=!men;
	}
	else
	{
		$(".header_nav").slideDown();
		men=!men;
	}
});

	$("#sandwich, .menu_item").click(function() {
     $("#sandwich").toggleClass("active");
});

});

// accordion
	var $uiAccordion = $('.js-ui-accordion');
	$uiAccordion.accordion({
	  collapsible: true,
	  active: 0,
	  heightStyle: 'content',
	  activate: function activate(event, ui) {
	    var newHeaderId = ui.newHeader.attr('id');
	    if (newHeaderId) {
	      history.pushState(null, null, '#' + newHeaderId);
	    }
	  },
	  create: function create(event, ui) {
	    var $this = $(event.target);
	    var $activeAccordion = $(window.location.hash);

	    if ($this.find($activeAccordion).length) {
	      $this.accordion('option', 'active', $this.find($this.accordion('option', 'header')).index($activeAccordion));
	    }
	  }
	});

	$(window).on('hashchange', function (event) {
	  var $activeAccordion = $(window.location.hash);
	  var $parentAccordion = $activeAccordion.parents('.js-ui-accordion');

	  if ($activeAccordion.length) {
	    $parentAccordion.accordion('option', 'active', $parentAccordion.find($uiAccordion.accordion('option', 'header')).index($activeAccordion));
	  }

});

// slider
$(document).ready(function() {
	//--------
	$('.gall_video-items-mob').slick({
		dots: true,
		dotsClass: "my-dots",
		centerMode: true,
	  	slidesToShow: 1,
	 	slidesToScroll: 1,
	  	autoplay: false,
	  	autoplaySpeed: 3000,
	});
});

//popup
$(document).ready(function() {
	$('.btn').magnificPopup();
});


$(function() {
	$('select').styler({
		
	});
});
// якорь
$(document).ready(function() {
	$('a[href^="#"]').bind("click", function(e){
	  var anchor = $(this);
	  $('html, body').stop().animate({
	   scrollTop: $(anchor.attr("href")).offset().top
	  }, 1000);
	  e.preventDefault();
	 });
	 return false;
});
/* $(document).ready(function() {
    $("#phone").mask("+7 (999) 999-99-99");
  });*/

 // youtube
 function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i<j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
 
    var nb_videos = videos.length;
    for (var i=0; i<nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
 
        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);
 
        videos[i].onclick = function() {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
 
            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
 
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
}); 