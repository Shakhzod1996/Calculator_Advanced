let buttons = document.querySelectorAll('.btn');
let displayEl = document.querySelector('.display');
let equalBtn = document.querySelector('.teng');
let clearBtn = document.querySelector('.ac');
let backBtn = document.querySelector('.back')


buttons.forEach(btn => {
    let number = btn.getAttribute('data-number');

    btn.addEventListener('click', () => {
        displayEl.value += number;
    })
})

equalBtn.addEventListener('click', () => {
    if (displayEl.value === '') {
        alert('Empty')
    } else {
        let value = eval(displayEl.value);
        displayEl.value = value;
    }
})

clearBtn.addEventListener('click', () => {
    displayEl.value = ''
})

// back button 
backBtn.addEventListener('click', ()=> {
    let exp = displayEl.value;
    displayEl.value = exp.substring(0, exp.length-1)
})

// Option Icon
let optionIcon = document.querySelector('.options-icon')
let optionAbsolute = document.querySelector('.options-absolute')
let rotate = document.querySelector('.rotate')

optionIcon.addEventListener('click', () => {
    optionIcon.classList.toggle('options-icon-move');
    optionAbsolute.classList.toggle('options-absolute-move');
    rotate.classList.toggle('rotate-active');
})

// Sinus 
let sin = document.querySelector('.sin')
sin.addEventListener('click', () => {
    let sinValue = Math.sin(displayEl.value)
    displayEl.value = sinValue
})

// Cosinus 
let cos = document.querySelector('.cos')
cos.addEventListener('click', () => {
    let cosValue = Math.cos(displayEl.value)
    displayEl.value = cosValue
})

// Tangens 
let tangen = document.querySelector('.tang')
tangen.addEventListener('click', () => {
    let tangenValue = Math.tan(displayEl.value)
    displayEl.value = tangenValue
})

// Log 
let loge = document.querySelector('.log')
loge.addEventListener('click', () => {
    let logValue = Math.log(displayEl.value)
    displayEl.value = logValue
})

// (
let leftDot = document.querySelector('.left-dot')
leftDot.addEventListener('click', () => {
    displayEl.value = displayEl.value + leftDot.value
})

// )
let rightDot = document.querySelector('.right-dot')
rightDot.addEventListener('click', () => {
    displayEl.value = displayEl.value + rightDot.value
})

// Root
let root = document.querySelector('.root')
root.addEventListener('click', () => {
    let rootValue = Math.sqrt(displayEl.value)
    displayEl.value = rootValue;
})

// Persent  sona 20% zini topish uchun 0.2 ga kupaytiramiz
let percent = document.querySelector('.percent')
percent.addEventListener('click', () => {
    displayEl.value = eval(displayEl.value)/100
})





