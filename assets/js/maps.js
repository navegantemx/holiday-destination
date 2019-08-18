function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 19.438234,
            lng: -99.138036 
        }
    });

    var labels = "0123456789";
    
    var locations = [
        { lat: 19.043197, lng: -98.206700 }, 
        { lat: 20.972253, lng: -89.628806 }, 
        { lat: 18.556820, lng: -99.606692 },
        { lat: 27.529310, lng: -107.756111 }, 
        { lat: 21.019492, lng: -101.257367 },  
        { lat: 17.073722, lng: -96.727151 },  
        { lat: 19.299330, lng: -99.152654 },  
        { lat: 19.690280, lng: -98.843176 },  
        { lat: 21.172240, lng: -86.852643 }, 
        { lat: 20.684609, lng: -88.567806 }   
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}