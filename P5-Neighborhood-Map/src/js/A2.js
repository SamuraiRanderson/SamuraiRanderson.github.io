// ** KO.Model - Storing Data That ViewModel will need ** //
// ** Array of locations in Dallas, TX ** //

var Model = [
          {name: 'Jimmy\'s Food Store', address_1: '4901 Bryan St', address_2: 'Dallas, TX 75206', phone: '(214) 823-6180', lat: 32.804476, lng:  -96.773658,
          //url: 'https://www.jimmysfoodstore.com', locationId: 122958},
          url: 'https://www.jimmysfoodstore.com', locationId: '<img width="188px" height="188px"  src=https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s320x320/e35/11325161_112942742390197_1936290244_n.jpg>',},
          {name: 'Dolly Python', address_1: '1916 N Haskell Ave', address_2: 'Dallas, TX 75204', phone: '(214) 887-3434', lat: 32.802272, lng: -96.785943,
          //url: 'http://www.dollypythonvintage.com', locationId: 567284},
          url: 'http://www.dollypythonvintage.com', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s320x320/e15/11910542_1070283236315124_1142934337_n.jpg>'},
          {name: 'The Samurai Collection', address_1: '2501 N Harwood St', address_2: 'Dallas, TX 75201', phone: '(214) 965-1032', lat: 32.791917, lng: -96.806217,
          //url: 'http://www.samuraicollection.org', locationId: 91523867},
          url: 'http://www.samuraicollection.org', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e15/11375767_697768100328048_1500434237_n.jpg>'},
          {name: 'Pecan Lodge', address_1: '2702 Main St', address_2: 'Dallas, TX 75226', phone: '(214) 748-8900', lat: 32.783925, lng: -96.783820,
          //url: 'http://www.pecanlodge.com', locationId: 289297740},
          url: 'http://www.pecanlodge.com', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e35/11899609_1649957018581446_854081803_n.jpg>'},
          {name: 'Smoke', address_1: '901 Fort Worth Ave', address_2: 'Dallas, TX 75208', phone: '(214) 393-4141', lat: 32.769605, lng:  -96.837312,
          //url: 'http://smokerestaurant.com', locationId: 152607},
          url: 'http://smokerestaurant.com', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e35/11311195_1469702123334711_1985444724_n.jpg>'},
          {name: 'Dallas Museum of Art', address_1: '1717 N Harwood St', address_2: 'Dallas, TX 75201', phone: '(214) 922-1200', lat: 32.787814, lng: -96.800793,
          //url: 'https://www.dma.org', locationId: 81723},
          url: 'https://www.dma.org', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e35/11427423_957988400923986_72179099_n.jpg>'},
          {name: 'Double Wide Bar', address_1: '3510 Commerce St', address_2: 'Dallas, TX 75226', phone: '(214) 887-6510', lat: 32.784991, lng: -96.772994,
          //url: 'http://www.double-wide.com', locationId: 102177},
          url: 'http://www.double-wide.com', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e35/11264622_1640965602788497_1475458038_n.jpg>'},
          {name: 'Luscher\'s Red Hots', address_1: '2653 Commerce St', address_2: 'Dallas, TX 75226', phone: '(214) 434-1006', lat: 32.783485, lng: -96.784181,
          //url: 'http://www.luschers.com', locationId: 627073515},
          url: 'http://www.luschers.com', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e35/11850180_1465861503717269_380158022_n.jpg>'},
          // {name: 'Pizza Lounge', address_1: '841 Exposition Ave', address_2: 'Dallas, TX 75226', phone: '(214) 887-6900', lat: 32.782527, lng: -96.766595,
          // url: 'http://www.pizzaloungedallas.com', locationId: 223127624},
          {name: 'Oddfellows', address_1: '316 W 7th St', address_2: 'Dallas, TX 75208', phone: '(214) 944-5958', lat: 32.748872, lng: -96.826812,
          //url: 'http://oddfellowsdallas.com', locationId: 526179323},
          url: 'http://oddfellowsdallas.com', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/s320x320/e35/1517191_830642707050300_579233814_n.jpg>'},
          {name: 'We are 1976', address_1: '313 N Bishop Ave', address_2: 'Dallas, TX 75208', phone: '(214) 821-1976', lat: 32.748334, lng: -96.829321,
          //url: 'http://www.weare1976.com', locationId: 684487},
          url: 'http://www.weare1976.com', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e35/11311495_470248963148780_588231373_n.jpg>'},
          {name: 'The Magnolia', address_1: '3699 McKinney Ave #100', address_2: 'Dallas, TX 75204', phone: '(214) 520-0394', lat: 32.808131, lng: -96.797955,
          //url: 'http://www.landmarktheatres.com/dallas/the-magnolia', locationId: 269612008},
          url: 'http://www.landmarktheatres.com/dallas/the-magnolia', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s320x320/e35/11330753_1613856215540275_827876991_n.jpg>'},
          {name: 'Barcadia', address_1: '1917 N Henderson Ave', address_2: 'Dallas, TX 75206', phone: '(214) 821-7300', lat: 32.811954, lng: -96.775115,
          //url: 'http://barcadiabars.com/barcadiadallas', locationId: 942082587},
          url: 'http://barcadiabars.com/barcadiadallas', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e15/11925841_1600702270203531_484156709_n.jpg>'},
          {name: 'The Old Monk', address_1: '2847 N Henderson Ave', address_2: 'Dallas, TX 75206', phone: '(214) 821-1880', lat: 32.820336, lng: -96.784939,
          //url: 'http://www.oldmonkdallas.com', locationId: 678908617},
          url: 'http://www.oldmonkdallas.com', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e35/11261205_411164612427362_1568725969_n.jpg>'},
          {name: 'The Joule', address_1: '1530 Main St', address_2: 'Dallas, TX 75201', phone: '(214) 748-1300', lat: 32.780980, lng: -96.798352,
          //url: 'http://www.thejouledallas.com', locationId: 492431},
          url: 'http://www.thejouledallas.com', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s320x320/e35/11881631_985390341518588_735099582_n.jpg>' },
          {name: 'Omni Dallas Hotel', address_1: '555 S Lamar', address_2: 'Dallas, TX 75202', phone: '(214) 744-6664', lat: 32.775559, lng: -96.804319,
          //url: 'http://www.omnihotels.com/hotels/dallas', locationId: 459169137},
          url: 'http://www.omnihotels.com/hotels/dallas', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e35/11899540_411215565739641_1362445448_n.jpg>'},
          {name: 'Elbow Room', address_1: '3010 Gaston Ave', address_2: 'Dallas, TX 75226', phone: '(214) 828-9488', lat: 32.788590, lng: -96.783126,
          //url: 'http://elbowroomdallas.com', locationId: 438168},
          url: 'http://elbowroomdallas.com', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e35/11821143_985074391543925_2041108129_n.jpg>'},
          {name: 'The Cedars Social', address_1: '1326 S Lamar', address_2: 'Dallas, TX 75215', phone: '(214) 928-7700', lat: 32.769119, lng: -96.795821,
          //url: 'http://www.thecedarssocial.com', locationId: 236668314},
          url: 'http://www.thecedarssocial.com', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s320x320/e15/11176378_883598548348118_84931308_n.jpg>'},
          {name: 'Lee Harvey\'s', address_1: '1807 Gould St', address_2: 'Dallas, TX 75215', phone: '(214) 428-1555', lat: 32.768950, lng: -96.789751,
          //url: 'http://leeharveys.com', locationId: 65487}
          url: 'http://leeharveys.com', locationId: '<img width="188px" height="188px" src=https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e35/11821896_1689717784591865_2029221682_n.jpg>'}
];

// var Venue = function(data) {
//      "use strict";
//      var self = this;
//      self.name = ko.observable(data.name);
//      self.address_1 = ko.observable(data.address_1);
//      self.address_2 = ko.observable(data.address_2);
//      self.phone = ko.observable(data.phone);
//      self.lat = ko.observable(data.lat);
//      self.lng = ko.observable(data.lng);
//      self.url = ko.observable(data.url);
//      self.marker = ko.observable();
//      self.locationId = ko.observable(data.locationId);
// };

var ViewModel = function () {
     "use strict";
     var self = this;

// ** self.placeList is an empty array that is populated thr placeItem ** //
// ** function that is pushed from the model variable array ** //

    self.venueList = ko.observableArray([]);

// ** Establish current marker ** //

//     Model.currentMarker = ko.observable();

// ** Instagram API ** //

function loadData() {

var $body = $('body');
var $images = $('images');
var CLIENT_ID = '6f4a01054c424c17be81b5a53bf800a0';
var CLIENT_SECRET = '4c74e85af2394995ae5741769e25a0cf';
var access_token = 'access_token=1962684669.6f4a010.676642d0021149d7b7d58a8cec924c0d';

var instagramUrl = 'https://api.instagram.com/v1/locations/236668314/media/recent?' + access_token;
//$body.append('<img class = "bgimg" src = "' + instagramUrl + '">');
var instagramRequestTO = setTimeout (function(){
 $images.text("Instagram information is not available at this time... Please try again later.");
}, 3000);

console.log(instagramUrl);

$.ajax({
     type: "Get",
     dataType: "jsonp",
     cache: false,
     jsonp: "callback",
     url: instagramUrl,
     success: function (response) {
          for (var i = 0; i < 1; i++){
        $('#imageBox').append('<img src=' + response.data[i].images.low_resolution.url + ' width=200px height=200px>');

console.log(response);
         };

     clearTimeout(instagramRequestTO);

     }
});

return false;

};

$(loadData);

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
                    locationId: Model[i].locationId,
                    animation: google.maps.Animation.DROP

               });

          self.venueList.push(marker);

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
          '<a href=' + m.url + '>' + m.url + '</a>' + '<br>' + m.locationId + '<br>');
          //'<img width="188px" height="188px" src=' + m.locationId + '>' + '</div>');
          //m.locationId);
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

          for(var i = 0; i < self.venueList().length; i++){
          self.venueList()[i].setMap(self.venueList()[i].title.search(str) > -1 ? map : null);
          }

     };
//console.log(self.venueList()[i]);

// ** Add locations from array to the place list and the mobile dropdown-menu ** //

// ** locations added to #uiList ** //

     $('#uiList .locList').append('<li><a>' + Model[i].name + '<br>'
          + Model[i].address_1 + '<br>' + Model[i].address_2 + '<br>'
          + Model[i].phone + '<br>' + '<hr>' + '</a></li>');

// ** 'click' binding for list ** //

     $('#uiList .locList li a').last().bind('click', function(m) {
          return function () {
               displayInfoAndBounce(m);
               stopAnimation(m);
          };

     }(marker));

// ** Bind the click events for each map marker with the displayInfoAndBounce()function. ** //
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