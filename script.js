const img_array = document.getElementsByClassName("image");

for (var i = 0; i < img_array.length; i++) {

  var top = Math.floor(Math.random()*6000)-500;
  var left = Math.floor(Math.random()*90)-10;

  img_array[i].style.top = top+"px";
  img_array[i].style.left = left+"vw";
}

// document.getElementById("safety-first-button").addEventListener("click", loadAudio());

function loadAudio() {

  console.log("Entered loadAudio()")

  var audio_module = document.createElement("audio");
  audio_module.src = "audio/musictoears.mp3";
  // audio_module.controls = 'controls autoplay';
  audio_module.setAttribute("preload", "auto");
  audio_module.setAttribute("controls", "autoplay");
  audio_module.style.display = "none";
  audio_module.type = 'audio/mp3';

  document.body.appendChild(audio_module);

  audio_module.play();

  document.getElementById("safety-first-button").style.display = "none";
}
