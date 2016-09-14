$(document).ready(function() {

  $('.pallette-red').click(function(){
      $('.current-color').css("background-color","red");
      });

  $('.pallette-green').click(function(){
      $('.current-color').css('background-color','green');
      });

  $('.pallette-blue').click(function(){
      $('.current-color').css('background-color','blue');
      });

  $('.pallette-yellow').click(function(){
      $('.current-color').css('background-color','yellow');
      });

  $('.pallette-white').click(function(){
      $('.current-color').css('background-color','white');
      });

//after clicking reset this will also reset the background to the paint brush icon to white
      $('.pallette-black').on('click', function(){
        $('.current-color').css('background-color','white');
        color = '';
      });

  $('.box').on('click', function() {
    $(this).addClass(color);
  });

  var colors = 'white green red blue yellow';

  $('.box').on('dblclick', function(){
    $(this).removeClass(color);
  });
  $('#reset').on('click', function(){
    $('.box').removeClass(colors);
  });

  var color = 'white';

    $('#red').on('click', function(){
      color = 'red';
    });
    $('#blue').on('click', function(){
      color = 'blue';
    });
    $('#green').on('click', function(){
      color = 'green';
    });
    $('#yellow').on('click', function(){
      color = 'yellow';
    });
    $('#white').on('click', function(){
      color = 'white';
    });

//after clicking reset this will also reset the current chosen color to white
    $('#reset').on('click', function(){
      $('.box').attr('class', 'box');
    });
});
