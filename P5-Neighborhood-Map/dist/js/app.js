// KO.Model - Storing Data That ViewModel will need //
var Model = {
  places: [
  {
    name: 'Jimmy\'s Food Store',
    lat: 32.804476,
    lng:  -96.773658,
    url: 'https://www.jimmysfoodstore.com',
    yelpId: "jimmys-food-store-dallas",
    Highlight: ko.observable(false)
  },
  {
    name: 'Dolly Python',
    lat: 32.802272,
    lng: -96.785943,
    url: 'http://www.dollypythonvintage.com',
    yelpId: "dolly-python-dallas",
    Highlight: ko.observable(false)
  },
  // {
  //   name: 'The Samurai Collection',
  //   yelpId: 'the-ann-and-gabriel-barbier-mueller-museum-the-samurai-collection-dallas',
  //   lat: 32.791917,
  //   lng: -96.806217,
  //   url: 'http://www.samuraicollection.org',
  //   Highlight: ko.observable(false)
  // },
  // {
  //   name: 'Pecan Lodge',
  //   yelpId: 'pecan-lodge-dallas-3',
  //   lat: 32.783925,
  //   lng: -96.783820,
  //   url: 'http://www.pecanlodge.com',
  //   Highlight: ko.observable(false)
  // },
  // {
  //   name: 'Smoke',
  //   yelpId: 'smoke-dallas-2?osq=smoke',
  //   lat: 32.769605,
  //   lng:  -96.837312,
  //   url: 'http://www.pecanlodge.com',
  //   highlight: ko.observable(false)
  // },
  // {
  //   name: 'Dallas Museum of Art',
  //   yelpId: 'dallas-museum-of-art-dallas',
  //   lat: 32.787814,
  //   lng: -96.800793,
  //   url: 'https://www.dma.org',
  //   highlight: ko.observable(false)
  // },
  // {
  //   name: 'Double Wide Bar',
  //   yelpId: 'double-wide-dallas',
  //   lat: 32.784991,
  //   lng: -96.772994,
  //   url: 'http://www.double-wide.com',
  //   highlight: ko.observable(false)
  // },
  // {
  //   name: 'Torchy\'s Tacos',
  //   yelpId: 'torchys-tacos-dallas-2?osq=torchy%27s+atcos+smu',
  //   lat: 32.842145,
  //   lng: -96.771354,
  //   url: 'http://torchystacos.com/location/smu',
  //   highlight: ko.observable(false)
  // },
  // {
  //   name: 'Perot Museum of Nature and Science',
  //   yelpId: 'perot-museum-of-nature-and-science-dallas-2',
  //   lat: 32.787153,
  //   lng:  -96.806644,
  //   url: 'http://www.perotmuseum.org',
  //   highlight: ko.observable(false)
  // },
  // {
  //   name: 'Luscher\'s Red Hots',
  //   yelpId: 'luschers-red-hots-dallas',
  //   lat: 32.783485,
  //   lng: -96.784181,
  //   url: 'http://www.luschers.com',
  //   highlight: ko.observable(false)
  // },
  // {
  //   name: 'Pizza Lounge',
  //   yelpId: 'pizza-lounge-dallas?osq=Pizza+Lounge',
  //   lat: 32.782527,
  //   lng: -96.766595,
  //   url: 'http://www.pizzaloungedallas.com',
  //   highlight: ko.observable(false)
  // },
  // {
  //   name: 'Oddfellows',
  //   yelpId: 'oddfellows-dallas',
  //   lat: 32.748872,
  //   lng: -96.826812,
  //   url: 'http://oddfellowsdallas.com',
  //   highlight: ko.observable(false)
  // },
  // {
  //   name: 'We are 1976',
  //   yelpId: 'we-are-1976-dallas-2',
  //   lat: 32.748334,
  //   lng: -96.829321,
  //   url: 'http://www.weare1976.com',
  //   highlight: ko.observable(false)
  // },
  // {
  //   name: 'Landmark Inwood Theatre',
  //   yelpId: 'landmarks-inwood-theatre-dallas?osq=inwood+theater',
  //   lat: 32.850770,
  //   lng: -96.819450,
  //   url: 'http://www.landmarktheatres.com/dallas/inwood-theatre',
  //   highlight: ko.observable(false)
  // },
  // {
  //   name: 'Barcadia',
  //   yelpId: 'barcadia-dallas',
  //   lat: 32.811954,
  //   lng: -96.775115,
  //   url: 'http://barcadiabars.com/barcadiadallas',
  //   highlight: ko.observable(false)
  // },
  // {
  //   name: 'The Old Monk',
  //   yelpId: 'the-old-monk-dallas',
  //   lat: 32.820336,
  //   lng: -96.784939,
  //   url: 'http://www.oldmonkdallas.com',
  //   highlight: ko.observable(false)
  // },
  // {
  //   name: 'The Joule',
  //   yelpId: 'the-joule-dallas-dallas-2',
  //   lat: 32.780980,
  //   lng: -96.798352,
  //   url: 'http://www.thejouledallas.com',
  //   highlight: ko.observable(false)
  // },
  // {
  //   name: 'Omni Dallas Hotel',
  //   yelpId: 'omni-dallas-hotel-dallas-2',
  //   lat: 32.775559,
  //   lng: -96.804319,
  //   url: 'http://www.omnihotels.com/hotels/dallas',
  //   highlight: ko.observable(false)
  // },
  // {
  //   name: 'Elbow Room',
  //   yelpId: 'the-elbow-room-dallas',
  //   lat: 32.788590,
  //   lng: -96.783126,
  //   url: 'http://elbowroomdallas.com',
  //   highlight: ko.observable(false)
  // }
  ]
};
// ** Intialize the map and set initial location **

function initialize() {
  var dallas = new google.maps.LatLng(32.774778, -96.793824);
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: dallas,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13,
  });

  var placesList = Model.places;
  for (var i = 0; i < placesList.length; i++) {
    var location = placesList[i];
    var locationName = placesList[i];
    var latLng = new google.maps.LatLng(placesList.lat, placesList.lng);
    var pinIcon = new google.maps.MarkerImage(
    'images/pegasus.png',
    null, /* size is determined at runtime */
    null, /* origin is 0,0 */
    null, /* anchor is bottom center of the scaled image */
    new google.maps.Size(42, 42)
    );

    var infowindow = new google.maps.InfoWindow({
        content: name
    });

    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: pinIcon,
      // name: locationObj.name,
      // yelpId: locationObj.yelpId,
      title: placesList.name,
      animation: google.maps.Animation.DROP
    });

google.maps.event.addListener(marker, 'click', function () {
    if (typeof infowindow != 'undefined') infowindow.close();
    infowindow = new google.maps.InfoWindow({
      content: this.locations.name
    });
    infowindow.open(map, this);
  });
}
}

google.maps.event.addDomListener(window, 'load', initialize);