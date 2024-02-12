

//created by online student .ie

const button_1 = document.querySelector('.button-1')
const button_2 = document.querySelector('.button-2')
const section_1 = document.querySelector('.section-1')
const section_2 = document.querySelector('.section-2')


button_1.addEventListener('click', ()=> {
    section_2.classList.add('active');
})

button_2.addEventListener('click', ()=> {
    section_2.classList.remove('active');
})

