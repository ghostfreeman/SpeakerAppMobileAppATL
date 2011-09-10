//Create event

GeoSpeakerApp.views.CreateEvent = Ext.extend(Ext.form.FormPanel, {
    layout: 'vbox',
	title: 'Create Event',
	id: 'Create_Event',
	
	items: [
	        {
	            xtype: 'textfield',
	            name : 'eventName',
	            label: 'Event Name'
	        },
	        {
	            xtype: 'textfield',
	            name : 'long',
	            label: 'Longitude'
	        },
			{
				xtype: 'textfield',
				name: 'lat',
				label: 'Latitude'
			},
			{
				xtype: 'textfield',
				name: 'radius',
				label: 'Radius'
			},
			{
				xtype: 'numberfield',
				name: 'duration',
				label: 'Duration'
			},
			{
				xtype: 'textfield',
				name: 'CreatedTime',
				label: 'Created Time'
			}
	    ]	
});

Ext.reg('GeoSpeakerApp.views.CreateEvent', GeoSpeakerApp.views.CreateEvent);