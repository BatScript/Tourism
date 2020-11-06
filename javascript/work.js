
//Day Mode

$(document).ready(function(){
    $('.mode').change(function(){
      if($(this).prop('checked')){
        $('.header').css('background-image', "url('css/images/daya.jpg')");
        $('.fwall').css('background-image', "url('css/images/dayb.jpg')");
        $('body').css('background-color', "white");
        $('.mirado').css('color', "white");
        $('.card-body').css('background-color', "white");
        $('h3').css('color', "black");
        $('p').css('color', "black");
      }
      else{
        $('.header').css('background-image', "url('css/images/night.jpg')");
        $('.fwall').css('background-image', "url('css/images/Mountain.jpg')");
        $('body').css('background-color', "black");
        $('.card-body').css('background-color', "black");
        $('h3').css('color', "white");
        $('p').css('color', "white");
      }
    });
});
$('.navbar-toggler-icon').click(function(){
  var get = $('.map');
  var gett = $('.maplink');
  get.remove();
  gett.remove();
});
