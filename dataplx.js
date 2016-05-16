dataplx = {
	/* CORE HANDLERS */
	config: {},
	init: function() {
		$('[data-plx-close]').click(dataplx.close);
		$('[data-plx-toggle]').click(dataplx.toggle);
	},
	operate: function() {
		config = dataplx.config;
		do_fade = config.ele.hasAttribute('data-plx-fade');
		do_shrink = config.ele.hasAttribute('data-plx-shrink');
		if (do_fade) {
			dataplx.fade();
		} else if (do_shrink) {
			dataplx.shrink();
		} else {
			dataplx.default();
		}
	},
	remover: function () {
		config.doOn.remove();
	},
	/* End of core handlers
	 * CORE OPERATIONS
	 */
	toggle: function  () {
		dataplx.config.ele = this;
		var cls_attr = $(this).data('plx-toggle');
		dataplx.config.doOn = cls_attr ? $(cls_attr).first() : $(this).next();
		dataplx.config.doWhat = "toggle";
		dataplx.operate();
		return false;
	},
	close: function() {
		dataplx.config.ele = this;
		var cls_attr = $(this).data('plx-close');
		dataplx.config.doOn = cls_attr ? $(cls_attr).first() : $(this).parent();
		dataplx.config.doWhat = "close";
		dataplx.operate();
		return false;
	},
	/* CORE ANIMATIONS
	 */
	fade: function() {
		if (config.doWhat == 'toggle' ) {
			if ( config.doOn.is(':visible') )
				config.doOn.fadeOut($(config.ele).data('plx-fade') || 1000);
			else
				config.doOn.fadeIn($(config.ele).data('plx-fade') || 1000);
		} else {
			config.doOn.fadeOut($(config.ele).data('plx-fade') || 1000, dataplx.remover);
		}
	},
	shrink: function() {
		if (config.doWhat == 'toggle' ) {
			if ( config.doOn.is(':visible') )
				config.doOn.slideUp( $(config.ele).data('plx-shrink') || 1000);
			else {
				config.doOn.slideDown( $(config.ele).data('plx-shrink') || 1000);
			}
		} else {
			config.doOn.slideUp( $(config.ele).data('plx-shrink') || 1000, dataplx.remover);
		}
	},
	default: function() {
		if (config.doWhat == 'toggle' )
			config.doOn.toggle();
		else
			dataplx.remover();
	}

};
$(document).ready(dataplx.init);