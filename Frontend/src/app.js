//App.js
var GeoSpeakerApp = new Ext.Application({
    name: 'GeoSpeakerApp',
    useLoadMask: true,
    launch: function () {
        this.views.viewport = new this.views.Viewport();
    }
});

GeoSpeakerApp.baseUrl = "localhost:8888";