require(["esri/views/MapView", 
"esri/WebMap", 
"esri/widgets/Search",
"esri/widgets/Directions",
"esri/widgets/BasemapGallery",
"esri/widgets/Legend",
"esri/widgets/Fullscreen"
], (MapView, WebMap, Search, Directions, BasemapGallery, Legend, Fullscreen) => {
  /************************************************************
   * Creates a new WebMap instance. A WebMap must reference
   * a PortalItem ID that represents a WebMap saved to
   * arcgis.com or an on-premise portal.
   *
   * To load a WebMap from an on-premise portal, set the portal
   * url with esriConfig.portalUrl.
   ************************************************************/
  const webmap = new WebMap({
    portalItem: {
      // autocasts as new PortalItem()
      id: "40cefd0e1d4b48d09ac61d5361e06055"
    }
  });

  /************************************************************
   * Set the WebMap instance to the map property in a MapView.
   ************************************************************/
  const mapView = new MapView({
    map: webmap,
    container: "viewDiv"
  });

  // Add search WIDGET
  const searchWidget = new Search({
    view: mapView
  });
  
  // Add the search widget to the top right corner of the view
  mapView.ui.add(searchWidget, {
    position: "top-right"
  });

  // Add Directions WIDGET
  const directionsWidget = new Directions({
    view: mapView,
    // layer: routeLayer,
    // apiKey: "YOUR_API_KEY"
  });
  // Add the Directions widget to the bottom-left corner of the view
  mapView.ui.add(directionsWidget, {
    position: "bottom-right"
  });

  // Add BasemapGallery WIDGET
  let basemapGallery = new BasemapGallery({
    view: mapView
  });
  // Add widget to the bottom left corner of the view
  mapView.ui.add(basemapGallery, {
    position: "bottom-left"
  });

  // Add Legend WIDGET
  let legend = new Legend({
    view: mapView
  });
  mapView.ui.add(legend, "top-right");

  // Add Fullscreen WIDGET
  fullscreen = new Fullscreen({
    view: mapView
  });
  mapView.ui.add(fullscreen, "top-left");

}); 
