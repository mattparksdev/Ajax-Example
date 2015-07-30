$('.btn').click(function() {
  
  $('.text').text('loading . . .');
  
  $.ajax({
    type:"GET",
    url:"https://api.meetup.com/2/cities",
    success: function(data) {
      $('.text').html('');
      for (var i = 0; i < data.results.length; i++) {
        var place = data.results[i].city + ", " + data.results[i].state + " with " + data.results[i].member_count + " residents"
        $('.text').append('<p>' + place + '</p>');
      }
      
    },
    dataType: 'jsonp',
  });
  
});