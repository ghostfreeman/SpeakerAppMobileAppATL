//Create Notes

GeoSpeakerApp.views.CreateNotes = Ext.extend(Ext.form.FormPanel, {
    layout: 'vbox',
	title: 'Create Note',
	id: 'Create_Notes',
	
	items: [
	        {
	            xtype: 'textfield',
				name: 'text',
				label: 'Note Text'
			}
	    ]	
});

Ext.reg('GeoSpeakerApp.views.CreateNotes', GeoSpeakerApp.views.CreateNotes);