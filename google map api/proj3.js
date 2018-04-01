function initMap() {
        var options = {
            zoom:10,
          center: {lat:51.956116, lng:4.558640}// to locat the central point in one the map
            };
    
        var map = new google.maps.Map(document.getElementById('map'), options);
    

//adding the first map Markerer   
  var Marker1 = new google.maps.Marker({
          position: { lat: 51.903704, lng: 4.443062},
          
          map: map,
         icon:"locationicon.png"// this icon form my saved locally
        });

          var infoWindow1 = new google.maps.InfoWindow({
            content: "<h5>Deftshaven</h5>"
          });

          Marker1.addListener("click", function () {
            infoWindow1.open(map, Marker1);
          })


/////////////////////////////////////////////////////////////////////

//adding the second map Markerer 
  var Marker2 = new google.maps.Marker({
        position: { lat: 51.933052, lng: 4.433008 }, 
        
        map: map,
    icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"// this icon is online
      });


        var infoWindow2 = new google.maps.InfoWindow({
          content: "<h5>Overschie</h5>"
        });

        Marker2.addListener("click", function () {
          infoWindow2.open(map, Marker2);
        })

/////////////////////////////////////////////////////////////////////


      }

















var countDownDate = new Date("Mar 9, 2018 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "day " + hours + "hour "
  + minutes + "m " + seconds + "second ";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


