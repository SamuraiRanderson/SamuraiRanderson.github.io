// ** KO.Model - Storing Data That ViewModel will need ** //
// ** Array of locations in Dallas, TX ** //

var Model = [
          {name: 'Jimmy\'s Food Store', address_1: '4901 Bryan St', address_2: 'Dallas, TX 75206', phone: '(214) 823-6180', lat: 32.804476, lng:  -96.773658,
          url: 'https://www.jimmysfoodstore.com', yelpId: 'jimmys-food-store-dallas',category: 'Eat'},
          {name: 'Dolly Python', address_1: '1916 N Haskell Ave', address_2: 'Dallas, TX 75204', phone: '(214) 887-3434', lat: 32.802272, lng: -96.785943,
          url: 'http://www.dollypythonvintage.com', yelpId: 'dolly-python-dallas',category: 'Shop'},
          {name: 'The Samurai Collection', address_1: '2501 N Harwood St', address_2: 'Dallas, TX 75201', phone: '(214) 965-1032', lat: 32.791917, lng: -96.806217,
          url: 'http://www.samuraicollection.org', yelpId: 'the-ann-and-gabriel-barbier-mueller-museum-the-samurai-collection-dallas', category: 'Learn'},
          {name: 'Pecan Lodge', address_1: '2702 Main St', address_2: 'Dallas, TX 75226', phone: '(214) 748-8900', lat: 32.783925, lng: -96.783820,
          url: 'http://www.pecanlodge.com', yelpId: 'pecan-lodge-dallas-3', category: 'Eat'},
          {name: 'Smoke', address_1: '901 Fort Worth Ave', address_2: 'Dallas, TX 75208', phone: '(214) 393-4141', lat: 32.769605, lng:  -96.837312,
          url: 'http://smokerestaurant.com', yelpId: 'smoke-dallas-2?osq=smoke', category: 'Eat'},
          {name: 'Dallas Museum of Art', address_1: '1717 N Harwood St', address_2: 'Dallas, TX 75201', phone: '(214) 922-1200', lat: 32.787814, lng: -96.800793,
          url: 'https://www.dma.org', yelpId: 'dallas-museum-of-art-dallas', category: 'Learn'},
          {name: 'Double Wide Bar', address_1: '3510 Commerce St', address_2: 'Dallas, TX 75226', phone: '(214) 887-6510', lat: 32.784991, lng: -96.772994,
          url: 'http://www.double-wide.com', yelpId: 'double-wide-dallas',category: 'Drink'},
          {name: 'Torchy\'s Tacos', address_1: '5600 SMU Boulevard', address_2: 'Dallas, TX 75206', phone: '(972) 993-8226', lat: 32.842145, lng: -96.771354,
          url: 'http://torchystacos.com/location/smu', yelpId: 'torchys-tacos-dallas-2?osq=torchy%27s+atcos+smu', category: 'Eat'},
          {name: 'Perot Museum of Nature and Science', address_1: '3510 Commerce St', address_2: 'Dallas, TX 75226', phone: '(214) 887-6510', lat: 32.787153, lng:  -96.806644,
          url: 'http://www.perotmuseum.org', yelpId: 'perot-museum-of-nature-and-science-dallas-2', category: 'Learn'},
          {name: 'Luscher\'s Red Hots', address_1: '2653 Commerce St', address_2: 'Dallas, TX 75226', phone: '(214) 434-1006', lat: 32.783485, lng: -96.784181,
          url: 'http://www.luschers.com', yelpId: 'luschers-red-hots-dallas', category: 'Eat'},
          {name: 'Pizza Lounge', address_1: '841 Exposition Ave', address_2: 'Dallas, TX 75226', phone: '(214) 887-6900', lat: 32.782527, lng: -96.766595,
          url: 'http://www.pizzaloungedallas.com', yelpId: 'pizza-lounge-dallas?osq=Pizza+Lounge', category: 'Eat'},
          {name: 'Oddfellows', address_1: '316 W 7th St', address_2: 'Dallas, TX 75208', phone: '(214) 944-5958', lat: 32.748872, lng: -96.826812,
          url: 'http://oddfellowsdallas.com', yelpId: 'oddfellows-dallas', category: 'Eat'},
          {name: 'We are 1976', address_1: '313 N Bishop Ave', address_2: 'Dallas, TX 75208', phone: '(214) 821-1976', lat: 32.748334, lng: -96.829321,
          url: 'http://www.weare1976.com', yelpId: 'we-are-1976-dallas-2', category: 'Shop'},
          {name: 'The Magnolia', address_1: '3699 McKinney Ave #100', address_2: 'Dallas, TX 75204', phone: '(214) 520-0394', lat: 32.808131, lng: -96.797955,
          url: 'http://www.landmarktheatres.com/dallas/the-magnolia', yelpId: 'landmarks-magnolia-theater-dallas', category: 'Learn'},
          {name: 'Barcadia', address_1: '1917 N Henderson Ave', address_2: 'Dallas, TX 75206', phone: '(214) 821-7300', lat: 32.811954, lng: -96.775115,
          url: 'http://barcadiabars.com/barcadiadallas', yelpId: 'barcadia-dallas', category: 'Drink'},
          {name: 'The Old Monk', address_1: '2847 N Henderson Ave', address_2: 'Dallas, TX 75206', phone: '(214) 821-1880', lat: 32.820336, lng: -96.784939,
          url: 'http://www.oldmonkdallas.com', yelpId: 'the-old-monk-dallas', category: 'Drink'},
          {name: 'The Joule', address_1: '1530 Main St', address_2: 'Dallas, TX 75201', phone: '(214) 748-1300', lat: 32.780980, lng: -96.798352,
          url: 'http://www.thejouledallas.com', yelpId: 'the-joule-dallas-dallas-2', category: 'Stay'},
          {name: 'Omni Dallas Hotel', address_1: '555 S Lamar', address_2: 'Dallas, TX 75202', phone: '(214) 744-6664', lat: 32.775559, lng: -96.804319,
          url: 'http://www.omnihotels.com/hotels/dallas', yelpId: 'omni-dallas-hotel-dallas-2', category: 'Stay'},
          {name: 'Elbow Room', address_1: '3010 Gaston Ave', address_2: 'Dallas, TX 75226', phone: '(214) 828-9488', lat: 32.788590, lng: -96.783126,
          url: 'http://elbowroomdallas.com', yelpId: 'the-elbow-room-dallas', category: 'Eat'}
];

