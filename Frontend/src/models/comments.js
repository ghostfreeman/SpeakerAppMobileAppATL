//Event.js

GeoSpeakerApp.models.Comments = Ext.regModel('Comments', {
	fields: [
		{ name: 'id', type: 'integer' },
		{ name: 'presentation_id', type: 'integer' },
		{ name: 'text', type: 'string'},
		{ name: 'plusones', type:'integer'}
	]
});