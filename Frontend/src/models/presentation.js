//Event.js

GeoSpeakerApp.models.Presentation = Ext.regModel('Presentation', {
	fields: [
		{ name: 'id', type: 'integer' },
		{ name: 'event_id', type: 'integer' },
		{ name: 'name', type: 'string' },
		{ name: 'description', type: 'string'},
		{ name: 'plusones', type:'integer'}		
	]
});