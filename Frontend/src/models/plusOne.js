//Event.js

GeoSpeakerApp.models.PlusOne = Ext.regModel('PlusOne', {
	fields: [
		{ name: 'id', type: 'integer' },
		{ name: 'name', type: 'string' },
		{ name: 'long', type: 'string' },
		{ name: 'lat', type: 'string' },
		{ name: 'radius', type: 'integer' },
		{ name: 'duration', type: 'integer'}
	]
});