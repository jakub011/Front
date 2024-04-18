const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".nav-menu")
const leftArrow = document.querySelector('#left-arrow')
const rightArrow = document.querySelector('#right-arrow')
const sliderLine = document.querySelector('#slider')
const sliderWidth = document.querySelector('.line').offsetWidth
const reviewContent = document.querySelector('#review-content')
const reviewClient = document.querySelector('#review-client')
const reviewDate = document.querySelector('#review-date')
const dots = document.querySelector('.white-dots')
const staff = document.querySelector('.chefs')
const chefContainers = document.querySelectorAll('.chef-container')
const galleryPhotos = document.getElementsByClassName('gallery-photo')

console.log(galleryPhotos[0].src)

const photos = ['Paweł-Kopacz.jpg','Tomasz-Wozny.jpg','Dominik-Becla.jpg','Adam-Kielar.jpg','Sebastian-Kocój.jpg','Miłosz-Rupniewski.jpg','Stefan-Kogut.jpg','Paweł-Kopacz.jpg','Tomasz-Wozny.jpg']

const reviews = [
    {
        text: 'Bardzo dobra pizza, dodatki świeże a do tego wszystkiego pyszna oliwa',
        name: 'Kamil',
        date: '16 maja 2023'
    },
    {
        text: 'Przepyszna pizza. Chrupiące brzegi i świeże składniki, wszystko we włoskim stylu - nie ilość, a jakość. Jako dodatek aromatyczna  oliwa bazyliowa. Nawet odgrzana na drugi dzień w mikrofali pizza daje radę. Focaccia również smaczniutka. Złoto',
        name: 'Canim',
        date: '9 maja 2023'
    },
    {
        text: 'Najlepsza restauracja w jakiej byłem! Jedzenie pyszne i szybko podane.',
        name: 'Oleg',
        date: '8 maja 2023'
    },
    {
        text: 'Bardzo przyjemne miejsce, szczególnie gdy się siedzi na górze. Naprawdę dobra pizza i burgery. Polecam',
        name: 'Mateusz',
        date: '2 maja 2023'
    },
    {
        text: 'Świetna restauracja. Podoba mi się widok na kuchnie i szefa kuchni wykańczającego  danie do odbioru. Nie tylko smacznie, ale czujesz, że wszyscy się starają i dla tego chce się tam wracać.',
        name: 'Bartłomiej',
        date: '30 kwietnia 2023'
    },
    {
        text: 'Najpyszniejsza pizza, jaką dotąd jadłam w Rzeszowie! Obsługa przemiła, polecam serdecznie ❤️',
        name: 'Daria',
        date: '24 kwietnia 2023'
    }
]

const chefs = [
    {
        staffPhoto: 'Paweł-Kopacz.jpg',
        staffName: 'Paweł Kopacz',
        staffRole: 'Szef Kuchni'
    },
    {
        staffPhoto: 'Tomasz-Wozny.jpg',
        staffName: 'Tomasz Woźny',
        staffRole: 'Zastępca Szefa Kuchni'
    },
    {
        staffPhoto: 'Dominik-Becla.jpg',
        staffName: 'Dominik Becla',
        staffRole: 'Główny Zmianowy'
    },
    {
        staffPhoto: 'Adam-Kielar.jpg',
        staffName: 'Adam Kielar',
        staffRole: 'Główny Pizzaiolo'
    },
    {
        staffPhoto: 'Sebastian-Kocój.jpg',
        staffName: 'Sebastian Kocój',
        staffRole: 'Kucharz'
    },
    {
        staffPhoto: 'Miłosz-Rupniewski.jpg',
        staffName: 'Miłosz Rupniewski',
        staffRole: 'Pizzaiolo'
    },
    {
        staffPhoto: 'Stefan-Kogut.jpg',
        staffName: 'Stefan Kogut',
        staffRole: 'Szef Baru'
    },
    {
        staffPhoto: 'Paweł-Kopacz.jpg',
        staffName: 'Paweł Kopacz',
        staffRole: 'Szef Kuchni'
    },
    {
        staffPhoto: 'Tomasz-Wozny.jpg',
        staffName: 'Tomasz Woźny',
        staffRole: 'Zastępca Szefa Kuchni'
    }

]

