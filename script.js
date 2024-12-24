let progress = document.body.querySelector("#progress");
let song = document.body.querySelector("#song");
let playBtn = document.body.querySelector("#play");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
playBtn.addEventListener("click", () => {
  if (playBtn.classList.contains("fa-pause")) {
    song.pause();
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
  } else if (playBtn.classList.contains("fa-play")) {
    song.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
  }
});
song.addEventListener('timeupdate',()=>{
    progress.value = song.currentTime
})
if(!song.play()){
    song.play();
}
progress.onchange = function(){
    song.currentTime = progress.value
}