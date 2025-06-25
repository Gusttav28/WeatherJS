import { getting_getPlace_API } from "./app.js";

am5.ready(function() {
        
// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
    am5themes_Animated.new(root)
]);


// Create the map chart
// https://www.amcharts.com/docs/v5/charts/map-chart/
var chart = root.container.children.push(am5map.MapChart.new(root, {
    panX: "rotateX",
    panY:"rotateY",
    projection: am5map.geoOrthographic()
}));
chart.chartContainer.events.off("wheel");
// Remove interaction events
// chart.chartContainer.events.off("wheel");
// chart.chartContainer.events.off("pinch");
// chart.chartContainer.events.off("doublehit");

// Lock zoom level to 1
chart.set("minZoomLevel", 1);
chart.set("maxZoomLevel", 1);


// Create main polygon series for countries
// https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    exclude: ["AQ"]
}));
    
polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    toggleKey: "active",
    interactive: true
});

polygonSeries.mapPolygons.template.states.create("hover", {
    fill: am5.color('#1d8348')
});

polygonSeries.mapPolygons.template.states.create("active", {
    fill: am5.color('#239b56')
});

var previousPolygon;

polygonSeries.mapPolygons.template.on("active", async function (active, target) {
    const countryData = target.dataItem.dataContext.name
    if (previousPolygon && previousPolygon != target) {
        previousPolygon.set("active", false);
    }
    if (target.get("active")) {
        polygonSeries.zoomToDataItem(target.dataItem);
        await getting_getPlace_API(countryData)
        console.log(countryData)
    }
    else {
        chart.goHome();
    }
    previousPolygon = target;
});

// polygonSeries.mapPolygons.template.on("click", function(ev){
//     var dataItem = ev.target.dataItem.dataContext;
//     console.log("Country Name: " + dataItem.name)
// });


// Add zoom control
// https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
// var zoomControl = chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
// zoomControl.homeButton.set("visible", true);

// Set clicking on "water" to zoom out
chart.chartContainer.get("background").events.on("click", function () {
    chart.goHome();
})

  

// Make stuff animate on load
chart.appear(1000, 100);

}); // end am5.ready()