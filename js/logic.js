(function($) {
		    $.fn.visible = function(partial) {
			    var $t            = $(this),
			        $w            = $(window),
			        viewTop       = $w.scrollTop(),
			        viewBottom    = viewTop + $w.height(),
			        _top          = $t.offset().top,
			        _bottom       = _top + $t.height(),
			        compareTop    = partial === true ? _bottom : _top,
			        compareBottom = partial === true ? _top : _bottom;
			    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
			};
		})(jQuery);

		var win = $(window);

		var allMods = $(".module");

		allMods.each(function(i, el) {
		  var el = $(el);
		  if (el.visible(true)) {
		    el.addClass("already-visible"); 
		  } 
		});

		win.scroll(function(event) 
		{
		  allMods.each(function(i, el) {
		    var el = $(el);
		    if (el.visible(true)) {
		      el.addClass("come-in"); 
		    } 
		  })
		});
      $('#captions-demo').slickLightbox({
      	caption: 'caption',
      	useHistoryApi: 'true'
      });
	  //text
	  $( "#graphic" )
	  .mouseover(function() {$( "#background" ).css( "background-color","green" );})
	  .mouseover(function() {$(this).css( "-webkit-text-fill-color","white" );})
	  .mouseover(function() {$("#photography").css( "-webkit-text-fill-color","black" );})
	  $( "#photography" )
	  .mouseover(function() {$( "#background" ).css( "background-color","green" );})
	  .mouseover(function() {$(this).css( "-webkit-text-fill-color","white" );})
	  .mouseover(function() {$("#graphic").css( "-webkit-text-fill-color","black" );})