// Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNmQ0YjU4Zi02MzYxLTQ4YzctYmJhOC1iOTE1M2E3OGIxZGUiLCJpZCI6MzE1MDE3LCJpYXQiOjE3NTA3MzU1NjZ9.uOJ5_BnViI0Mk8vqRyRL4L-pp1cUkg0WKlLOUGJiq6U"

// const viewer = new Cesium.Viewer('cesiumContainer', {
//     terrainProvider: Cesium.createWorldTerrain(),
//     imageryProvider: new Cesium.IonImageryProvider({ assetId: 2 }), // Bing Maps Aerial imagery with labels
//     baseLayerPicker: false,
//     geocoder: true,
//     timeline: false,
//     animation: false,
//     navigationHelpButton: false,
//     sceneModePicker: false
//   });
  
//   // Optional: rotate globe automatically
//   viewer.clock.shouldAnimate = true;
//   viewer.clock.multiplier = 10; // speed of rotation

//   viewer.entities.add({
//     position: Cesium.Cartesian3.fromDegrees(-84.0907, 9.9281), // longitude, latitude (Costa Rica)
//     // billboard: {
//     //   image: 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png', // example weather icon
//     //   scale: 0.1
//     // },
//     label: {
//       text: 'Costa Rica\n27°C Sunny',
//       font: '14px sans-serif',
//       verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
//       pixelOffset: new Cesium.Cartesian2(0, -10)
//     }
//   });


//   viewer.screenSpaceEventHandler.setInputAction(function (click) {
//     // Get the click position in window coordinates
//     var windowPosition = click.position;
  
//     // Get the Cartesian3 position on the ellipsoid (globe surface)
//     var cartesian = viewer.camera.pickEllipsoid(windowPosition, viewer.scene.globe.ellipsoid);
  
//     if (cartesian) {
//       // Convert Cartesian3 to cartographic coordinates (lat, lon)
//       var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
//       var longitude = Cesium.Math.toDegrees(cartographic.longitude);
//       var latitude = Cesium.Math.toDegrees(cartographic.latitude);
  
//       console.log('Clicked location:', latitude.toFixed(4), longitude.toFixed(4));
  
//       // Add a marker at the clicked location
//       viewer.entities.add({
//         position: cartesian,
//         billboard: {
//           image: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // example marker icon
//           scale: 0.1
//         },
//         label: {
//           text: `Lat: ${latitude.toFixed(2)}\nLon: ${longitude.toFixed(2)}`,
//           font: '14px sans-serif',
//           verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
//           pixelOffset: new Cesium.Cartesian2(0, -10)
//         }
//       });
  
//       // Optional: zoom camera to the clicked location
//       viewer.camera.flyTo({
//         destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, 1000000) // height in meters
//       });
//     }
//   }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  