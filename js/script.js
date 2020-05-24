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


    $(document).ready(function(){
        $('#show').hide()
        $('#click').on('click', function () {
            $('#show').toggle(1000);
        });
    });



    $(document).ready(function(){
        $('#show_2').hide()
        $('#click_2').on('click', function () {
            $('#show_2').toggle(1000);
        });
    });



    $(document).ready(function(){
        $('#show_3').hide()
        $('#click_3').on('click', function () {
            $('#show_3').toggle(1000);
        });
    });



    $(document).ready(function(){
        $('#show_4').hide()
        $('#click_4').on('click', function () {
            $('#show_4').toggle(1000);
        });
    });



















// End of Your Code . Don't delete that line below!!
});