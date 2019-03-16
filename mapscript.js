var coords = [];

function myMap()
{
    var exists = false;

    myCenter=new google.maps.LatLng(32.77663093727863, -117.06921800036321);
    var mapOptions= {
        center:myCenter,
        zoom:12, scrollwheel: true, draggable: true,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
    });
    
    function placeMarker(location) {
        if(!exists){
            let marker = new google.maps.Marker({
                position: location, 
                map: map,
                draggable: true
            });
            coords[0] = location.lat();
            coords[1] = location.lng();
            google.maps.event.addListener(marker, 'dragend', function() {
                coords[0] = marker.getPosition().lat();
                coords[1] = marker.getPosition().lng();
                console.log(coords[0],coords[1]);
            });
            console.log(coords);
            exists = true;
        }
    }
    
    // marker.setMap(map);
}
