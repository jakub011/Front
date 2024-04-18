const orderButton = document.getElementsByClassName('order')
const body = document.querySelector('#body')
const orderContainer = document.querySelector('.order-container')
const close = document.querySelector('#close-form')
const amount = document.querySelector('#amount')
const price = document.querySelector('.price')
const totalPrice = document.querySelector('.total-price')
const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".nav-menu")
 
const calculatePrice = () => {
    const pallets = amount.value
    const bottlesOnOnePallet = 960
    const pricePerBottle = 0.66
    const calculation = ((pallets * bottlesOnOnePallet) * pricePerBottle).toFixed(2)
    price.textContent = `${calculation} zł`
    totalPrice.textContent = `${calculation} plus koszty wysyłki`
}
 
for(let i = 0; i < orderButton.length; i++) {
    orderButton[i].addEventListener('click', () => {
        orderContainer.style.display = 'flex'
    })
}
 
close.addEventListener('click', (event) => {
    price.textContent = totalPrice.textContent = ''
    amount.value = ''
    event.preventDefault()
    orderContainer.style.display = 'none'
})
 
amount.addEventListener('change', () => calculatePrice())

hamburger.addEventListener("click", () =>{
    navmenu.classList.toggle("active")
    hamburger.classList.toggle("active")
})

document.querySelectorAll(".nav-menu").forEach(n => n.addEventListener("click", () => {
    navmenu.classList.remove("active")
    hamburger.classList.remove("active")
}))