function openNav() {
  document.getElementById('myNav').style.width = '100%'
  document.getElementById('myNav').style.animation = 'animation: fadeIn ease 2s'
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%'
}

function displayNextImage() {
  x = x === images.length - 1 ? 0 : x + 1
  document.getElementById('img').src = images[x]
}

function displayPreviousImage() {
  x = x <= 0 ? images.length - 1 : x - 1
  document.getElementById('img').src = images[x]
}

function startTimer() {
  setInterval(displayNextImage, 3000)
}

var images = [],
  x = -1
images[0] = 'Mirage.jpg'
images[1] = 'Dust.jpg'
images[2] = 'Nuke.jpg'
