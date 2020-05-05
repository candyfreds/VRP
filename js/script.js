// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  

$(".about").click(function(){
    $(".knob_container").css('transform', 'rotate(90deg)');
});

$(".parts").click(function(){
    $(".knob_container").css('transform', 'rotate(180deg)');
});

$(".listen").click(function(){
    $(".knob_container").css('transform', 'rotate(0deg)');
});











// End of Your Code . Don't delete that line below!!
});