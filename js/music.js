
// Liste des musiques simulée. Dans un vrai cas, on peut les lister via serveur.
// Nous allons ajouter un mock, car le dossier /music vient d'être créé.
let songs = [
    { title: "Bienvenue sur Havila Music", file: "demo.mp3" }
];

let currentSongIndex = 0;
let isPlaying = false;
let audio = document.getElementById("audio-player");
let playBtn = document.getElementById("play-btn");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let titleEl = document.getElementById("now-playing-title");
let seekSlider = document.getElementById("seek-slider");
let currentTimeEl = document.getElementById("current-time");
let durationEl = document.getElementById("duration");
let playlistEl = document.getElementById("playlist");

// Fonction pour récupérer la liste des fichiers du dossier "music"
// Comme JS client-side ne peut pas lire le dossier local directement sans serveur,
// On va définir dynamiquement les chansons trouvées si possible ou laisser l'utilisateur ajouter via le code HTML.
// Pour cet exemple, on génère la playlist avec ce qu'on a.

function initPlaylist(songList) {
    songs = songList.length > 0 ? songList : [{ title: "Aucune musique trouvée", file: "" }];
    playlistEl.innerHTML = "";
    songs.forEach((song, index) => {
        let li = document.createElement("li");
        li.textContent = song.title;
        li.onclick = () => loadSong(index);
        playlistEl.appendChild(li);
    });
    if (songs[0].file !== "") {
        loadSong(0, false);
    }
}

function loadSong(index, play=true) {
    if(songs[index].file === "") return;
    currentSongIndex = index;
    let song = songs[index];
    audio.src = "music/" + song.file;
    titleEl.textContent = song.title;
    
    // update active class
    let items = playlistEl.querySelectorAll("li");
    items.forEach(el => el.classList.remove("active"));
    if(items[index]) items[index].classList.add("active");

    if(play) {
        audio.play().then(() => {
            isPlaying = true;
            playBtn.textContent = "⏸";
        }).catch(e => console.error("Play error:", e));
    }
}

playBtn.addEventListener("click", () => {
    if(!audio.src) return;
    if(isPlaying) {
        audio.pause();
        playBtn.textContent = "▶";
    } else {
        audio.play();
        playBtn.textContent = "⏸";
    }
    isPlaying = !isPlaying;
});

nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

audio.addEventListener("timeupdate", () => {
    let pos = audio.currentTime * (100 / audio.duration);
    if (!isNaN(pos)) {
        seekSlider.value = pos;
    }
    currentTimeEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener("ended", () => {
    nextBtn.click();
});

seekSlider.addEventListener("change", () => {
    let time = audio.duration * (seekSlider.value / 100);
    audio.currentTime = time;
});

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    if (sec < 10) sec = "0" + sec;
    return min + ":" + sec;
}

// Fetch list of music files via an API endpoint or directory listing if server allows
fetch("music/")
    .then(r => r.text())
    .then(html => {
        // Very basic parsing for Apache/Nginx directory listing
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, "text/html");
        let links = Array.from(doc.querySelectorAll("a"));
        let files = links.map(a => a.href.split("/").pop()).filter(f => f.endsWith(".mp3") || f.endsWith(".wav") || f.endsWith(".ogg") || f.endsWith(".m4a") || f.endsWith(".flac"));
        
        let loadedSongs = files.map(f => ({ title: decodeURIComponent(f).replace(/\.[^/.]+$/, ""), file: f }));
        if(loadedSongs.length > 0) {
            initPlaylist(loadedSongs);
        } else {
            initPlaylist([{ title: "Placez vos fichiers mp3 dans le dossier music", file: "" }]);
        }
    })
    .catch(err => {
        console.log("Could not fetch music dir automatically, using fallback.");
        initPlaylist([{ title: "Placez vos fichiers mp3 dans le dossier music", file: "" }]);
    });
