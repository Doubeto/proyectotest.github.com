var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_interpolacionIDWPM25_2 = new ol.layer.Image({
                            opacity: 0.6,
                            title: "interpolacionIDWPM25",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/interpolacionIDWPM25_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8579672.233401, -1362852.808409, -8568651.789304, -1353503.585994]
                            })
                        });
var format_Isolineas25_3 = new ol.format.GeoJSON();
var features_Isolineas25_3 = format_Isolineas25_3.readFeatures(json_Isolineas25_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isolineas25_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isolineas25_3.addFeatures(features_Isolineas25_3);
var lyr_Isolineas25_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isolineas25_3, 
                style: style_Isolineas25_3,
                interactive: true,
                title: '<img src="styles/legend/Isolineas25_3.png" /> Isolineas25'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_interpolacionIDWPM25_2.setVisible(true);lyr_Isolineas25_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_interpolacionIDWPM25_2,lyr_Isolineas25_3];
lyr_Isolineas25_3.set('fieldAliases', {'PM2.5': 'PM2.5', });
lyr_Isolineas25_3.set('fieldImages', {'PM2.5': 'TextEdit', });
lyr_Isolineas25_3.set('fieldLabels', {'PM2.5': 'inline label', });
lyr_Isolineas25_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});