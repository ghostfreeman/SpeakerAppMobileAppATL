//Create Presentation

GeoSpeakerApp.views.CreatePresentation = Ext.extend(Ext.form.FormPanel, {
    layout: 'vbox',
	title: 'Create Presentation',
	id: 'Create_Presentation',
	
	items: [
	        {
	            xtype: 'textfield',
				name: 'name',
				label: 'Name'
			},
			{
				xtype: 'textfield',
				name: 'description',
				label: 'Description'
			}
	    ]	
});

Ext.reg('GeoSpeakerApp.views.CreatePresentation', GeoSpeakerApp.views.CreatePresentation);