import { getting_getPlace_API, getting_getWeather_API } from "./app.js";

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
// function inputCountry(name){
//     const name = name
//     polygonSeries.mapPolygons.each(function(polygon){
//         const countryData = target.dataItem.dataContext.name
//         if (previousPolygon && previousPolygon != polygon){
//             previousPolygon.set("active", false)
//         }
//     } )
// }
function showLoader2() {
    const loadingMap = document.getElementById("loadingMap")
    loadingMap.style.display = 'block'
    
    setTimeout(() => {
        loadingMap.style.display = "none"
        const myModal = new bootstrap.Modal(document.getElementById('countryModal'));
        myModal.show();
    }, 1000);
}


polygonSeries.mapPolygons.template.on("active", async function (active, target) {
    // this variable call countryData is to get the name of the country that is currently selected
    const countryData = target.dataItem.dataContext.name
    if (previousPolygon && previousPolygon != target) {
        previousPolygon.set("active", false);
    }
    // this if conditional over here represent the click from the user in the map
    if (target.get("active")) {
        // this polygonSeries.zoomToDataItem produce a zoom in the map just if this one is currently active
        polygonSeries.zoomToDataItem(target.dataItem);
        
        // the variable result gets the json from the functin getting_getPlace_API and need the paramater from countryData
        // this variable return a list with the information of now the place that is currently selected
        // const result = await getting_getPlace_API(countryData)
        await getting_getWeather_API(countryData)
        // this console.log print the country that is currently selected
        console.log(countryData)
        
        // this variable make the instance of modal from bootstrap
        // const myModal = new bootstrap.Modal(document.getElementById('countryModal'));
        // const myModal2 = new bootstrap.Modal(document.getElementById('countryModal2'));
        showLoader2()
        // myModal.show();

    }
    else {
        chart.goHome()
    }

    previousPolygon = target;
});


// polygonSeries.mapPolygons.template.off("click", function(ev){
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