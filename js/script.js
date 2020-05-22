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
    $(".record").toggleClass("recordplay");
    
 });


$(document).ready(function(){
    $(".type").get(0).play();
});


var track = document.getElementById('static');

var controlBtn = document.getElementById('play');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});

















// End of Your Code . Don't delete that line below!!
});