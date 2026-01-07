// Playlist data
let songs = [
  {
    title: "Song One",
    artist: "Artist A",
    album: "Album X",
    path: "songs/song1.mp3"
  },
  {
    title: "Song Two",
    artist: "Artist B",
    album: "Album Y",
    path: "songs/song2.mp3"
  },
  {
    title: "Song Three",
    artist: "Artist C",
    album: "Album Z",
    path: "songs/song3.mp3"
  }
];

let audio = document.getElementById("audio");
let title = document.getElementById("song-title");
let info = document.getElementById("song-info");
let progress = document.getElementById("progress");
let playlist = document.getElementById("playlist");

let currentSong = 0;

// Load song
function loadSong(index) {
  currentSong = index;
  audio.src = songs[index].path;
  title.innerText = songs[index].title;
  info.innerText = songs[index].artist + " | " + songs[index].album;
  audio.play();
}

// Play / Pause
function playPause() {
  if (audio.paused) audio.play();
  else audio.pause();
}

// Next & Previous
function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
}

// Progress bar update
audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

// Seek
progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// Volume
function setVolume(value) {
  audio.volume = value;
}

// Build playlist
songs.forEach((song, index) => {
  let li = document.createElement("li");
  li.innerText = song.title;
  li.onclick = () => loadSong(index);
  playlist.appendChild(li);
});

// Load first song
loadSong(0);
