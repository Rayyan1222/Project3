function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: {lat: 41.77733255084747, lng: -87.61660508659033},
    });
    var marker = new google.maps.Marker({
      position: {lat: 41.77733255084747, lng: -87.61660508659033}, 
      map: map,
      icon: "images/oblock.png",
      title: 'Parkway Gardens',
      animation: google.maps.Animation.DROP,
      draggable: true,
    });
    
    var infoWindow = new google.maps.InfoWindow({
      content: '<div style="width: 200px; height: 150px;">' +
        '<h3>Parkway Gardens</h3>' +
        '<p>Parkway Gardens, in Chicago IL is a lively and positive community.</p>' +
        '<p>It has lots of green spaces, a friendly vibe, and people here feel connected.</p>' +
        '<p>The neighborhood truly captures the essence of city living.</p>' +
        '<p>Residents love the mix of cultures, local amenities, and the welcoming community, making every day a happy experience.</p>' +
        '</div>'
    });
    
    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
    
  
    var marker = new google.maps.Marker({
      position: {lat: 41.77733255084747, lng: -87.61660508659033}, 
      map: map,
      title: 'Parkway Gardens',
    });
  }
