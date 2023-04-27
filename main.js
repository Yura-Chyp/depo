$('.negr').click(function() {
    var inputValue = $('.inp').val();

    
    var paragraph = $('<p>').text(inputValue);
    
   
    $('.center2').append(paragraph);
  });