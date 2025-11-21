function showI(instruID) {
    document.querySelectorAll('.music').forEach(c => c.classList.add('hidden'));
    const instrument = document.getElementById(instruID);
    instrument.classList.remove('hidden');
    document.querySelector('h1').style.display = 'none'
    document.querySelector('h2').style.display = 'none'
    document.querySelector('button').style.display = 'none'
    const buttons = document.querySelector('.button-container');
    buttons.style.display = 'none';
    window.scrollTo({ top: 0, behavior: "auto" });
}

function previousPage () {
    document.querySelector('h1').style.display = '';
    document.querySelector('h2').style.display = '';
    document.querySelector('button').style.display = '';
    const buttons = document.querySelector('.button-container');
    buttons.style.display = '';
    document.querySelectorAll('.music').forEach(c => c.classList.add('hidden'));
}

const audios = document.querySelectorAll('audio');
audios.addEventListener('play', () => {
    audios.forEach(otherAudio => {
        if (otherAudio !== audio) {
            otherAudio.pause();
            otherAudio.currentTime = 0;
        }
    });
});

const petals = document.querySelectorAll(".petal");
petals.forEach(p => {
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = 3 + Math.random()*4 + "s";
});
