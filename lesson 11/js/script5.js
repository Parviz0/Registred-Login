let contans = [
] 
let form = document.forms.form
let btn = document.querySelector('.add_transic')
let btnEnt = document.querySelector('.enter')
let modal_bg = document.querySelector('.modal_bg')


form.onsubmit = (event) => {
    event.preventDefault()
 
    let get = {
        id: Math.random(),
        card: 'Visa',
        category: 'Eat',
        price: 25000,
        date: new Date().getDay() + '.' + new Date().getMonth()
 }   
    let fm = new FormData(form) 
    fm.forEach((value, key) => {
     get[key] = value
    })
    
    contans.push(get);
    modal_bg.style.top = '-400px'
    reload(contans)
 
 }

 function reload(arr) {

    for(let poll of arr){
        // a create
        let idTxt = document.createElement('p')
        let send = document.createElement('p')
        let categoryTxt = document.createElement('p')
        let info = document.createElement('div')
        let priceTxt = document.createElement('p')
        let date = document.createElement('p')
        let container = document.querySelector('.pololo')
        let modal_bg = document.querySelector('.modal_bg')
        let about = document.querySelector('.about')

        // b decor
        idTxt.innerHTML = Math.random()
        send.innerHTML = poll.koshel
        categoryTxt.innerHTML = poll.for
        priceTxt.innerHTML = poll.price
        date.innerHTML = '0' + new Date().getDay() + '.' + '0' + new Date().getMonth()
        info.classList.add('info')
        // c add
        container.prepend(info)
        info.append(idTxt)
        info.append(send)
        info.append(categoryTxt)
        info.append(priceTxt)
        info.append(date)
        localStorage.setItem('contans', JSON.stringify(contans))
        let data = JSON.parse(localStorage.getItem('contans'))
    } 
}





btn.onclick = () =>{
    modal_bg.style.top = '200px'
}
