function myMap()
{
    var lat = 0;
    var lon = 0;
    myCenter=new google.maps.LatLng(32.77663093727863, -117.06921800036321);
    var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: true, draggable: true,
    mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

    var marker = new google.maps.Marker({
    position: myCenter,
    map: map,
    anchorPoint: new google.maps.Point(0, -29),
    draggable: true
    });

    google.maps.event.addListener(marker, 'dragend', function() {
    lat = marker.getPosition().lat();
    lon = marker.getPosition().lng();
    })

    console.log(lat,lon);
    marker.setMap(map);
}