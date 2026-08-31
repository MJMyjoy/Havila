// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkiT7lW2Ru3H2abmr7otib1WRUKVaTrBs",
  authDomain: "biblia-app-b64bc.firebaseapp.com",
  projectId: "biblia-app-b64bc",
  storageBucket: "biblia-app-b64bc.firebasestorage.app",
  messagingSenderId: "772487508903",
  appId: "1:772487508903:web:9e960d92798f9206dffc82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




let db = null;
try {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    db = firebase.database();
} catch (e) {
    console.warn("Firebase n'est pas (bien) configuré. Les compteurs de lecture seront ignorés.");
}

// Fonction pour incrémenter le compteur
function incrementPlayCount(songTitle) {
    if (!db) return;
    try {
        let safeTitle = songTitle.replace(/[.#$\[\]]/g, "_"); // Firebase ne supporte pas certains caractères dans les clés
        let ref = db.ref('plays/' + safeTitle);
        
        // Utiliser une transaction pour incrémenter de façon sécurisée
        ref.transaction(function(currentPlays) {
            return (currentPlays || 0) + 1;
        });
    } catch (e) {
        console.error("Erreur Firebase:", e);
    }
}

let currentPlayCountRef = null;

// Fonction pour écouter le compteur
function listenToPlayCount(songTitle) {
    let playCountEl = document.getElementById("play-count");
    if (!db) {
        playCountEl.innerHTML = "▶ ?";
        return;
    }
    
    // Détacher l'ancien listener si existant
    if (currentPlayCountRef) {
        currentPlayCountRef.off();
    }
    
    try {
        let safeTitle = songTitle.replace(/[.#$\[\]]/g, "_");
        currentPlayCountRef = db.ref('plays/' + safeTitle);
        currentPlayCountRef.on('value', (snapshot) => {
            let count = snapshot.val() || 0;
            playCountEl.innerHTML = "▶ " + count;
        });
    } catch(e) {
        playCountEl.innerHTML = "▶ ?";
    }
}


let songs = [
    {
        "title": "Adona\u00ef - Majoie Miji",
        "file": "Adona\u00ef - Majoie Miji.flac"
    },
    {
        "title": "Assurance \u00e9ternelle - Majoie Miji",
        "file": "Assurance \u00e9ternelle - Majoie Miji.flac"
    },
    {
        "title": "Aujourd'hui - Majoie Miji",
        "file": "Aujourd'hui - Majoie Miji.flac"
    },
    {
        "title": "Aveu - Majoie Miji",
        "file": "Aveu - Majoie Miji.flac"
    },
    {
        "title": "Corban - Majoie Miji",
        "file": "Corban - Majoie Miji.flac"
    },
    {
        "title": "Dans sa pr\u00e9sence - Majoie Miji",
        "file": "Dans sa pr\u00e9sence - Majoie Miji.flac"
    },
    {
        "title": "D\u00e9j\u00e0 pli\u00e9e - Majoie Miji",
        "file": "D\u00e9j\u00e0 pli\u00e9e - Majoie Miji.flac"
    },
    {
        "title": "D\u00e9j\u00e0 pli\u00e9e [Remix] - Majoie Miji",
        "file": "D\u00e9j\u00e0 pli\u00e9e [Remix] - Majoie Miji.flac"
    },
    {
        "title": "Hozana - Majoie Miji",
        "file": "Hozana - Majoie Miji.flac"
    },
    {
        "title": "Hozana 2 - Majoie Miji",
        "file": "Hozana 2 - Majoie Miji.flac"
    },
    {
        "title": "Il r\u00e9alise nos r\u00eaves - Majoie Miji",
        "file": "Il r\u00e9alise nos r\u00eaves - Majoie Miji.flac"
    },
    {
        "title": "J'ai soif - Majoie Miji",
        "file": "J'ai soif - Majoie Miji.flac"
    },
    {
        "title": "Kabod - Majoie Miji",
        "file": "Kabod - Majoie Miji.flac"
    },
    {
        "title": "L'amour - Majoie Miji",
        "file": "L'amour - Majoie Miji.flac"
    },
    {
        "title": "L'amour [Higher Key] - Majoie Miji",
        "file": "L'amour [Higher Key] - Majoie Miji.flac"
    },
    {
        "title": "La moisson est grande - Majoie Miji",
        "file": "La moisson est grande - Majoie Miji.flac"
    },
    {
        "title": "La voix de mon c\u0153ur - Majoie Miji",
        "file": "La voix de mon c\u0153ur - Majoie Miji.flac"
    },
    {
        "title": "Le Fils de l'Homme - Majoie Miji",
        "file": "Le Fils de l'Homme - Majoie Miji.flac"
    },
    {
        "title": "Lui seul me suffit - Majoie Miji",
        "file": "Lui seul me suffit - Majoie Miji.flac"
    },
    {
        "title": "L\u00e0 haut - Majoie Miji",
        "file": "L\u00e0 haut - Majoie Miji.flac"
    },
    {
        "title": "Maintenant - Majoie Miji",
        "file": "Maintenant - Majoie Miji.flac"
    },
    {
        "title": "Next step - Majoie Miji",
        "file": "Next step - Majoie Miji.flac"
    },
    {
        "title": "No\u00ebl - Majoie Miji",
        "file": "No\u00ebl - Majoie Miji.flac"
    },
    {
        "title": "Oasis - Majoie Miji",
        "file": "Oasis - Majoie Miji.flac"
    },
    {
        "title": "Overnight - Majoie Miji",
        "file": "Overnight - Majoie Miji.flac"
    },
    {
        "title": "Pas 2 - Majoie Miji",
        "file": "Pas 2 - Majoie Miji.flac"
    },
    {
        "title": "Prunelle - Majoie Miji",
        "file": "Prunelle - Majoie Miji.flac"
    },
    {
        "title": "Quel r\u00e9gal - Majoie Miji",
        "file": "Quel r\u00e9gal - Majoie Miji.flac"
    },
    {
        "title": "Radieux - Majoie Miji",
        "file": "Radieux - Majoie Miji.flac"
    },
    {
        "title": "Ressuscit\u00e9 - Majoie Miji",
        "file": "Ressuscit\u00e9 - Majoie Miji.flac"
    },
    {
        "title": "Serene - Majoie Miji",
        "file": "Serene - Majoie Miji.flac"
    },
    {
        "title": "Shekina - Majoie Miji",
        "file": "Shekina - Majoie Miji.flac"
    },
    {
        "title": "Son amour - Majoie Miji",
        "file": "Son amour - Majoie Miji.flac"
    },
    {
        "title": "Un feu frais - Majoie Miji",
        "file": "Un feu frais - Majoie Miji.flac"
    },
    {
        "title": "\u00c0 la personne - Majoie Miji",
        "file": "\u00c0 la personne - Majoie Miji.flac"
    },
    {
        "title": "\u00c0 tes yeux - Majoie Miji",
        "file": "\u00c0 tes yeux - Majoie Miji.flac"
    }
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

function initPlaylist() {
    playlistEl.innerHTML = "";
    if(songs.length === 0) {
        let li = document.createElement("li");
        li.textContent = "Aucune musique trouvée";
        playlistEl.appendChild(li);
        return;
    }
    
    songs.forEach((song, index) => {
        let li = document.createElement("li");
        li.textContent = song.title;
        li.onclick = () => loadSong(index);
        playlistEl.appendChild(li);
    });
    
    // Load the first song without playing
    loadSong(0, false);
}


let isAudioLoading = false;

function setPlayBtnState() {
    if (isAudioLoading) {
        playBtn.innerHTML = '<span class="spinner"></span>';
    } else {
        playBtn.innerHTML = isPlaying ? "⏸" : "▶";
    }
}

function loadSong(index, play=true) {
    if(songs.length === 0 || songs[index].file === "") return;
    
    currentSongIndex = index;
    let song = songs[index];
    
    audio.src = "music/" + encodeURIComponent(song.file).replace(/%20/g, " ");
    titleEl.textContent = song.title;
    
    // Update active class
    let items = playlistEl.querySelectorAll("li");
    items.forEach(el => el.classList.remove("active"));
    if(items[index]) items[index].classList.add("active");

    // Listen to Firebase count
    if (typeof listenToPlayCount === 'function') {
        listenToPlayCount(song.title);
    }

    if(play) {
        isAudioLoading = true;
        setPlayBtnState();
        let playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                isPlaying = true;
                isAudioLoading = false;
                setPlayBtnState();
                
                // Incrémenter le compteur au moment où la musique commence vraiment
                if (typeof incrementPlayCount === 'function') {
                    incrementPlayCount(song.title);
                }
            }).catch(e => {
                console.error("Play error:", e);
                isAudioLoading = false;
                setPlayBtnState();
            });
        }
    } else {
        isPlaying = false;
        isAudioLoading = false;
        setPlayBtnState();
    }
}


playBtn.addEventListener("click", () => {
    if(!audio.src || isAudioLoading) return; // Empêcher le clic pendant le chargement
    if(isPlaying) {
        audio.pause();
        isPlaying = false;
        setPlayBtnState();
    } else {
        isAudioLoading = true;
        setPlayBtnState();
        audio.play().then(() => {
            isPlaying = true;
            isAudioLoading = false;
            setPlayBtnState();
            
            // Incrémente aussi quand on appuie manuellement sur play après pause
            if (typeof incrementPlayCount === 'function') {
                incrementPlayCount(songs[currentSongIndex].title);
            }
        }).catch(e => {
            console.error(e);
            isAudioLoading = false;
            setPlayBtnState();
        });
    }
});

// Loading events
audio.addEventListener("waiting", () => {
    isAudioLoading = true;
    setPlayBtnState();
});
audio.addEventListener("canplay", () => {
    isAudioLoading = false;
    setPlayBtnState();
});
audio.addEventListener("playing", () => {
    isAudioLoading = false;
    isPlaying = true;
    setPlayBtnState();
});


nextBtn.addEventListener("click", () => {
    if(songs.length > 0) {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
    }
});

prevBtn.addEventListener("click", () => {
    if(songs.length > 0) {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
    }
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

// Initialize playlist on load
document.addEventListener('DOMContentLoaded', initPlaylist);
