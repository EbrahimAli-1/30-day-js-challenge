window.addEventListener("keydown", pressTheKey);

function pressTheKey(pressed) {
  let sound = document.querySelector(`audio[key-code="${pressed.keyCode}"]`);
  if (sound == null) return;

  sound.currentTime = 0;
  sound.play();

  let key = document.querySelector(`div[key-code="${pressed.keyCode}"]`);
  key.classList.add("press");
}


let keys = document.querySelectorAll(".key");

keys.forEach( function (key) {
  key.addEventListener("transitionend", (e) => {
    e.target.classList.remove("press");
  })

})
