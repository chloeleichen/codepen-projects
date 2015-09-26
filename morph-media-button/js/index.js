var buttonText = document.getElementById("button-text"),
    animationToPlay = document.getElementById("animation-to-play"),
    animationToBlue1 = document.getElementById("animation-to-blue1"),
    animationToBlue2 = document.getElementById("animation-to-blue2"),

    animationToStop = document.getElementById("animation-to-stop"),
    animationToRed1 = document.getElementById("animation-to-red1");
    animationToRed2 = document.getElementById("animation-to-red2");


button.addEventListener('click', function() {
  
  if (button.classList.contains("saved")) {
    button.classList.remove("saved");
    animationToStop.beginElement();
    animationToRed1.beginElement();
    animationToRed2.beginElement();
    // buttonText.innerHTML = "Save";
  } else {
    button.classList.add("saved");
    animationToPlay.beginElement();
    animationToBlue1.beginElement();
    animationToBlue2.beginElement();
    //buttonText.innerHTML = "Saved!";
  }
  
}, false);