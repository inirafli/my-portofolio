const scrollToSection = sectionId => {
    const section = document.querySelector(sectionId)
    window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
    })
}

const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#navMenu')
const menuItems = document.querySelectorAll('#navMenu a')
const titleLinks = document.querySelector('a[href="#hero"]')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

menuItems.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault()

        const sectionId = item.getAttribute('href')
        scrollToSection(sectionId)

        hamburger.classList.toggle('hamburger-active')
        navMenu.classList.toggle('hidden')
    })
})

titleLinks.addEventListener('click', event => {
    event.preventDefault()
    scrollToSection('#hero')
})