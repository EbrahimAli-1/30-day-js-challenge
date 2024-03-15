let player = document.querySelector(".player");
let video = player.querySelector(".viewer");
let progress = player.querySelector(".progress");
let progressBar = player.querySelector(".progress__filled");
let toggle = player.querySelector(".toggle");
let skipButtons = player.querySelectorAll("[data-skip]");
let ranges = player.querySelectorAll(".player__slider");
let fullscreen = player.querySelector(".fullscreen");

function togglePlay() {
  if (video.paused) {
    video.play();
    toggle.textContent = "❚❚";
  } else {
    video.pause();
    toggle.textContent = "►";
  }
}

// function updateButton() {
//   const icon = this.paused ? '►' : '❚ ❚';
//   console.log(icon);
//   toggle.textContent = icon;
// }

function skip() {
  // console.log(+this.dataset.skip);
  video.currentTime += +this.dataset.skip;
}

function handleRangeUpdate() {
  console.log(this.value);
  video[this.name] = this.value;
}

function handleProgress() {
  progressBar.style.flexBasis = `${
    (video.currentTime / video.duration) * 100
  }%`;
}

function scrub(e) {
  let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listeners */
video.addEventListener("click", togglePlay);
// video.addEventListener("play", updateButton);
// video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((button) => button.addEventListener("click", skip));

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

fullscreen.addEventListener("click", () => {
  video.requestFullscreen();
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode == "70") {
    if (document.fullscreenElement) {
      video.webkitExitFullscreen();
    } else {
      video.requestFullscreen();
    }
  } else if (e.keyCode == "75" || e.keyCode == "32") {
    togglePlay();
  } else if (e.keyCode == "37") {
    video.currentTime += +skipButtons[0].dataset.skip;
  } else if (e.keyCode == "39") {
    video.currentTime += +skipButtons[1].dataset.skip;
  } 
});
