const img_array = document.getElementsByClassName("image");

for (var i = 0; i < img_array.length; i++) {
  img_array[i].style.top = Math.floor(Math.random()*6000)+"px";
  img_array[i].style.left = Math.floor(Math.random()*100)+"vw";
}
