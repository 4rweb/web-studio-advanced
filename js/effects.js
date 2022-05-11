window.addEvent('domready',function(){
	var t = $$('img.opacity');
	t.each(function(item){
        item.setStyle('opacity', 1);
		 var f = new Fx.Style (item,'opacity', {duration: 300, wait: false});
		 item.addEvents({
			'mouseenter': function() {
			f.start(0.01);
			},
 
			'mouseleave': function() {
			f.start(1);
			}
		})
	})
});