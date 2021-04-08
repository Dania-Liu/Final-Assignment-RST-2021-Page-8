// Sets default value.
let seventhAnswer = 0

// Connects button that allows users to submit their answers to JavaScript.
document.getElementById('seventh-submit').addEventListener('click', seventhSubmit)
// Connects button that allows users to reveal a hint to JavaScript.
document.getElementById('seventh-hint').addEventListener('click', seventhHint)

// Creates function that activates when the user clicks on "Submit" for the seventh riddle.
function seventhSubmit () {
  seventhAnswer = document.getElementById('seventh-answer').value
  if (seventhAnswer === 'shortstop') {
    document.getElementById('seventh-outcome').innerHTML = ('Correct, please proceed.')
  } else {
    document.getElementById('seventh-outcome').innerHTML = ('Incorrect, try again.')
  }
}

// Creates function that reveals an image when the user clicks on "Hint" for the seventh riddle.
function seventhHint () {
  document.getElementById('seventh-picture').style.display = 'block'
}
