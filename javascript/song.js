const playPauseButton = document.querySelector(".song-playButton");
const progressBar = document.getElementById("seekbar");
const durationStart = document.getElementById("duration-start");
const nextSong = document.getElementById("next-song");
const PrevSong = document.getElementById("prev-song");
const durationEnd = document.getElementById("duration-end");
const audio = new Audio("/assets/onedance.mp3");

const songName = document.getElementById("song-name");
const songInfo = document.getElementById("song-info");
const songCover = document.getElementById("song-cover");

const allPlaylistsItems = document.querySelectorAll(".top-playlists-item");
let currentSongData = {
  name: "One Dance",
  image: "https://i.scdn.co/image/ab67616d000048519416ed64daf84936d89e671c",
  about: "Drake, Wizkid, Kyla",
  song: "/assets/onedance.mp3",
};
let songHistory = [currentSongData];

async function setAudioTime() {
  const currentMinutes = Math.floor(audio.currentTime / 60);
  const currentSeconds = Math.floor(audio.currentTime % 60);
  durationStart.innerText = `${currentMinutes}:${
    currentSeconds < 10 ? "0" : ""
  }${currentSeconds}`;

  const totalMinutes = Math.floor(audio.duration / 60);
  const totalSeconds = Math.floor(audio.duration % 60);
  durationEnd.innerText = `${totalMinutes || "0"}:${
    totalSeconds < 10 ? "0" : ""
  }${totalSeconds || "00"}`;
}
function setSongData(data) {
  songName.innerText = data.name;
  songCover.src = data.image;
  songInfo.innerText = data.about;
  audio.src = data.song;
}

const colors = [
  "#142c67",
  "#47180b",
  "#415a4c",
  "#47180b",
  "#959192",
  "#959192",
];
allPlaylistsItems.forEach((item, ind) => {
  const colorHead = document.querySelector(".HsbczDqu9qjcYr7EIdHR");
  item.addEventListener("mouseenter", function () {
    colorHead.style.backgroundColor = colors[ind];
  });
  item.addEventListener("mouseleave", function () {
    colorHead.style.backgroundColor = "rgb(104, 120, 160)";
  });
  item.addEventListener("click", function () {
    const spanTxt = item.querySelector("span").innerText;
    switch (spanTxt) {
      case "Karan Aujla":
        currentSongData = {
          image: item.querySelector("img").src,
          name: "Bachke Bachke",
          about: item.querySelector("span").innerText,
          song: "/assets/bachke.mp3",
        };
        setSongData(currentSongData);
        songHistory.push(currentSongData);
        break;
      case "Zaeden":
        currentSongData = {
          image: item.querySelector("img").src,
          name: "Dooriyan",
          about: item.querySelector("span").innerText,
          song: "/assets/Dooriyan.mp3",
        };
        setSongData(currentSongData);
        songHistory.push(currentSongData);
        break;
      case "Back To You":
        currentSongData = {
          image: item.querySelector("img").src,
          name: "Back To You",
          about: "Selena Gomez",
          song: "/assets/backtoyou.mp3",
        };
        setSongData(currentSongData);
        songHistory.push(currentSongData);
        break;
      case "Rockstar":
        currentSongData = {
          image: item.querySelector("img").src,
          name: "Aur ho",
          about: "Mohit Chauhan, Alma Ferovic, Rockstart",
          song: "/assets/aurho.mp3",
        };
        setSongData(currentSongData);
        songHistory.push(currentSongData);
        break;
      case "Let Her Go":
        currentSongData = {
          image: item.querySelector("img").src,
          name: "Let Her Go",
          about: "Passenger",
          song: "/assets/lethergo.mp3",
        };
        setSongData(currentSongData);
        songHistory.push(currentSongData);
        break;
      case "All Out 90's Hindi":
        currentSongData = {
          image: item.querySelector("img").src,
          name: "Hoshwalon Ko Khabar Kya",
          about: "Jagjit Singh - All Out 90's Hindi",
          song: "/assets/hoshwalo.mp3",
        };
        setSongData(currentSongData);
        songHistory.push(currentSongData);
        break;

      default:
        break;
    }
    audio.addEventListener("loadeddata", function () {
      setAudioTime();
    });
    PrevSong.classList.remove("disabled");
    progressBar.value = 0; // Reset progress bar to 0
    playPauseSong();
  });
});
audio.addEventListener("loadeddata", function () {
  setAudioTime();
});
let isDragging = false;

