const menuIcon = document.getElementById('menu_toggle_icon')
const menuToggle = document.getElementById('menu_toggle')
const closeMenu = document.getElementById('close_menu')

menuIcon.addEventListener('click', () => {
    menuToggle.style.display = "block"
})

closeMenu.addEventListener('click', () => {
    menuToggle.style.display = "none"
})