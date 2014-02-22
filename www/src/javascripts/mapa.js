  var currentPosition = null;

      $("#maps").bind('pageinit', function() {
        $('#map_canvas').gmap().bind('init', function(ev, map) {
          $('#map_canvas').gmap('addMarker', {'position': '-15.816307,-47.8439705', 'bounds': true}).click(function() {
            $('#map_canvas').gmap('openInfoWindow', {'content': 'CICB - Centro Internacional de Convenções do Brasil'}, this);
          });
          $('#map_canvas').gmap('option', 'zoom', 13);
        });
        $('#map_canvas').gmap('refresh');
      });

      $("#maps").bind('pageshow', function() {
        $('#map_canvas').gmap('refresh');
      });
     

      function localizacao() {

          var directionsService = new google.maps.DirectionsService();
          var directionsDisplay = new google.maps.DirectionsRenderer();

          var map = new google.maps.Map(document.getElementById('map_canvas'), {
            zoom:7,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          });

          directionsDisplay.setMap(map);

          var request = {
            origin: currentPosition, 
            destination: '-15.816307,-47.8439705',
            travelMode: google.maps.DirectionsTravelMode.DRIVING
          };

          directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
             directionsDisplay.setDirections(response);
            }
          });

      }

      document.addEventListener("deviceready", onDeviceReady, false);

      function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
      }

      function onSuccess(position) {
        var element = document.getElementById('geolocation');
        currentPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />';
      }

      function onError(error) {
        console.log('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
      }