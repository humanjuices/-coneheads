const img_array = document.getElementsByClassName("image");

for (var i = 0; i < img_array.length; i++) {
  img_array[i].style.top = Math.floor(Math.random()*6000)+"px";
  img_array[i].style.left = Math.floor(Math.random()*100)+"vw";
}

// document.getElementById("safety-first-button").addEventListener("click", loadAudio());

function loadAudio() {

  console.log("Entered loadAudio()")

  audio_module = document.createElement("audio");
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
