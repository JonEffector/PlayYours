const musicContainer = document.querySelector('.music-container')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const audio = document.querySelector('#audio')
const cover = document.querySelector('#cover')
const playBtn = document.querySelector('#play')
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')

const songs = ['amajoro4 by kivumbi king','a dieu angeline','katapila', 'cest bou la vie','aux marches du plaisir','gims_dadju_slimane_belle']

let songIndex =0
 
loadSong(songs[songIndex])

function loadSong(song){
    title.innerText = song
    // audio.src = `music/${songs}.mp3`
    // cover.src=`images/${songs}.png`
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

playBtn.addEventListener('click', ()=>{
    const playing = musicContainer.classList.contains('play')


    if(playing){
        pauseSong()
    }else{
        playSong()
    }
})