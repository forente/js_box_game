$(document).ready(function(){

var boxesColors = [];
for (var i = 0; i < 4; i++) {

  boxesColors.push(getRandomColor());
  $('body').append('<div class="box"></div>');
}
$('div').each(function(){
  this.style.color= 'rgb(' + getRandomColor().toString()+')'
});


$('body').append('<p>',boxesColors[1].toString(),'</p>');

$('.box').on('click', function(){
  $(this).css({'background-color':'rgb(' +boxesColors[1].toString()+')'})

    if (true){
      $('#message').text('Correct!')
    }
    else {
      $('#message').text('Incorrect!')
    }

});




});

function getRandomColor () {
  color = [];
  for (var i = 0; i < 3; i++) {
    color.push(parseInt(Math.random()*255));
  }
  return color;
}
