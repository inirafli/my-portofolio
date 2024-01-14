window.onscroll = () => {
    const header = document.querySelector('header')
    const fiexdNav = header.offsetTop

    if (window.scrollY > fiexdNav) {
        header.classList.add('navbar-trans')
    } else {
        header.classList.remove('navbar-trans')
    }
}

const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#navMenu')
const menuItems = document.querySelectorAll('#navMenu a')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active')
        navMenu.classList.toggle('hidden')
    })
})