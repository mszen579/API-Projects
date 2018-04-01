  
function initMap() {
        var options = {
            zoom:10,
          center: {lat:51.956116, lng:4.558640}
            };
    
        var map = new google.maps.Map(document.getElementById('map'), options);
    

    
        var marker = new google.maps.Marker({
          position: {lat:51.956116, lng:4.558640},
           
          map: map,
           icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        });
    
    var infoWindow = new google.maps.InfoWindow({
        content : "<h1>Evolution Entertainment</h1>"
    });
    
    marker.addListener("click", function(){
        infoWindow.open(map,marker);
    })
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


