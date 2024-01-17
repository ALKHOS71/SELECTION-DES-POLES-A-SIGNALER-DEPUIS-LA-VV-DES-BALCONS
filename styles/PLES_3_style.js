var size = 0;
var placement = 'point';
function categories_PLES_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'CAMPING ISOLE LABELLISE ACCUEIL VELO':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [149, 150],
                  scale: 0.10738255033557047,
                  anchor: [8, 8],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/ID8.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'GARE':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [149, 150],
                  scale: 0.10738255033557047,
                  anchor: [8, 8],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/ID12a.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'OFFICE DE TOURISME LABELLISE ACCUEIL VELO':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [149, 150],
                  scale: 0.10738255033557047,
                  anchor: [8, 8],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/ID6.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'POLE LOCAL':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.399999999999997 + size,
            stroke: new ol.style.Stroke({color: 'rgba(179,92,21,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(247,128,30,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'POLE STRUCTURANT':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.399999999999997 + size,
            stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(219,30,42,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SITE DE NIVEAU 2':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 11.36666 + size, points: 5,
            radius2: 5.68333, stroke: new ol.style.Stroke({color: 'rgba(255,158,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,196,1,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SITE DE NIVEAU 2 (site naturel)':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 11.36666 + size, points: 5,
            radius2: 5.68333, stroke: new ol.style.Stroke({color: 'rgba(255,158,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,196,1,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_PLES_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("HIERARCHIS");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_PLES_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
