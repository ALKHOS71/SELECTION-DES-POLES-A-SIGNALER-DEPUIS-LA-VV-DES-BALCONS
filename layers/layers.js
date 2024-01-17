var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VIARHONA_1 = new ol.format.GeoJSON();
var features_VIARHONA_1 = format_VIARHONA_1.readFeatures(json_VIARHONA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIARHONA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIARHONA_1.addFeatures(features_VIARHONA_1);
var lyr_VIARHONA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIARHONA_1, 
                style: style_VIARHONA_1,
                interactive: true,
                title: '<img src="styles/legend/VIARHONA_1.png" /> VIARHONA'
            });
var format_VOIEVERTEARANDONCREMIEU_2 = new ol.format.GeoJSON();
var features_VOIEVERTEARANDONCREMIEU_2 = format_VOIEVERTEARANDONCREMIEU_2.readFeatures(json_VOIEVERTEARANDONCREMIEU_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOIEVERTEARANDONCREMIEU_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOIEVERTEARANDONCREMIEU_2.addFeatures(features_VOIEVERTEARANDONCREMIEU_2);
var lyr_VOIEVERTEARANDONCREMIEU_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VOIEVERTEARANDONCREMIEU_2, 
                style: style_VOIEVERTEARANDONCREMIEU_2,
                interactive: true,
                title: '<img src="styles/legend/VOIEVERTEARANDONCREMIEU_2.png" /> VOIE VERTE ARANDON-CREMIEU'
            });
var format_PLES_3 = new ol.format.GeoJSON();
var features_PLES_3 = format_PLES_3.readFeatures(json_PLES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLES_3.addFeatures(features_PLES_3);
var lyr_PLES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PLES_3, 
                style: style_PLES_3,
                interactive: true,
    title: 'PÔLES<br />\
    <img src="styles/legend/PLES_3_0.png" /> CAMPING ISOLE LABELLISE ACCUEIL VELO<br />\
    <img src="styles/legend/PLES_3_1.png" /> GARE<br />\
    <img src="styles/legend/PLES_3_2.png" /> OFFICE DE TOURISME LABELLISE ACCUEIL VELO<br />\
    <img src="styles/legend/PLES_3_3.png" /> POLE LOCAL<br />\
    <img src="styles/legend/PLES_3_4.png" /> POLE STRUCTURANT<br />\
    <img src="styles/legend/PLES_3_5.png" /> SITE DE NIVEAU 2<br />\
    <img src="styles/legend/PLES_3_6.png" /> SITE DE NIVEAU 2 (site naturel)<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_VIARHONA_1.setVisible(true);lyr_VOIEVERTEARANDONCREMIEU_2.setVisible(true);lyr_PLES_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_VIARHONA_1,lyr_VOIEVERTEARANDONCREMIEU_2,lyr_PLES_3];
lyr_VIARHONA_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_VOIEVERTEARANDONCREMIEU_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'LINEAIRE': 'LINEAIRE', });
lyr_PLES_3.set('fieldAliases', {'SITES TOUR': 'SITES TOUR', 'Type d\'obj': 'Type d\'obj', 'Nom': 'Nom', 'Commune': 'Commune', 'Descriptif': 'Descriptif', 'Descript_1': 'Descript_1', 'Période e': 'Période e', 'Présenc_1': 'Présenc_1', 'Distance_1': 'Distance_1', 'HIERARCHIS': 'HIERARCHIS', });
lyr_VIARHONA_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_VOIEVERTEARANDONCREMIEU_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'LINEAIRE': 'TextEdit', });
lyr_PLES_3.set('fieldImages', {'SITES TOUR': 'TextEdit', 'Type d\'obj': 'TextEdit', 'Nom': 'TextEdit', 'Commune': 'TextEdit', 'Descriptif': 'TextEdit', 'Descript_1': 'TextEdit', 'Période e': 'TextEdit', 'Présenc_1': 'TextEdit', 'Distance_1': 'TextEdit', 'HIERARCHIS': 'TextEdit', });
lyr_VIARHONA_1.set('fieldLabels', {'name': 'inline label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_VOIEVERTEARANDONCREMIEU_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'LINEAIRE': 'no label', });
lyr_PLES_3.set('fieldLabels', {'SITES TOUR': 'inline label', 'Type d\'obj': 'inline label', 'Nom': 'inline label', 'Commune': 'inline label', 'Descriptif': 'inline label', 'Descript_1': 'inline label', 'Période e': 'inline label', 'Présenc_1': 'inline label', 'Distance_1': 'inline label', 'HIERARCHIS': 'inline label', });
lyr_PLES_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});