var P = function(data) {
     "use strict";
     var self = this;
     self.name = ko.observable(data.name);
     self.address_1 = ko.observable(data.address_1);
     self.address_2 = ko.observable(data.address_2);
     self.phone = ko.observable(data.phone);
     self.lat = ko.observable(data.lat);
     self.lng = ko.observable(data.lng);
     self.url = ko.observable(data.url);
     self.category = ko.observable(data.category);
     self.marker = ko.observable();
};

var ViewModel = function () {
     "use strict";
     var self = this;

// ** self.placeList is an empty array that is populated thr placeItem ** //
// ** function that is pushed from the model variable array ** //

     self.placeList = ko.observableArray([]);
     self.query = ko.observable('');

     Model.forEach(function(placeItem){
          self.placeList.push(new P (placeItem));
     });

// ** Establish current marker ** //

     Model.currentMarker = ko.observable();

// ** Adding the markers to the map for each location in the array. **  //

     var marker;
          for (var i = 0; i < Model.length; i ++) {
               marker = new google.maps.Marker({
                    position: new google.maps.LatLng(Model[i].lat, Model[i].lng),
                    map: map,
                    title: Model[i].name,
                    address_1: Model[i].address_1,
                    address_2: Model[i].address_2,
                    phone: Model[i].phone,
                    url: Model[i].url,
                    animation: google.maps.Animation.DROP

               });

// ** Initialize the Google Maps InfoWindow for display, when needed. ** //

     var infoWindow = new google.maps.InfoWindow();

// ** displayInfoAndBounce() is called when either an item clicked on in our list ** //
// ** or when a marked location is clicked on the map. ** //
//
// ** infowindow content is set **
//
// ** m = the Google Maps marker passed to this function ** //

     function displayInfoAndBounce(m) {
     infoWindow.setContent('<h2>' + m.title + '</h2>' + '<br>' +
          m.address_1 + '<br>' + m.address_2 + '<br>' + m.phone + '</br>' +
          '<a href=' + m.url + '>' + m.url + '</a>');
     infoWindow.open(map, m);

// ** Sets the marker in motion by checking it's status and animating it if it's idle. ** //

     if (m.getAnimation() !== null) {
          m.setAnimation(null);
     } else {
          m.setAnimation(google.maps.Animation.BOUNCE);
     }

// ** Moves the map to the markers location and assigns the new current marker. ** //

     map.panTo(m.position);

     }

// ** setTimeout() added to keep the markers from bouncing infinitely and set timing ** //

     function stopAnimation(m) {
          setTimeout (function(){
               m.setAnimation(null);
          }, 3500);
     }

// ** Filter/Search functionality ** //

     self.filter = function() {

// ** Taking the value of var str input into #filter and using .replace ** //
// ** to replace the begining lowercase letters of a word with their value ** //
// ** capitialized. **//

          var str = $('#filter').val();
          str = str.toLowerCase().replace(/\b[a-z]/g, function(self) {
               return self.toUpperCase();
          }),

// ** Show/Hide list items depending on the text entered by user ** //

          $(".locList > li").each(function(){
               $(this).text().search(str) > -1 ? $(this).show() : $(this).hide();
          });

     };

// ** Add locations from array to the place list and the mobile dropdown-menu ** //
//
// ** locations added to placeList for desktop ** //

    // $('#loclist .placeList').append('<li><a>' + Model[i].name + '</a></li>');

// ** locations added to #uiList ** //

     $('#uiList .locList').append('<li><a>' + Model[i].name + '</a></li>');

// ** 'click' binding for list ** //

     $('#uiList .locList li a').last().bind('click', function(m) {
        return function () {
          displayInfoAndBounce(m);
          stopAnimation(m);
        };
     }(marker));

// ** Bind the click events for each map marker with the panMapAndDisplayInfoAndBounce()function. ** //
// ** We pass the Google Maps marker as a parameter to the function, so it knows where to move the map, ** //
// ** what info to show, and identifies the marker to animate ** //

     google.maps.event.addListener(marker, 'click', function() {
          displayInfoAndBounce(this);
          stopAnimation(this);
          });

     }

};


//** Initialize Google Maps **//
var map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: new google.maps.LatLng(32.789356, -96.801788),
      zoom: 13,
});



$(document).ready(function(){
ko.applyBindings(new ViewModel());
});