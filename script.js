let audio = document.querySelector("#song");
let playbutton = document.getElementById("playbutton");
let shufflebutton = document.getElementById("shufflebutton");
let forwardbutton = document.getElementById("forwardbutton");
let backbutton = document.getElementById("backbutton");
let listbutton = document.getElementById("listbutton");
let songcover = document.getElementById("songcover");
let slider = document.getElementById("customRange2");

let currentsong = 0;
let duration;
slider.min = 0;
slider.max = audio.duration;
const songlist = [
    {
        img: './images/apocalypse.jpg',
        name: 'Apocalypse',
        music: 'music/apocalypse.mp3'
    },
    {
        img: './images/blinding_lights.png',
        name: 'Blinding LIghts',
        music: 'music/blinding_lights.mp3'
    },
    {
        img: './images/everglow.png',
        name: 'Everglow',
        music: 'music/everglow.mp3'
    },
    {
        img: './images/lies.jpg',
        name: 'Lies',
        music: 'music/lies.mp3'
    },
    {
        img: './images/old_town_road.jpg',
        name: 'Old Town Road',
        music: 'music/old_town_road.mp3'
    },
    {
        img: './images/save_your_tears.png',
        name: 'Save Your Tears',
        music: 'music/save_your_tears.mp3'
    },
    {
        img: './images/spirits.jpg',
        name: 'Spirits',
        music: 'music/spirits.mp3'
    }
]

setInterval(setUpdate, 1000);

function shuffleArr(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
}

playbutton.addEventListener("click", () => {
    if (audio.paused == true) {
        audio.play();
    }
    else {
        audio.pause();
    }
    
    duration = audio.duration;
    slider.max = duration;
});

backbutton.addEventListener("click", () => {
    currentsong = currentsong - 1;
    if (currentsong == -1) currentsong = 6;

    audio.src = songlist[currentsong].music;
    songcover.src = songlist[currentsong].img;
    duration = audio.duration;
    slider.max = duration;
    slider.value = 0;
    audio.play();
});

forwardbutton.addEventListener("click", () => {
    currentsong = currentsong + 1;
    if (currentsong == 7) currentsong = 0;

    audio.src = songlist[currentsong].music;
    songcover.src = songlist[currentsong].img;
    duration = audio.duration;
    slider.max = duration;
    slider.value = 0;
    audio.play();
});

shufflebutton.addEventListener("click", () => {
    shuffleArr(songlist);
    currentsong = 0;
    audio.src = songlist[currentsong].music;
    songcover.src = songlist[currentsong].img;
    duration = audio.duration;
    slider.max = duration;
    slider.value = 0;
    audio.play();
});


slider.addEventListener("click", () => {
    audio.currentTime = slider.value;
})

function setUpdate() {
    let current = audio.currentTime;
    slider.value = current;
}