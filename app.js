$('.timeline-point').hover(function(){
	var fact = $(this).attr('data-tooltip');
	var circle = $(this).find('.outer-circle-dot');
	var offset = circle.offset();
	
	$('<div class="tooltip"><p>'+fact+'</p><div class="tooltip-arrow"></div></div>').prependTo($(this));
	var ttWidth = ($('.tooltip').width()/2) - 12;
	var ttHeight = $('.tooltip').height() + 15;
	$('.tooltip').css({top: offset.top - ttHeight, left: offset.left - ttWidth});
}, function(){
	$('.tooltip').remove();
})

