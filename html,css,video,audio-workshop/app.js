const otbackImg = document.getElementById("otback");
otbackImg.addEventListener("load", function () {
  console.log("Image uploaded from local");
});

const otbAudio = document.getElementById("otbaudio");

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const skipBack = document.getElementById("skipBack");
const skipFor = document.getElementById("skipFor");

playBtn.addEventListener("click", function () {
  otbAudio.play();
});

pauseBtn.addEventListener("click", function () {
  otbAudio.pause();
});

stopBtn.addEventListener("click", function () {
  otbAudio.pause();
  otbAudio.currentTime = 0;
});

skipBack.addEventListener("click", function () {
  otbAudio.currentTime = otbAudio.currentTime - 5;
});

skipFor.addEventListener("click", function () {
  otbAudio.currentTime = otbAudio.currentTime + 5;
});
