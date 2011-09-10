//Event.js

GeoSpeakerApp.models.Question = Ext.regModel('Question', {
	fields: [
		{ name: 'id', type: 'integer' },
		{ name: 'presentation_id', type: 'integer' },
		{ name: 'text', type: 'string' },
		{ name: 'answer', type: 'string' },
		{ name: 'plusones', type:'integer'}		
	]
});