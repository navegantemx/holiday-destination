 // Markers with "info window" https://stackoverflow.com/questions/37435203/multiple-distinct-infowindows-on-google-map

function addMarkerWithInfowindow(map, marker_position, infowindow_content) {
    var myLatlng, marker, infowindow, contentString;
    marker = new google.maps.Marker({
        position: marker_position,
        map: map
    });
    contentString = infowindow_content;
    infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

function initMap() {
    var mapDiv = document.getElementById('map');
    myLatlng = new google.maps.LatLng(23.634501, -102.552788);

    var map = new google.maps.Map(mapDiv, {
        scrollwheel: false,
        center: myLatlng,
        zoom: 5
    });

    addMarkerWithInfowindow(map, new google.maps.LatLng(19.043680, -98.199043), '<div>Puebla</div>');
    addMarkerWithInfowindow(map, new google.maps.LatLng(20.967369, -89.592583), '<div>Merida</div>');
    addMarkerWithInfowindow(map, new google.maps.LatLng(18.548571, -99.608528), '<div>Taxco</div>');
    addMarkerWithInfowindow(map, new google.maps.LatLng(27.509664628, -107.759496962), '<div>Copper Canyon</div>');
    addMarkerWithInfowindow(map, new google.maps.LatLng(21.0190, -101.2574), '<div>Guanajuato</div>');
    addMarkerWithInfowindow(map, new google.maps.LatLng(17.0732, -96.7266), '<div>Oaxaca</div>');
    addMarkerWithInfowindow(map, new google.maps.LatLng(19.4326, -99.1332), '<div>Mexico City</div>');
    addMarkerWithInfowindow(map, new google.maps.LatLng(19.6861, -98.8716), '<div>Teotihuacan</div>');
    addMarkerWithInfowindow(map, new google.maps.LatLng(21.17429, -86.84656), '<div>Cancun</div>');
    addMarkerWithInfowindow(map, new google.maps.LatLng(20.66667, -88.56667), '<div>Chichen Itza</div>');

    //SearchBox https://developers.google.com/maps/documentation/javascript/places-autocomplete

    var input = document.getElementById('search');

    var searchBox = new google.maps.places.SearchBox(input);

    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    var markers = []

    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();
        if (places.length === 0)
            return;

        markers.forEach(function(m) { m.setMap(null); });
        markers = [];

        var bounds = new google.maps.LatLngBounds();

        places.forEach(function(p) {
            if (!p.geometry)
                return;

            markers.push(new google.maps.Marker({
                map: map,
                title: p.name,
                position: p.geometry.location
            }));

            if (p.geometry.viewport)
                bounds.union(p.geometry.viewport);
            else
                bounds.extend(p.geometry.location);
        });

        map.fitBounds(bounds);
    });
}


