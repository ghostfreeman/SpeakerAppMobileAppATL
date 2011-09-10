GeoSpeakerApp.views.Home = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
	title: 'Home',
	id: 'Home',
	
	initComponent: function(){				
		// Start the section
		var topToolbar, bottomToolbar, list;
		
		topToolbar = new Ext.TabBar({
			dock: "top",
			ui: 'light',
			layout: 'hbox',
			scroll: 'horizontal',
			items: [
				{
					xtype: 'button',
					text: 'Create Event',
					ui: 'action',
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
			items: [
				new Ext.form.FormPanel({
					items: [
						{
							xtype: 'button',
							text: 'Update',
							ui: 'action',
							handler: function() {
								console.log("Machiavellian!");
							}
						}
					]
				})
			]
		});
		
        Ext.apply(this, {
			items: [
			],
			dockedItems: [bottomToolbar, topToolbar]	
        });

        GeoSpeakerApp.views.Home.superclass.initComponent.call(this);
    }, // end init

	
});

Ext.reg('GeoSpeakerApp.views.Home', GeoSpeakerApp.views.Home);