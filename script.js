$(document).ready(function(){

var boxNumber = 5;
var boxesColors = [];
var randomBox = -1;


for (var i = 0; i < boxNumber; i++) {

  boxesColors.push(getRandomColor());
  $('body').append('<div class="box" id="box'+i+'"></div>');

  $('#box'+i).each(function(){
    this.style.backgroundColor= 'rgb(' + boxesColors[i].toString()+')'
  });
}

randomBox = selectRandomBox(boxesColors.length);


$('body').append('<p>',boxesColors[randomBox].toString(),'</p>');

$('.box').on('click', function(){


    if ($(this).attr('id') === "box"+ randomBox){
      $('#message').text('Correct!')
    }
    else {
      $('#message').text('Incorrect!')
    }

    console.log($(this).attr('id'));

});

for (var i = 0; i < boxesColors.length; i++) {
  console.log(boxesColors);
}


});

function getRandomColor () {
  color = [];
  for (var i = 0; i < 3; i++) {
    color.push(parseInt(Math.random()*255));
  }
  return color;
}

function selectRandomBox(len){
  return Math.floor(Math.random() * len);
}
