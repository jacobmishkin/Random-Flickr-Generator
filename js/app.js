$(document).ready(function () {
  
  $('.btn').click(function () {
      var flicker = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
      var flickrOpts = {
        tags: 'doxin',
        format: "json"
      };

  function randomNum(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function displayPhotos(data) {
		$.each( data.items, function( i, item ) {
        $( "#images" ).attr( "src", item.media.m ).appendTo( "#images" );
        
        if ( i === randomNum(0, 20) ) {
          return false;
        }
        
    }); 
  }

  $.getJSON(flicker, flickrOpts, displayPhotos);
  
	});//end click

});//end ready