function myFunction() {
  var name = document.getElementById("nameId");
  var email = document.getElementById("emailId");
  var message = document.getElementById("messageId");

  if (!name.checkValidity()) {
    alert('Invalid Name');
  }
  else if (!email.checkValidity()) {
     alert('Invalid Email');
  }
  else if (!message.checkValidity()) {
     alert('Invalid Message');
  }
  else{
    alert('Message Send, we will contact you soon!!!');
  }
}


/* Initialize and add the map
--Load the API from the specified URL
* The async attribute allows the browser to render the page while the API loads
* The key parameter will contain your own API key (which is not needed for this tutorial)
* The callback parameter executes the initMap() function
*/
function initMap() {
  // The location of Uluru
  var uluru = {lat: -12.079564, lng: -76.997705};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 14, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
