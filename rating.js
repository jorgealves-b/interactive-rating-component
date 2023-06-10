var main = document.querySelector('.main-container')
var second = document.querySelector('.sec-container')
var submit = document.getElementById('submit')
var choice = document.getElementById('choice')
var rates = document.querySelectorAll('.rating')

submit.addEventListener('click', () => {
    second.classList.remove("hidden")
    main.style.display = 'none'
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
       choice.innerHTML = rate.innerHTML
    })
})