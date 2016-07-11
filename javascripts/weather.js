$(document).ready(function() {
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      
      $(".myLatitude").text("Latitude: " + lat);
      $(".myLongitude").text("Longitude: " + lon);
    });
  } else {
    alert("Geolocation not available");
  }
});
