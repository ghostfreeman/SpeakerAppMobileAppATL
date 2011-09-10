//Viewport

GeoSpeakerApp.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
	
	initComponent: function() {
		Ext.apply(GeoSpeakerApp.views, {
			Home: new GeoSpeakerApp.views.Home,
		});
		Ext.apply(this, {
			items: [
				GeoSpeakerApp.views.Home,
			]
		}); 
		GeoSpeakerApp.views.Viewport.superclass.initComponent.apply(this, arguments);	
    },

    /* reveal: function(target, direction) {
		direction = typeof(direction) != 'undefined' ? direction : 'left';
		
        this.setActiveItem(
            ResellerApp.views[target],
            { type: 'slide', direction: direction }
        );
    } */
});