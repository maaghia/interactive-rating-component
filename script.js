var ratingBtns = document.querySelectorAll('.button')
var submitBtn = document.querySelector('.submit')
var card = document.querySelector('.ratingcard')
var cardSubmitted = document.querySelector('.thankscard')
var errorBox = document.querySelector('.errorbox')
var selectedValue = document.querySelector('#selection')
let ratingValue = 0

const ratingSelect = (e) => {
    ratingValue = e.target.dataset.value
}

const sumbitCheck = () => {
    if(ratingValue === 0){
        errorBox.style.display = 'block';
    } 
    else {
        selectedValue.textContent = `You selected ${ratingValue} out of 5`
        card.style.display = 'none'
        cardSubmitted.style.display = 'flex'
    }
}

ratingBtns.forEach(btn => btn.addEventListener('click', ratingSelect))
if(submitBtn) {
    submitBtn.addEventListener('click', sumbitCheck)
}