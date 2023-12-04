const menuItems = document.querySelectorAll('.menu-item')
const hoverBG = document.querySelector('.hover-background')

menuItems.forEach(items => {
    items.addEventListener('mouseenter', e => {
        hoverBG.style.width = e.target.offsetWidth + 'px'
        hoverBG.style.left = e.target.offsetLeft + 'px'
    })
})