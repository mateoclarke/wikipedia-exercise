$('.timeline-point').hover(function(){

	var $this = $(this);
	var fact = $this.attr('data-tooltip');
	var circleOffset = $this.find('.outer-circle-dot').offset();
	
	$('<div class="tooltip"><p>'+fact+'</p><div class="tooltip-arrow"></div></div>').appendTo($('body'));

	var ttWidthCenter = ($('.tooltip').width())/2 - 12;
	var ttHeightAdjust = $('.tooltip').height() + 15;

	$('.tooltip').css({
		top: circleOffset.top - ttHeightAdjust, 
		left: circleOffset.left - ttWidthCenter
	});

}, function(){
	$('.tooltip').remove();
})

