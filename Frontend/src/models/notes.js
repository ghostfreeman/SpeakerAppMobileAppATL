//Event.js

GeoSpeakerApp.models.Notes = Ext.regModel('Notes', {
	fields: [
		{ name: 'id', type: 'integer' },
		{ name: 'presentation_id', type: 'integer' },
		{ name: 'text', type: 'string'},
		{ name: 'plusones', type:'integer'}		
	]
});