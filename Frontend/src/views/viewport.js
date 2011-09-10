//Viewport

GeoSpeakerApp.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
	id: 'viewport',
	
	initComponent: function() {
		Ext.apply(GeoSpeakerApp.views, {
			Home: new GeoSpeakerApp.views.Home,
			CreateEvent: new GeoSpeakerApp.views.CreateEvent,
			CreatePresentation: new GeoSpeakerApp.views.CreatePresentation,
			//CreateNotes: new GeoSpeakerApp.views.CreateNotes
		});
		Ext.apply(this, {
			items: [
				GeoSpeakerApp.views.Home, //0
				GeoSpeakerApp.views.CreateEvent, //1
				GeoSpeakerApp.views.CreatePresentation, //2
				//GeoSpeakerApp.views.CreateNotes //3
			]
		}); 
		GeoSpeakerApp.views.Viewport.superclass.initComponent.apply(this, arguments);	
    },
});