
//Set up the custom styles for the map. I've created two styles so the map can switch between them depending on the zoom level. i.e. there is far less detail when the map is zoomed out.
//First, we read in the data describing style.
var style_fredericton = [
{
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
},{
	featureType: "road",
	elementType: "labels",
	stylers:[{visibility:"off"}]
},{
	featureType: "city",
	elementType: "labels",
	stylers:[{visibility:"off"}]
}
];
 
var styled_fredericton = new google.maps.StyledMapType(style_fredericton, {name: "fredericton style"});
var frederictonMapCenter = new google.maps.LatLng(45.957389,-66.650199);
var frederictonMapZoom = 15;
var frederictonMapZoomMax = 18;
var frederictonMapZoomMin = 13;

//These options configure the setup of the map. 
var frederictonMapOptions = { 
		  center: frederictonMapCenter, 
          zoom: frederictonMapZoom,
		  maxZoom:frederictonMapZoomMax,
		  minZoom:frederictonMapZoomMin,
		  panControl: false,
		  mapTypeControl: false,
		   mapTypeControlOptions: {
     		mapTypeIds: [ 'map_styles_fredericton']
   		 }
};

//Create the variable for the main map itself.
var frederictonMap;


//Variable containing the style for the pop-up infobox.
var pop_up_info = "border: 0px solid black; background-color: #ffffff; padding:15px; margin-top: 8px; border-radius:10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; box-shadow: 1px 1px #888;";


//When the page loads, the line below calls the function below called 'loadFrederictonMap' to load up the map.
google.maps.event.addDomListener(window, 'load', loadFrederictonMap);


//THE MAIN FUNCTION THAT IS CALLED WHEN THE WEB PAGE LOADS
function loadFrederictonMap() {
	
frederictonMap = new google.maps.Map(document.getElementById("fredericton-map"), frederictonMapOptions);	
frederictonMap.mapTypes.set('map_styles_fredericton', styled_fredericton);
frederictonMap.setMapTypeId('map_styles_fredericton');

//Calls the function below to load up all the map markers and pop-up boxes.
loadMapMarkers();

}

//Function that loads the map markers and the pop-up info boxes.
function loadMapMarkers (){




//Main ----------TEMPLATE for a location   this needs to be made into a reuasable module we use with a database to loop the lcoations and create them automatically-------###########################################################################

//Setting the position of the Main map marker.
var markerPositionMain = new google.maps.LatLng(45.962740, -66.642544);

//Setting the icon to be used with the Main map marker.
var markerIconMain = {
  url: 'icons/icon_glas_uk.png',
  //The size image file.
  size: new google.maps.Size(225, 120),
  //The point on the image to measure the anchor from. 0, 0 is the top left.
  origin: new google.maps.Point(0, 0),
  //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.
  anchor: new google.maps.Point(189, 116)
};

//Setting the shape to be used with the Main map marker.
var markerShapeMain = {
      coord: [12,4,216,22,212,74,157,70,184,111,125,67,6,56],
      type: 'poly'
};

//Creating the Main map marker.
markerMain = new google.maps.Marker({
      //uses the position set above.
	  position: markerPositionMain,
	  //adds the marker to the map.
      map: frederictonMap,
      title: 'Main fredericton',
	  //assigns the icon image set above to the marker.
	  icon: markerIconMain,
	  //assigns the icon shape set above to the marker.
	  shape: markerShapeMain,
	  //sets the z-index of the map marker.
	  zIndex:107
});

//Creates the information to go in the pop-up info box.
var boxTextMain = document.createElement("div");
boxTextMain.style.cssText = pop_up_info;
boxTextMain.innerHTML = '<div class="pop_up_box_text"><h1>Vault 29</h1><h3>Hours of Operations:</h3><p>Monday - Wednesday 11:00am - 12:00am<br>Thursday - Saturday 11:00am - 2:00am</p><h3>Phone Number:</h3><p>(506) 454-1929</p><h3>Specials:</h3><p>STEAK & ALE NIGHT $19.99<br>Join us every Thursday 5 PM ~ 11 PM<br>10 oz Strip loin and 18 oz Moosehead Premium Draft</p><h3>Reviews:</h3><br><br><br><p>426 Queen St, Fredericton, NB E3B 1B6, Canada</p></div>';

//Sets up the configuration options of the pop-up info box.                
var infoboxOptionsMain = {
                 content: boxTextMain
                ,disableAutoPan: false
                ,maxWidth: 0
                ,pixelOffset: new google.maps.Size(-241, 0)
                ,zIndex: null
                ,boxStyle: { 
                  background: "url('infobox/pop_up_box_top_arrow.png') no-repeat"
                  ,opacity: 1
                  ,width: "430px"
                 }
                ,closeBoxMargin: "10px 2px 2px 2px"
                ,closeBoxURL: "icons/button_close.png"
                ,infoBoxClearance: new google.maps.Size(1, 1)
                ,isHidden: false
                ,pane: "floatPane"
                ,enableEventPropagation: false
};

//Creates the pop-up infobox for Main, adding the configuration options set above.
infoboxMain = new InfoBox(infoboxOptionsMain);

//Add an 'event listener' to the Main map marker to listen out for when it is clicked.
google.maps.event.addListener(markerMain, "click", function (e) {
			//Open the Main info box.
			infoboxMain.open(frederictonMap, this);
			//Changes the z-index property of the marker to make the marker appear on top of other markers.
			this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
			//Zooms the map.
			setZoomWhenMarkerClicked();
			//Sets the Main marker to be the center of the map. 
			frederictonMap.setCenter(markerMain.getPosition());
});

//Main ----------END     TEMPLATE-------###########################################################################







}







//Function that zooms the map in (if has not been zoomed already) when a map marker is clicked.
//function setZoomWhenMarkerClicked(){
//var currentZoom = frederictonMap.getZoom();
//	if (currentZoom < 7){
//			frederictonMap.setZoom(7);
//	}
//}

