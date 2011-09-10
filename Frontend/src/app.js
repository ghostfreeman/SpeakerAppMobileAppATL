//App.js
var GeoSpeakerApp = new Ext.Application({
    name: 'GeoSpeakerApp',
    useLoadMask: true,
    launch: function () {
        this.views.viewport = new this.views.Viewport();
		geo = new Ext.util.GeoLocation({
			autoUpdate: true,
			listeners: {
				locationupdate: function (geo) {
					console.log(geo);
				},	
				locationerror: function ( geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
					if(bTimeout) {
						Ext.Msg.alert('Error','Timeout occurred.',Ext.emptyFn);
					} else {
						Ext.Msg.alert('Error','Unknown error occurered.',Ext.emptyFn);
					}
				}
			}
		});
		geo.updateLocation();
    }
});

//GeoSpeakerApp.baseUrl = "geospeaker.com";