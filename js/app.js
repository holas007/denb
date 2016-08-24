var myCenter=new google.maps.LatLng(45.957389,-66.650199);
var isacsWay=new google.maps.LatLng(52.395715,4.888916);
var theGarrison=new google.maps.LatLng(58.983991,5.734863);
var vaultTwentyNine=new google.maps.LatLng(45.962740, -66.642544);

function initialize()
{


var myStyles =[
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
var mapProp = {
  center:myCenter,
  zoom:15,
  mapTypeId:google.maps.MapTypeId.ROADMAP,
  styles:myStyles
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:vaultTwentyNine,
  icon:'icon.png'
  });


marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"Vault 29"
  });

infowindow.open(map,marker);

marker.addListener('click', function() {
          infowindow.open(map,marker);
        });

//var myTrip = [stavanger,amsterdam,london,stavanger];
//var flightPath = new google.maps.Polygon({
//  path:myTrip,
//  strokeColor:"#0000FF",
//  strokeOpacity:0.8,
//  strokeWeight:2,
//  fillColor:"#0000FF",
//  fillOpacity:0.4
//});

// flightPath.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
