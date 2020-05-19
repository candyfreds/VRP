// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  

$(".about").hover(function(){
    $(".knob_container").css('transform', 'rotate(180deg)');

});

$(".parts").hover(function(){
    $(".knob_container").css('transform', 'rotate(-90deg)');
});

$(".listen").hover(function(){
    $(".knob_container").css('transform', 'rotate(90deg)');
});


$(".listen, .parts, .about").mouseover(function() {
    $('audio#key')[0].play()

});

$(".on").click(function(){
    $(".light").toggleClass("clicked");
    $("audio#static")[0].play()

 });

$(".on").click(function(){
    $(".record").toggleClass("off");

 });

















// End of Your Code . Don't delete that line below!!
});