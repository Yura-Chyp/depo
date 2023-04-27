$('.negr').click(function() {
    var inputValue = $('.inp').val();

    
    var paragraph = $('<p class="tope">').text(inputValue);
    
   
    $('.center2').append(paragraph);
  });