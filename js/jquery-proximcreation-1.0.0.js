(function($) {
	$.fn.padding = function(p) {
		if(!p){
			return {
				'top'	:	parseFloat(this.css('padding-top')),
				'bottom':	parseFloat(this.css('padding-bottom')),
				'left'	:	parseFloat(this.css('padding-left')),
				'right'	:	parseFloat(this.css('padding-right')),
			};
		}
		else{
			this.css({
				'padding-top':p['top'],
				'padding-right':p['right'],
				'padding-bottom':p['bottom'],
				'padding-left':p['left']
			});
		}
	};
	$.fn.margin = function(p) {
		if(!p){
			return {
				'top'	:	parseFloat(this.css('margin-top')),
				'bottom':	parseFloat(this.css('margin-bottom')),
				'left'	:	parseFloat(this.css('margin-left')),
				'right'	:	parseFloat(this.css('margin-right')),
			};
		}
		else{
			this.css({
				'margin-top':p['top'],
				'margin-right':p['right'],
				'margin-bottom':p['bottom'],
				'margin-left':p['left']
			});
		}
	};
	$.fn.border = function(p) {
		if(!p){
			return {
				'top'	:	parseFloat(this.css('border-top-width')),
				'bottom':	parseFloat(this.css('border-bottom-width')),
				'left'	:	parseFloat(this.css('border-left-width')),
				'right'	:	parseFloat(this.css('border-right-width')),
			};
		}
		else{
			this.css({
				'border-top-width':p['top'],
				'border-right-width':p['right'],
				'border-bottom-width':p['bottom'],
				'border-left-width':p['left']
			});
		}
	};
	$.fn.realWidth = function() {
		var m = this.margin(), p = this.padding(), b = this.border();
		return this.width()*1 + m['left']*1 + m['right']*1 + p['left']*1 + p['right']*1 + b['left']*1 + b['right']*1;
	};
	$.fn.realHeight = function() {
		var m = this.margin(), p = this.padding(), b = this.border();
		return this.height()*1 + m['top']*1 + b['bottom']*1 + p['top']*1 + p['bottom']*1 + b['top']*1 + b['bottom']*1;
	};
	$.fn.vcenter = function() {
		var m = (this.parent().height()-this.height())/2, c = this.margin();
		this.margin({'top':m+"px", 'bottom':m+"px", 'left':c['left']+"px", 'right':c['right']+"px" });
		return this;
	};
	$.fn.hcenterContent = function() {
		var w = 0, tw = this.width(), c = this.padding(), p = 0;
		this.children().each(function(){
			w += jQuery(this).realWidth();
		}).first().css("margin-left",((tw-w)/2)+"px");
//		p = (tw-w)/2;
//		this.width(tw-(p*2));
//		this.padding({'top':c['top'], 'bottom':c['bottom'], 'left':p+"px", 'right':p+"px"});
		return this;
	};
	$.fn.wEqual = function() {
		var m = 0;
		this.each(function(){m = Math.max(m, jQuery(this).width());}).width(m);
		return this;
	};
	$.fn.hEqual = function() {
		var m = 0;
		this.each(function(){m = Math.max(m, jQuery(this).height());}).height(m);
		return this;
	};
	
})(jQuery);
function screenSize() {
	var w = 0, h = 0;
	if (typeof (window.innerWidth) == 'number') {
		// Non-IE
		w = window.innerWidth;
		h = window.innerHeight;
	} else if (document.documentElement
			&& (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		// IE 6+ in 'standards compliant mode'
		w = document.documentElement.clientWidth;
		h = document.documentElement.clientHeight;
	} else if (document.body
			&& (document.body.clientWidth || document.body.clientHeight)) {
		// IE 4 compatible
		w = document.body.clientWidth;
		h = document.body.clientHeight;
	}
	return [ w, h ];
};