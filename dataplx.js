dataplx = {
	/* CORE HANDLERS */
	config: {},
	animations: ["fade", "shrink"],
	init: function() {
		$('[data-plx-close]').click(dataplx.close);
		$('[data-plx-toggle]').click(dataplx.toggle);
	},
	operate: function() {
		var found = 0;
		var config = dataplx.config;
		$.each(dataplx.animations, function(index, value) {
			var ani = config.ele.hasAttribute("data-plx-" + value);
			if (ani) {
				dataplx[value]();
				found = 1;
				return false;
			}
		});
		if (!found) {
			dataplx.default();
		}
	},
	remover: function() {
		dataplx.config.doOn.remove();
	},
	/* End of core handlers
	 * CORE OPERATIONS
	 */
	toggle: function() {
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
		var config = dataplx.config;
		if (config.doWhat == 'toggle') {
			config.doOn.fadeToggle($(config.ele).data('plx-fade') || 1000);
		} else {
			config.doOn.fadeOut($(config.ele).data('plx-fade') || 1000, dataplx.remover);
		}
	},
	shrink: function() {
		var config = dataplx.config;
		if (config.doWhat == 'toggle') {
			if (config.doOn.is(':visible'))
				config.doOn.slideUp($(config.ele).data('plx-shrink') || 1000);
			else {
				config.doOn.slideDown($(config.ele).data('plx-shrink') || 1000);
			}
		} else {
			config.doOn.slideUp($(config.ele).data('plx-shrink') || 1000, dataplx.remover);
		}
	},
	default: function() {
		var config = dataplx.config;
		if (config.doWhat == 'toggle')
			config.doOn.toggle();
		else
			dataplx.remover();
	},
};
$(document).ready(dataplx.init);