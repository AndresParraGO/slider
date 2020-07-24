

const $slider = document.getElementById('slider')

let i = 1

setInterval(() => {
  if(i == 4) {
    i = 0
  } else {
    $slider.style.transform = `translateX(-${i*100}%)`
    i++
  }

}, 2000);