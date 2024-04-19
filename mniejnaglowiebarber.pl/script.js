const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".nav-menu")
const reviewTitle = document.querySelector('#review-title')
const reviewText = document.querySelector('#review-text')
const reviewAuthor = document.querySelector('#review-author')
const reviewDotsContainer = document.querySelector('#review-dots')

hamburger.addEventListener("click", () =>{
    navmenu.classList.toggle("active")
    hamburger.classList.toggle("active")
})

document.querySelectorAll(".nav-menu").forEach(n => n.addEventListener("click", () => {
    navmenu.classList.remove("active")
    hamburger.classList.remove("active")
}))

const reviews = [
    {
        title: 'Polecam gorąco',
        text: 'Jak zawsze rewelacja. Najlepszy w okolicy i miła atmosfera. Polecam!',
        name: 'Kamil',
    },
    {
        title: 'Super wizyta',
        text: 'Najlepszy! Super atmosfera. Super pogaduchy no i super fryzurka',
        name: 'Canim',
    },
    {
        title: 'Polecam',
        text: 'Best Of The Best',
        name: 'Oleg',
    },
    {
        title: 'Bardzo polecam',
        text: 'Jestem bardzo zadowolony, polecam Szymona!',
        name: 'Mateusz',
    },

]

for (let i = 0; i < reviews.length; i++) {
    reviewDotsContainer.innerHTML += '<a><div></div></a>';
}
let activeReview = 0
reviewDotsContainer.children[activeReview].className = 'active'
reviewTitle.textContent = `${reviews[activeReview].title}`
reviewText.textContent = `${reviews[activeReview].text}`
reviewAuthor.textContent = `${reviews[activeReview].name}`
let intervalId
function startInterval() {
  intervalId = setInterval(() => {
    reviewDotsContainer.children[activeReview].className = ''
    activeReview = (activeReview + 1) % reviews.length
    reviewDotsContainer.children[activeReview].className = 'active'
    reviewTitle.textContent = `${reviews[activeReview].title}`
    reviewText.textContent = `${reviews[activeReview].text}`
    reviewAuthor.textContent = `${reviews[activeReview].name}`
  }, 5000)
}
startInterval()
for (let k = 0; k < reviewDotsContainer.children.length; k++) {
  reviewDotsContainer.children[k].addEventListener('click', () => {
    reviewDotsContainer.children[activeReview].className = ''
    reviewDotsContainer.children[k].className = 'active'
    activeReview = k
    reviewTitle.textContent = `${reviews[activeReview].title}`
    reviewText.textContent = `${reviews[activeReview].text}`
    reviewAuthor.textContent = `${reviews[activeReview].name}`
    clearInterval(intervalId)
    startInterval()
  })
}

const services = [
    {
        servicePhoto: 'services-icon-1.webp',
        serviceType: 'Usługa 1',
        serviceText: 'lorem ipsum dolorem sandb andnj jnkasjnk jnksanjkd njknjasjnjnk aansjjndanjasnj'
    },
    {
        servicePhoto: 'services-icon-2.webp',
        serviceType: 'Usługa 2',
        serviceText: 'lorem ipsum dolorem sandb andnj s a jnksan jkd d a asnjnk aansjj asndanjasnj'
    },
    {
        servicePhoto: 'services-icon-3.webp',
        serviceType: 'Usługa 3',
        serviceText: 'lorem ipsum doldas pop op op opo po po psjnk jnksanjkd njknjasjnjnk aannjasnj'
    },
    {
        servicePhoto: 'services-icon-4.webp',
        serviceType: 'Usługa 4',
        serviceText: 'lorem ipsum dolorem sandb andnj jal lal al lalllalalla lsjjndanjasnj'
    }
]

const serviceContainer = document.querySelector('#mobile-dots')
const serviceImage = document.querySelector('#service-image')
const serviceName = document.querySelector('#service-name')
const serviceDescription = document.querySelector('#service-description')

for (let ii = 0; ii < services.length; ii++) {
    serviceContainer.innerHTML += '<a></a>'
}

let activeService = 0
serviceContainer.children[activeService].className = 'active'
serviceImage.src = `./img/${services[activeService].servicePhoto}`
serviceName.textContent = `${services[activeService].serviceType}`
serviceDescription.textContent = `${services[activeService].serviceText}`
let intervalId2
function startInterval2() {
  intervalId2 = setInterval(() => {
    serviceContainer.children[activeService].className = ''
    activeService = (activeService + 1) % services.length
    serviceContainer.children[activeService].className = 'active'
    serviceImage.src = `./img/${services[activeService].servicePhoto}`
    serviceName.textContent = `${services[activeService].serviceType}`
    serviceDescription.textContent = `${services[activeService].serviceText}`
  }, 5000)
}
startInterval2()
for (let k = 0; k < serviceContainer.children.length; k++) {
  serviceContainer.children[k].addEventListener('click', () => {
    serviceContainer.children[activeService].className = ''
    serviceContainer.children[k].className = 'active'
    activeService = k
    serviceImage.src = `./img/${services[activeService].servicePhoto}`
    serviceName.textContent = `${services[activeService].serviceType}`
    serviceDescription.textContent = `${services[activeService].serviceText}`
    clearInterval(intervalId2)
    startInterval2()
  })
}

jQuery('.fp-slider-items').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
{
    breakpoint: 992,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2
   }
},
{
    breakpoint: 600,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
   }
},
{
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
   }
}
       // You can unslick at a given breakpoint now by adding:
       // settings: "unslick"
       // instead of a settings object
     ]
   });