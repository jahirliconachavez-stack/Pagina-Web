(function () {
      var player = document.getElementById('hv-player');
      var play = document.getElementById('hv-play');
      var status = document.getElementById('hv-status');
      function showError(message) { status.textContent = message; status.hidden = false; }
      play.addEventListener('click', function () {
        if (!player.paused) { player.pause(); return; }
        status.hidden = true;
        var attempt = player.play();
        if (attempt) attempt.catch(function () {
          showError('No se pudo iniciar el video. Intenta usar los controles del reproductor.');
        });
      });
      player.addEventListener('play', function () { play.textContent = 'Ⅱ Pausar video'; });
      player.addEventListener('pause', function () { play.textContent = '▶ Reproducir aquí'; });
      player.addEventListener('ended', function () { play.textContent = '↻ Volver a ver'; });
      player.querySelector('source').addEventListener('error', function () {
        showError('No se pudo cargar el video integrado. Vuelve a abrir este archivo en un navegador actualizado.');
      });
    })();
