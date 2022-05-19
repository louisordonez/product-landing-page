function videoPlayback() {
  let video = document.getElementById("video");
  let icon = document.getElementById("icon");
  if (video.paused) {
    video.play();
    icon.className = "fa-regular fa-circle-pause";
  } else {
    video.pause();
    icon.className = "fa-regular fa-circle-play";
  }
}