function playPauseSong() {
  if (audio.paused) {
    playPauseButton.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    audio.play();
  } else {
    playPauseButton.innerHTML = `<i class="fa-solid fa-play"></i>`;
    audio.pause();
  }
}
playPauseButton.addEventListener("click", playPauseSong);

audio.addEventListener("timeupdate", function () {
  const percentage = (audio.currentTime / audio.duration) * 100;
  if (!isDragging) {
    progressBar.value = percentage;
  }
  setAudioTime();
});

progressBar.addEventListener("mousedown", function (e) {
  isDragging = true;
  updateProgressBar(e);
});

document.addEventListener("mousemove", function (e) {
  if (isDragging) {
    updateProgressBar(e);
  }
});

document.addEventListener("mouseup", function () {
  isDragging = false;
});

function updateProgressBar(e) {
  const clickX = e.clientX - progressBar.getBoundingClientRect().left;
  const percentage = (clickX / progressBar.offsetWidth) * 100;
  progressBar.value = percentage;
  const seekTime = (percentage / 100) * audio.duration;
  audio.currentTime = seekTime;
}

function playSelSong(name) {
  console.log(name)
  libraryData.forEach((data)=>{
    if(data.name == name){
      currentSongData = data;
      return;
    }
  })
  songName.innerText = currentSongData.name;
  songCover.src = currentSongData.image;
  songInfo.innerText = currentSongData.about;
  audio.src = currentSongData.song;
  playPauseSong();
}

function playNextSong() {
  const ind = songHistory.indexOf(currentSongData);
  const nextInd = ind + 1 < songHistory.length ? ind + 1 : 0;

  if (nextInd === 0) {
    // If the next index is 0, it means the songHistory is complete, play from library
    const libraryIndex = libraryData.indexOf(currentSongData);
    const nextLibraryInd =
      libraryIndex + 1 < libraryData.length ? libraryIndex + 1 : 0;
    currentSongData = libraryData[nextLibraryInd];
  } else {
    currentSongData = songHistory[nextInd];
  }

  setSongData(currentSongData);
  songHistory.push(currentSongData);
  playPauseSong();
  PrevSong.classList.remove("disabled");
}
audio.addEventListener("ended", function () {
  playNextSong();
});

nextSong.addEventListener("click", playNextSong);

PrevSong.addEventListener("click", function () {
  const ind = songHistory.indexOf(currentSongData);
  const prevInd = ind - 1 < 0 ? libraryData.length - 1 : ind - 1;
  if (prevInd <= 0) {
    PrevSong.classList.add("disabled");
  }
  currentSongData = songHistory[prevInd];
  setSongData(currentSongData);
  playPauseSong();
});

//! Volume
const volume = document.getElementById("volume");
volume.addEventListener("click", function () {
  if (volume.classList.contains("fa-volume-xmark")) {
    volume.classList.add("fa-volume-high");
    volume.classList.remove("fa-volume-xmark");
  } else {
    volume.classList.remove("fa-volume-high");
    volume.classList.add("fa-volume-xmark");
  }
  audio.muted = !audio.muted;
});

const volumeBar = document.getElementById("volume-seekbar");
let isVolDragging = false;

// Function to update volume based on seekbar value
function updateVolume() {
  audio.volume = volumeBar.value;
}

// Add event listeners for mouse events
volumeBar.addEventListener("mousedown", function () {
  isVolDragging = true;
});

document.addEventListener("mouseup", function () {
  if (isVolDragging) {
    isVolDragging = false;
    updateVolume();
  }
});

document.addEventListener("mousemove", function (event) {
  if (isVolDragging) {
    // Calculate the relative position of the mouse within the progress bar
    const boundingRect = volumeBar.getBoundingClientRect();
    const relativeX = event.clientX - boundingRect.left;
    const progressRatio = relativeX / boundingRect.width;

    // Update the value of the progress bar and the audio volume
    volumeBar.value = progressRatio;
    updateVolume();
  }
});
