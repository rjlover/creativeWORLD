
const music = document.querySelector('audio');
const img = document.querySelector('img');
const playAndPause = document.getElementById('play');
const previousSong = document.getElementById('prev');
const nextSong = document.getElementById('next');
const songName = document.getElementById('song_name');
const artistName = document.getElementById('artist_name');
isplaying = false;
let songIndex = 0;

const songsList = [
    {
        name: "song1",
        title: "Nayan",
        artist: "Jubin Nautiyal"

    },
    {
        name: "song2",
        title: "Kamaal Karte Ho",
        artist: "Afsana Khan"

    },
    {
        name: "song3",
        title: "Teri Bhabhi",
        artist: "Neha Kakkar"

    },
    {
        name: "song4",
        title: "Woh Chaand",
        artist: "Vishal Mishra"

    },
    {
        name: "song5",
        title: "Shona Shona",
        artist: "Tony Kakkar"

    },
    {
        name: "song6",
        title: "Bewafa Tera ",
        artist: "Jubin Nautiyal"

    },
    {
        name: "song7",
        title: "Tu Mera Nahi",
        artist: "Amaal Mallik"

    }
];

playAndPause.addEventListener('click', () => {
    isplaying ? pause() : play();
})

function play() {
    isplaying = true;
    music.play();
    playAndPause.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
}

function pause() {
    isplaying = false;
    music.pause();
    playAndPause.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
}

function loadSong(songsList) {
    songName.textContent = songsList.title;
    artistName.textContent = songsList.artist;
    music.src = songsList.name + ".mp3";
    img.src = songsList.name + ".jpg";
}

nextSong.addEventListener('click', playNextSong);
previousSong.addEventListener('click', playPrevSong);

function playNextSong() {

    songIndex = (songIndex + 1) % songsList.length;       //songIndex++;
    loadSong(songsList[songIndex]);

    if (isplaying) {
        setTimeout(pause, 100);
        setTimeout(play, 1000);
    }
    // console.log(songIndex);
}
function playPrevSong() {

    songIndex = (songIndex - 1) % songsList.length;      // songIndex--;
    loadSong(songsList[songIndex]);

    if (isplaying) {
        setTimeout(pause, 100);
        setTimeout(play, 1000);
    }
    // console.log(songIndex);
}




//progress bar operation start now

let progressLine = document.getElementById('progress_line');
let progress = document.getElementById('progress');
let current_Time = document.getElementById('current_time');
const total_time = document.getElementById('total_time');


music.addEventListener('timeupdate', (event) => {
    // console.log(event);
    const { currentTime, duration } = event.target;   // or [event.srcElement]
    // console.log(currentTime);
    // console.log(duration);
    let progressTime = (currentTime / duration) * 100;  //return it, how much % it played at that perticular time
    // console.log(progressTime)
    progress.style.width = `${progressTime}%`;


    //   current and total duration control

    let currentMinute = Math.floor(currentTime / 60);
    let currentSecond = Math.floor(currentTime % 60);

    if (currentSecond < 10) {
        currentSecond = `0${currentSecond}`;
    }
    current_Time.innerHTML = `${currentMinute}:${currentSecond}`;


    const totalMinute = Math.floor(duration / 60);
    const totalSecond = Math.floor(duration % 60);

    if (duration) {
        total_time.innerHTML = `${totalMinute}:${totalSecond}`;
    }
});

music.addEventListener('ended', playNextSong);     //after end the playing song the next song is play automatically.


// progressbar click functionality
progressLine.addEventListener('click', (event) => {
    console.log(event);

    //Object destructuring()
    const { duration } = music;  // we can also write [const { currentTime, duration } = music;] or [const duration=music.duration];
    // console.log(duration);

    let move_progress = (event.offsetX / event.target.clientWidth) * duration;

    //The HTMLMediaElement interface's [currentTime] property specifies the current playback time in (seconds). Changing the value of[currentTime] seeks the media to the new time.

    music.currentTime = move_progress;

})




