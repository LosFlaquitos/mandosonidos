var currentAudio = null;

function toggleAudio(audioId) {
    var audio = document.getElementById(audioId);

    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause(); // Pausar el audio actual si no es el mismo
    }

    if (audio.paused) {
        audio.play(); // Iniciar la reproducción si está pausado
        currentAudio = audio;
    } else {
        audio.pause(); // Pausar el audio si está reproduciéndose
        currentAudio = null;
    }
}

document.getElementById('boton1').addEventListener('click', function() {
    toggleAudio('audio1');
});

document.getElementById('boton2').addEventListener('click', function() {
    toggleAudio('audio2');
});

document.getElementById('boton3').addEventListener('click', function() {
    toggleAudio('audio3');
});

document.getElementById('boton4').addEventListener('click', function() {
    toggleAudio('audio4');
});

document.getElementById('boton5').addEventListener('click', function() {
    toggleAudio('audio5');
});

document.getElementById('boton6').addEventListener('click', function() {
    toggleAudio('audio6');
});

document.getElementById('boton7').addEventListener('click', function() {
    toggleAudio('audio7');
});

document.getElementById('boton8').addEventListener('click', function() {
    toggleAudio('audio8');
});