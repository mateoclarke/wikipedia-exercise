;(function(){

	"use strict";

	var $tooltipEvent = $('.timeline-point');

	$tooltipEvent.hover( showTooltip, hideTooltip );

	function showTooltip(){
		var $this 			= $(this),
			$body			= $('body'),
			$fact 			= $this.attr('data-tooltip'),
			$circle 		= $this.find('.outer-circle-dot'),
			$circleOffset 	= $circle.offset(),
			circleTop		= $circleOffset.top,
			circleLeft		= $circleOffset.left,
			$tooltipHTML		= $('<div class="tooltip"><p>'+ $fact +'</p><div class="tooltip-arrow"></div></div>'),
			ttWidthCenter,
			ttHeightAdjust;
		
		hideTooltip();
		$tooltipHTML.appendTo($body);

		ttWidthCenter = ($('.tooltip').width())/2 - 12;
		ttHeightAdjust = $('.tooltip').height() + 15;

		$('.tooltip').css({
			top: circleTop - ttHeightAdjust, 
			left: circleLeft - ttWidthCenter
		});

	}

	function hideTooltip(){
		$('.tooltip').remove();
	}

}());
