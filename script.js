// identifica a tecla pressionada, converte para lowercase e aplica na função
document.body.addEventListener('keyup', event => {
  playSound(event.code.toLowerCase())
})
document.querySelectorAll('.key').forEach(element => {
  element.addEventListener('click', () => {
    const clickedKey = element.getAttribute('data-key')
    playSound(clickedKey)
  })
})

document.querySelector('.composer button').addEventListener('click', () => {
  let song = document.querySelector('#input').value

  if (song !== '') {
    let songArray = song.split('') // separa o que foi digitado no input e cria um array.
    playComposition(songArray)
  }
})

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`)
  let keyElement = document.querySelector(`div[data-key="${sound}"]`)
  // sound = event.code.toLowerCase()
  if (audioElement) {
    audioElement.currentTime = 0 // reseta o áudio
    audioElement.play()
  }

  if (keyElement) {
    keyElement.classList.add('active')

    setTimeout(() => {
      keyElement.classList.remove('active')
    }, 300)
  }
}

function playComposition(songArray) {
  let wait = 0

  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`)
    }, wait)

    wait += 250
  }
}
