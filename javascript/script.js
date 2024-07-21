const navIcons = document.querySelectorAll("#nav-icons");
const mainPageHeading = document.getElementById("main-page-heading");
const searchBar = document.getElementById("search-bar");
const createPlaylist = document.getElementById("create-playlist");
const playlists = document.getElementById("playlists");
const searchIcon = document.getElementById("search-icon");
const songDiv = document.getElementById("song-div");
const signUpFree = document.getElementById("signUp-for-free");
const searchInput = document.getElementById("playlistId");
const topPlaylists = document.getElementById("top-playlists");
const changableHeading = document.getElementById("changable-heading");
const madeForUsers = document.querySelectorAll("#made-for-user");

if (localStorage.getItem("userIsLoggedIn")) {
  //! Setting nav icons
  navIcons.forEach((icon) => {
    icon.innerHTML = `<i class="fa-solid fa-bell"></i>
    <i class="fa-solid fa-user"></i>
    <i class="fa-solid fa-right-from-bracket" id="logout"></i>`;
  });

  mainPageHeading.style.display = "none";

  //! logging out
  const logOut = document.querySelectorAll("#logout");
  logOut.forEach((item) => {
    item.addEventListener("click", function () {
      localStorage.removeItem("userIsLoggedIn");
      localStorage.removeItem("currentUserEmail");
      window.location.reload();
    });
  });

  //! library
  createPlaylist.style.display = "none";
  searchIcon.addEventListener("click", function () {
    const searchInnerBar = document.getElementById("search-inner-bar");

    if (searchInnerBar.classList.contains("search-bar-inner-off")) {
      searchInput.style.display = "block";
      searchInput.focus();
      searchInnerBar.classList.remove("search-bar-inner-off");
      searchInnerBar.classList.add("search-bar-inner-active");
    } else {
      searchInnerBar.classList.remove("search-bar-inner-active");
      searchInnerBar.classList.add("search-bar-inner-off");
      searchInput.style.display = "none";
    }
  });

  //! Bottom Frame
  signUpFree.style.display = "none";
} else {
  //! Setting nav icons
  navIcons.forEach((icon) => {
    icon.innerHTML = `<a href="./signup.html" id="signup"> Sign up</a>
      <a href="./login.html" id="login"> Log in</a>`;
  });

  //! setting left bar
  searchBar.style.display = "none";
  playlists.style.display = "none";
  madeForUsers.forEach((user, ind) => {
    if (ind != 1) {
      user.style.display = "none";
    } else {
      changableHeading.innerHTML = "Spotify Playlists";
    }
  });

  //! showing playlists
  topPlaylists.style.display = "none";

  //! Bottom Frame
  songDiv.style.display = "none";
}

//! Changing route
const home = document.getElementById("right-home");
const search = document.getElementById("right-search");

document.getElementById("home").addEventListener("click", function () {
  home.style.display = "block";
  search.style.display = "none";
});
document.getElementById("search").addEventListener("click", function () {
  home.style.display = "none";
  search.style.display = "block";
});

// make full screen
const expand = document.getElementById("expand");
const expanded = document.querySelector(".expanded");
const fullscreenElement = document.getElementById("yourFullscreenElement");
// Function to enter fullscreen
function enterFullscreen() {
  if (fullscreenElement.requestFullscreen) {
    fullscreenElement.requestFullscreen();
  } else if (fullscreenElement.mozRequestFullScreen) {
    // Firefox
    fullscreenElement.mozRequestFullScreen();
  } else if (fullscreenElement.webkitRequestFullscreen) {
    // Chrome, Safari and Opera
    fullscreenElement.webkitRequestFullscreen();
  } else if (fullscreenElement.msRequestFullscreen) {
    // IE/Edge
    fullscreenElement.msRequestFullscreen();
  }
}

// Function to exit fullscreen
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    // Chrome, Safari and Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // IE/Edge
    document.msExitFullscreen();
  }
}
function getOut() {
  exitFullscreen();
  expanded.style.display = "none";
}
expand.addEventListener("click", function () {
  expanded.innerHTML = `
    <img src=${currentSongData.image} alt="notfound">
      <span>${currentSongData.name}</span>
      <p>${currentSongData.about}</p>
      <button onclick="getOut()">Close</button>`;
  if (document.fullscreenElement) {
    // If already in fullscreen, exit fullscreen
    getOut();
  } else {
    expanded.style.display = "block";
    enterFullscreen();
  }
});


//! Navbar 
const rightHome = document.getElementById("right-home");

rightHome.addEventListener("scroll", function () {
  const colorHead = document.getElementById("color-heading");
  const headerImg = document.querySelector(".bgImg");
  if (rightHome.scrollTop >= 100) {
    const color = document.querySelector(".HsbczDqu9qjcYr7EIdHR");
    const computedStyle = window.getComputedStyle(color);
    headerImg.style.opacity = 1;
    colorHead.style.backgroundColor = computedStyle.backgroundColor;
  }else{
    headerImg.style.opacity = 0;
    colorHead.style.backgroundColor = "transparent";
  }
});