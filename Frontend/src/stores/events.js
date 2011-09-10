//Store for Events
GeoSpeakerApp.stores.Events = new Ext.data.Store({
	model: 'User',
	autoLoad: false,
	data: [],
	proxy: {
        type: 'scripttag',
        url : GeoSpeakerApp.baseUrl + 'users.php'
    }
});