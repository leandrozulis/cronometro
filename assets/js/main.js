function relogio() {

  const relogio = document.querySelector('.relogio');
  const texto = document.querySelector('.texto');

  let segundos = 0;
  let timer;

  function transformaMilissegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
    });
  }

  function iniciaRelogio() {
    timer = setInterval(() => {
      segundos++;
      relogio.innerHTML = transformaMilissegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      relogio.classList.add('background-start');
      texto.classList.add('start');
      clearInterval(timer);
      iniciaRelogio();
      texto.innerHTML = 'Start!';
    }

    if (el.classList.contains('pausar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      relogio.classList.add('pausado');
      texto.classList.remove('start');
      relogio.classList.remove('background-start');
      texto.classList.add('stop');
      texto.innerHTML = 'Stop!';
    }

    if (el.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.classList.remove('pausado');
      texto.classList.remove('start');
      relogio.classList.remove('background-start');
      relogio.innerHTML = '00:00:00';
      segundos = 0;
      texto.innerHTML = '';
    }

  });

}

relogio();








