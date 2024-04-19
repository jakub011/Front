const img = document.getElementById('img')
const text = document.getElementById('index')
const domain = document.getElementById('company-name')
const caption = document.getElementById('company-caption')
const uList = document.getElementById('unordered-list')
const seeSite = document.getElementById('see-site')
const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".nav-menu")

const portfolio = [
    {
        pathToImage: 'anwibet',
        companyDomain: 'anwibet.pl',
        companyCaption: 'Strona wizytówka dla firmy budowlanej',
        realization: true,
        list: [
            'Projekt graficzny strony',
            'Wykonanie front-endu (HTML, CSS, JS)',
            'Instalacja certyfikatu SSL, konfiguracja serwera oraz poczty'
        ]
    },
    {
        pathToImage: 'perfumy-premium',
        companyDomain: 'perfumy-premium.pl',
        companyCaption: 'Strona z szukaniem perfum',
        realization: true,
        list: [
            'Projekt graficzny strony',
            'Wykonanie front-endu z wykorzystaniem SvelteKit',
            'Instalacja certyfikatu SSL, konfiguracja serwera oraz poczty'
        ]
    },
    {
        pathToImage: 'wymieniamy',
        companyDomain: 'wymieniamy.com',
        companyCaption: 'Zaawansowany portal od wymian online',
        realization: true,
        list: [
            'Projekt graficzny strony',
            'Wykonanie front-endu z wykorzystaniem SvelteKit',
            'Wykonanie back-endu z wykorzystaniem Express.js',
            'Instalacja certyfikatu SSL, konfiguracja serwera'
        ]
    },
    {
        pathToImage: 'squillo',
        companyDomain: 'squillodiamante.pl',
        companyCaption: 'Sklep internetowy',
        realization: true,
        list: [
            'Wykonanie sklepu na PrestaShop',
            'Instalacja certyfikatu SSL, konfiguracja serwera',
            'Założenie poczty',
        ]
    },
    {
        pathToImage: 'hypeor',
        companyDomain: 'hypeor.pl',
        companyCaption: 'Strona do stawiania serwerów gier',
        realization: true,
        list: [
            'Projekt graficzny strony',
            'Wykonanie front-endu z wykorzystaniem SvelteKit',
        ]
    },
    {
        pathToImage: '1blok',
        companyDomain: '1blok.pl',
        companyCaption: 'Sklep dla serwera minecraft',
        realization: true,
        list: [
            'Projekt graficzny strony',
            'Wykonanie front-endu z wykorzystaniem SvelteKit',
            'Wykonanie back-endu z wykorzystaniem Express.js',
            'Instalacja certyfikatu SSL, konfiguracja serwera'
        ]
    },
    {
        pathToImage: 'moleis',
        companyDomain: 'moleis.net',
        companyCaption: 'Sklep dla serwera minecraft',
        realization: false,
        list: [
            'Projekt graficzny strony',
            'Wykonanie front-endu z wykorzystaniem SvelteKit',
            'Wykonanie back-endu z wykorzystaniem Express.js',
            'Instalacja certyfikatu SSL, konfiguracja serwera'
        ]
    },
    {
        pathToImage: 'mythiccode',
        companyDomain: 'mythiccode.pl',
        companyCaption: 'Przygotowanie wizualizacji graficznej strony portoflio',
        realization: false,
        list: [
            'Projekt graficzny strony',
        ]
    },
    {
        pathToImage: 'camillihaus',
        companyDomain: 'camillihaus.pl',
        companyCaption: 'Przygotowanie wizualizacji graficznej strony wizytówki',
        realization: false,
        list: [
            'Projekt graficzny strony',
        ]
    },
    {
        pathToImage: 'juritrans',
        companyDomain: 'juritrans.pl',
        companyCaption: 'Strona wizytówka dla firmy',
        realization: false,
        list: [
            'Projekt graficzny strony',
            'Wykonanie front-endu (HTML,CSS,JS)',
        ]
    }
]

text.innerHTML = `${1}/${portfolio.length}`
let index = 0


const sliderUpdate = () => {
    domain.innerHTML = `${portfolio[index].companyDomain}`
    caption.innerHTML = `${portfolio[index].companyCaption}`
    uList.innerHTML = ''
    for(let realization of portfolio[index].list) {
        const li = document.createElement('li')
        li.innerHTML = realization
        uList.appendChild(li)
    }
    if(portfolio[index].realization) {
        seeSite.innerHTML = `Zobacz Realizacje`
        seeSite.style.pointerEvents = 'auto'
        seeSite.style.opacity = '100%'
        seeSite.href = `https://${portfolio[index].companyDomain}`
        } 
    else {
        seeSite.innerHTML = `Brak Podglądu`
        seeSite.style.pointerEvents = 'none'
        seeSite.style.opacity = '50%'
        seeSite.href = ``
}
}

const sliderMove = (direction) => {
    if (direction === 'left') {
        index = index === 0 ? portfolio.length - 1 : index - 1
    } else if (direction === 'right') {
        index = (index === portfolio.length - 1) ? 0 : index + 1
    }
    text.innerHTML = `${index+1}/${portfolio.length}`
    img.setAttribute('src', `./img/${portfolio[index].pathToImage}.png`)
    sliderUpdate()
}

// const renderSlider = () => {
//     const { companyDomain, companyCaption, pathToImage, list } = portfolio[index]
//     domain.textContent = companyDomain
//     caption.textContent = companyCaption
//     img.src = `./img/${pathToImage}.png`
//     text.textContent = `${index + 1}/${portfolio.length}`
//     uList.innerHTML = list.map((realization) => `<li>${realization}</li>`).join('')
// }

// const moveSlider = (direction) => {
//     if (direction === 'left') {
//         index = index === 0 ? portfolio.length - 1 : index - 1
//     } else if (direction === 'right') {
//         index = (index === portfolio.length - 1) ? 0 : index + 1
//     }
//     renderSlider()
// }



document.getElementById('moveLeft').addEventListener('click', () => sliderMove('left'))
document.getElementById('moveRight').addEventListener('click', () => sliderMove('right'))


hamburger.addEventListener("click", () =>{
    navmenu.classList.toggle("active")
    hamburger.classList.toggle("active")
})

document.querySelectorAll(".nav-menu").forEach(n => n.addEventListener("click", () => {
    navmenu.classList.remove("active")
    hamburger.classList.remove("active")
}))