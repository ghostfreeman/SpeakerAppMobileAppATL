GeoSpeakerApp.views.Home = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
	title: 'Home',
	id: 'Home',
	
	initComponent: function(){				
		// Start the section
		var topToolbar, bottomToolbar, list;
	
		list = new Ext.List({
			fullscreen: true,
			itemTpl : '{name}',
			store: GeoSpeakerApp.stores.Events
		});
	
		topToolbar = new Ext.TabBar({
			dock: "top",
			ui: 'light',
			layout: 'hbox',
			height: 50,
			items: [
				{
					xtype: 'button',
					text: 'Create Event',
					ui: 'action',
					flex: 1,
					handler: function() {
						console.log("Hello, This is the part where I kill you.");
					}
					
				}
			]
		});

		bottomToolbar = new Ext.TabBar({
			dock: "bottom",
			ui: 'dark',
			layout: 'hbox',
			height: 50,
			items: [{
					xtype: 'sliderfield',
					name : 'radius',
					label: 'Radius',
					id: 'radius',
					flex: 1,
					value: 5,
					minValue: 1,
					maxValue: 10
				},{
					xtype: 'button',
					text: 'Update',
					ui: 'action',
					flex: 1,
					handler: function() {
						console.log("Machiavellian!");
					}
				}]
		});
		
        Ext.apply(this, {
			items: [],
			dockedItems: [bottomToolbar, topToolbar]	
        });

        GeoSpeakerApp.views.Home.superclass.initComponent.call(this);
    }, // end init

	
});

Ext.reg('GeoSpeakerApp.views.Home', GeoSpeakerApp.views.Home);