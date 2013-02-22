$(window).load(function(){
	jQuery.fn.center = function() {

        var _h = $(window).height();
        var _w = $(window).width();
        var _t = $(window).scrollTop();
        var _l = $(window).scrollLeft();

		this.css({
			"position": "absolute",
			"top": ((( _h - this.outerHeight()) / 2) + _t + "px"),
			"left": ((( _w - this.outerWidth()) / 2) + _l + "px")
		});
	return this;
	}
	$("div.rpi_cam_on").center();
	$(window).bind('resize', function() {
		$('div.rpi_cam_on').center();
	});
    createImageLayer();
});

