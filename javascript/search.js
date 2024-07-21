const searchSongsData = [
  {
    imgLink:
      "https://th.bing.com/th/id/OIP.jcbxVp-YocFxNA_wHQ7d_gHaEK?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    name: "Pakki kanak",
  },
  {
    imgLink: 'https://th.bing.com/th/id/OIP.Ksb_a2Fmg48oE17NPQM71QAAAA?rs=1&pid=ImgDetMain',
    name: 'Unholy'
  },
  {
    imgLink: 'https://th.bing.com/th/id/R.b165a1001b64ed484ddef2a705cfd207?rik=XLoypKnzV%2fWkkw&riu=http%3a%2f%2fwww.lyricsmint.com%2fwp-content%2fuploads%2f2018%2f08%2fbillian-billian-lyrics-guri.jpg&ehk=HOw34RAbDkhlMJuf7cy19%2bAS1ZB37jrjUcf8Jo3FVWQ%3d&risl=&pid=ImgRaw&r=0',
    name: 'Billian billian'
  },
  {
    imgLink: 'https://i.ytimg.com/vi/T0FA-3YGH38/maxresdefault.jpg',
    name: 'Taare'
  },
  {
    imgLink: 'https://i.ytimg.com/vi/xgIzvJ0rIhE/maxresdefault.jpg',
    name: 'Badmasi'
  },
  {
    imgLink: 'https://lyricsplaylist.com/wp-content/uploads/2020/12/pardha.jpeg',
    name: 'Parada'
  },
  {
    imgLink: 'https://i.ytimg.com/vi/F2Q5FC7Xouc/maxresdefault.jpg',
    name: 'Lehnga'
  },
  {
    imgLink: 'https://th.bing.com/th/id/R.b449738a12414943005f006f2a1ca8b4?rik=NZl9XiRPgWsWdQ&riu=http%3a%2f%2fi3.ytimg.com%2fvi%2frv9qC2mMRjo%2fmaxresdefault.jpg&ehk=D1gkIUnmCTmH%2bbFdWTfPA15QR9HwzG2QXFi2wto%2bQH4%3d&risl=&pid=ImgRaw&r=0',
    name: 'Boss'
  },
  {
    imgLink: 'https://lyricsraag.com/wp-content/uploads/2019/03/jkyjmxyreea.jpg',
    name: 'Viah'
  },
  {
    imgLink: 'https://i0.wp.com/99lyricstore.com/wp-content/uploads/2022/03/naah-lyrics-jass-manak.jpg',
    name: 'Naah'
  },
];

const rightSearchSongs = document.getElementById("right-search-inner");
const showSearchSongsData = () => {
  let clutter = ``;
  searchSongsData.forEach((item) => {
    clutter += `
        <div class="search-item">
            <img src=${item.imgLink} alt="">
            <span>${item.name}</span>
          </div>
        `;
    rightSearchSongs.innerHTML = clutter;
  });
};
showSearchSongsData()