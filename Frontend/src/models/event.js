//Event.js

GeoSpeakerApp.models.Event = Ext.regModel('Event', {
	fields: [
		{ name: 'id', type: 'integer' },
		{ name: 'name', type: 'string' },
		{ name: 'long', type: 'string' },
		{ name: 'lat', type: 'string' },
		{ name: 'radius', type: 'integer' },
		{ name: 'duration', type: 'integer'}
	]
});