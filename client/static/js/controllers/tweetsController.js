myAppModule.controller('tweetsController', function ($scope, tweetsFactory, NgMap){
	var vm = this;
	NgMap.getMap().then(function(map) {
    vm.map = map;
  });
	console.log('map', NgMap);
	console.log(vm.map)

	// vm.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDGnq_fwNZCytzP1F5UVYVrMwNOFrZZjwk&libraries=geometry,places,visualization";

	tweetsFactory.getTweets(function(data){
    console.log(data)
		vm.tweets = data
	})

	tweetsFactory.getCurrentLocation(function(data){
		console.log(data.lon, data.lat)
		vm.longitude = data.lon
		vm.latitude = data.lat
	})

	function createMarkers(){
	  var infowindow = new google.maps.InfoWindow();
	  var marker, j;
	  for (j = 0; j < vm.tweets.length; j++) {
	    marker = new google.maps.Marker({
	      position: new google.maps.LatLng(vm.tweet[j].place.bounding_box.coordinates[0][0][1], vm.tweet[j].place.bounding_box.coordinates[0][0][0]),
	      map: map
	    });
	    google.maps.event.addListener(marker, 'mouseover', (function (marker, j) {
	      return function() {
	        infowindow.setContent("<p class='info'>" + vm.tweet[j].id + "</p>");
	        infowindow.open(map, marker);
	      }
	    })(marker, j));
	  }
	}
	createMarkers();
})
