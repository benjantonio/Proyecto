var map;
  	 function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
		  center: {lat: -33.03233099768304, lng: -71.53397803629817},  
          zoom: 13,
        });
        var marker = new google.maps.Marker({
          position: {lat: -33.03233099768304, lng: -71.53397803629817},
          map: map,
	  title: 'Sede Duoc Uc, Viña del mar'
        });
      }
 