let sliderDivision = sliderWidth / reviews.length
let index = 0
sliderLine.style.width = `${sliderDivision}px`
//first load
reviewContent.innerHTML = reviews[index%reviews.length].text
reviewClient.innerHTML = reviews[index%reviews.length].name
reviewDate.innerHTML = reviews[index%reviews.length].date


const handleArrowClick = direction => {
    if (direction ==='right') {
        index = index === reviews.length - 1 ? 0 : index + 1
    } else if (direction === 'left') {
        index = index === 0 ? reviews.length - 1 : index - 1
    }

    sliderMove()
}

setInterval( () => {
    index === reviews.length - 1 ? index = 0 : index += 1
    handleArrowClick()
},8000)

rightArrow.addEventListener('click', () => handleArrowClick('right'))
leftArrow.addEventListener('click', () => handleArrowClick('left'))

const animation = [
    {opacity: "0%"},
    {opacity: "100%"}
]


const sliderMove = () => {
    reviewContent.innerHTML = reviews[index].text
    reviewContent.animate(animation,500)
    reviewClient.innerHTML = reviews[index].name
    reviewClient.animate(animation,500)
    reviewDate.innerHTML = reviews[index].date
    reviewDate.animate(animation,500)
    sliderLine.style.left = `${sliderDivision*index}px`
}


hamburger.addEventListener("click", () =>{
    navmenu.classList.toggle("active")
    hamburger.classList.toggle("active")
})

document.querySelectorAll(".nav-menu").forEach(n => n.addEventListener("click", () => {
    navmenu.classList.remove("active")
    hamburger.classList.remove("active")
}))

let numberOfContainers = 1
const mq = window.matchMedia( "(max-width: 768px)" );
if (mq.matches) {
    numberOfContainers = 1
}
else {
    numberOfContainers = 3
}


for (let i = 0; i < chefs.length / numberOfContainers; ++i) {
    const dot = document.createElement("div")
    dot.classList.add("circle")
    dots.appendChild(dot)
}

let activeDot = 0
let staffIntervalIndex = 0
const allDots = dots.querySelectorAll(".circle")
allDots[activeDot].classList.add("active-circle")

setInterval( () => {
    staffIntervalIndex === dots.children.length - 1 ? staffIntervalIndex = 0 : staffIntervalIndex += 1
    allDots[activeDot].classList.remove('active-circle')
    allDots[staffIntervalIndex].classList.add('active-circle')
    activeDot = staffIntervalIndex
    staffChange(staffIntervalIndex*numberOfContainers)
},8000)

for (let k = 0; k < dots.children.length; k++) {
    dots.children[k].addEventListener('click', () =>{
        allDots[activeDot].classList.remove('active-circle')
        allDots[k].classList.add('active-circle')
        activeDot = k
        staffIntervalIndex = k
        staffChange(k*numberOfContainers)
    })
}


window.onload = () => {
    staffChange(0)
}

const staffChange = (staffIndex) => {
    for(j = 0; j < numberOfContainers; j++) {
        let img = Object.values(chefs[j+staffIndex%chefs.length])[0]
        let name = Object.values(chefs[j+staffIndex%chefs.length])[1]
        let role = Object.values(chefs[j+staffIndex%chefs.length])[2]
        staff.children[j].children[0].src = `./img/${img}`
        staff.children[j].children[2].innerHTML = name
        staff.children[j].children[3].innerHTML = role
        staff.animate(animation,500)
    }
}

let galleryIndex = 3
//preload
galleryPhotos[0].src = `./img/${photos[0]}`
galleryPhotos[1].src = `./img/${photos[1]}`
galleryPhotos[2].src = `./img/${photos[2]}`

setInterval( () => {
    galleryChange()
    galleryIndex += 3
}, 4000)

const animationGallery = [
    {opacity: "50%"},
    {opacity: "100%"}
]

const galleryChange = () => {
    galleryPhotos[0].src = `./img/${photos[galleryIndex % photos.length]}`
    galleryPhotos[0].animate(animationGallery,1000)
    galleryPhotos[1].src = `./img/${photos[ (galleryIndex + 1) % photos.length]}`
    galleryPhotos[1].animate(animationGallery,1000)
    galleryPhotos[2].src = `./img/${photos[ (galleryIndex + 2) % photos.length]}`
    galleryPhotos[2].animate(animationGallery,1000)
}

