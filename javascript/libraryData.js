const libraryData = [
  {
    image:
      "https://yt3.googleusercontent.com/7Q7CJiWyJq9QTsUFTPBAspAj7bnFiMeK1AJ_EtXjfL0ewOcV1DtPKZyJN03nsmsefE3EixwFHg=s900-c-k-c0x00ffffff-no-rj",
    name: "Vegout",
    about: "playlist · 58 songs",
    isArtist: false,
    song: "/assets/aurho.mp3",
  },
  {
    image:
      "https://www.spotlistr.com/_next/static/images/example-grid-0b5284e054593c92985bead4380c8581.jpg",
    name: "On Repeat",
    about: "playlist · 20 songs",
    isArtist: false,
    song: "/assets/bachke.mp3",
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/84/a5/4c/84a54c06-98bf-75fc-f762-3154f3cfa925/8809550034532.jpg/400x400bb.jpg",
    name: "Opacarophile",
    about: "playlist · Nandini",
    isArtist: false,
    song: "/assets/backtoyou.mp3",
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b2738328dfd69f044c03aa740a8b",
    name: "Kurt Hugo Schneider",
    about: "Artist",
    isArtist: true,
    song: "/assets/lethergo.mp3",
  },
  {
    image:
      "https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg",
    name: "Liked songs",
    about: "playlist · 86 songs",
    isArtist: false,
    song: "/assets/Dooriyan.mp3",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/08/Justin_Bieber_-_Justice.png",
    name: "Justice",
    about: "playlist · 16 songs",
    isArtist: false,
    song: "/assets/onedance.mp3",
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b2736cb77fdd20d0377bc978a380",
    name: "Tory Lanez",
    about: "Artist",
    isArtist: true,
    song: "/assets/tory.mp3",
  },
  {
    image:
      "https://w0.peakpx.com/wallpaper/333/1009/HD-wallpaper-juli-collection-on-arijit-singh-arijit-singh-new-best-music-artists-alone-graphy-thumbnail.jpg",
    name: "Bollywood Central",
    about: "playlist · 79 songs",
    isArtist: false,
    song: "/assets/backtoyou.mp3",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMTIyZjFjODMtNzMwMi00MTk1LWJmNmQtMzk5NzM5MWM1NmMyXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_QL75_UX190_CR0,46,190,190_.jpg",
    name: "Sunflower🌻",
    about: "playlist · 50 songs",
    isArtist: false,
    song: "/assets/lethergo.mp3",
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5",
    name: "God Plan",
    about: "playlist · 58 songs",
    isArtist: false,
    song: "/assets/bachke.mp3",
  },
];
if (localStorage.getItem("userIsLoggedIn")) {
  //! setting playlist clutter
  let clutter = ``;
  libraryData.forEach((data, ind) => {
    clutter += `<div class="playlist-item ${
      data.isArtist && "artist"
    }" onclick="playSelSong('${data.name}')">
    <img
      src=${data?.image}
      alt="not found"
    />
    <div>
      <span>${data.name}</span>
      <span>${data.about}</span>
    </div>
  </div>`;
  });
  playlists.innerHTML = clutter;
}

function searchPlaylist() {
  const input = searchInput.value.toLowerCase();
  const searchResults = libraryData.filter((data) =>
    data.name.toLowerCase().includes(input)
  );

  let clutter = ``;
  searchResults.forEach((data) => {
    clutter += `<div class="playlist-item ${
      data.isArtist && "artist"
    }" onclick="playSelSong('${data.name}')">
        <img
          src=${data?.image}
          alt="not found"
        />
        <div>
          <span>${data.name}</span>
          <span>${data.about}</span>
        </div>
      </div>`;
  });

  playlists.innerHTML = clutter;
}

function sortPlaylist(param) {
  if (param == "playlists") {
    const searchResults = libraryData.filter((data) => !data.isArtist);

    let clutter = ``;
    searchResults.forEach((data) => {
      clutter += `<div class="playlist-item ${
        data.isArtist && "artist"
      }" onclick="playSelSong('${data.name}')">
        <img
          src=${data?.image}
          alt="not found"
        />
        <div>
          <span>${data.name}</span>
          <span>${data.about}</span>
        </div>
      </div>`;
    });
    playlists.innerHTML = clutter;
  } else if (param == "artists") {
    const searchResults = libraryData.filter((data) => data.isArtist);

    let clutter = ``;
    searchResults.forEach((data) => {
      clutter += `<div class="playlist-item ${
        data.isArtist && "artist"
      }" onclick="playSelSong('${data.name}')">
        <img
          src=${data?.image}
          alt="not found"
        />
        <div>
          <span>${data.name}</span>
          <span>${data.about}</span>
        </div>
      </div>`;
    });
    playlists.innerHTML = clutter;
  } else {
    let clutter = ``;
    libraryData.forEach((data) => {
      clutter += `<div class="playlist-item ${
        data.isArtist && "artist"
      }" onclick="playSelSong('${data.name}')">
          <img
            src=${data?.image}
            alt="not found"
          />
          <div>
            <span>${data.name}</span>
            <span>${data.about}</span>
          </div>
        </div>`;
    });
    playlists.innerHTML = clutter;
  }
}
