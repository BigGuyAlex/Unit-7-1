const INPUT = document.getElementById('input')
const BTN = document.getElementById('but-guess')
const RESULT = document.createElement('p')

document.body.appendChild(RESULT)

BTN.addEventListener('click', () => {
  const ANSWER = Math.floor(Math.random() * 6) + 1
  if (+INPUT.value === ANSWER) {
    alert('That was correct!')
    RESULT.textContent = "I'm so proud of you Son!"
  } else {
    alert('That was incorrect, son.')
    RESULT.textContent = 'Try again, son!'
  }
})
