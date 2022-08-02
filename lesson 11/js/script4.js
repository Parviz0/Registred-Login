import {cards} from './db.js'

let html4 = document.querySelector('#html4')
let block_cards = document.querySelector('.block_cards')
let btn = document.querySelector('.btn')
let modal_bg = document.querySelector('.modal_bg')


btn.onclick = () => {
    modal_bg.style.top = '200px'
}

form.onsubmit = (event) => {
    event.preventDefault()
 
    let get = {
        id: Math.random(),
        company: 'HUMO',
        currency: 'UZS',
        total: 205000
 }   
    let fm = new FormData(form) 
    fm.forEach((value, key) => {
     get[key] = value
    })
    
    cards.push(get);
    modal_bg.style.top = '-400px'
    reload(cards)
 
 }

function reload(arr) {
    block_cards.innerHTML = ""

    for(let item of arr) {
        block_cards.innerHTML += `
            <div class="card">
                <p class="visa">${item.company}</p>
                <p>${item.currency}</p>
            </div>
        `
        localStorage.setItem('card', JSON.stringify(cards))
        let data = JSON.parse(localStorage.getItem('card'))
    }
}

reload(cards)    