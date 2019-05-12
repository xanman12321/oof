$("body").mousemove(function(e) {
    var d = document.getElementById('yeetus');
    d.style.position = "absolute";
    d.style.left = e.pageX+'px';
    d.style.top = e.pageY+'px';
})

$("body").click(function(e) {
  var audio = new Audio('  https://www.myinstants.com/media/sounds/roblox-death-sound_1.mp3');
  audio.play();
})
