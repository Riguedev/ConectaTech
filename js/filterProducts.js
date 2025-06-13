const filterButton = document.getElementById('filter_button')

function filterProducts(value) {
    const products = document.getElementsByClassName('product')
    for (let i = 0; i < products.length; i++) {
        const product = products[i]
        if (value === 'all' || product.classList.contains(value)) {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }
    }
}

filterButton.addEventListener('click', () => {
    const select = document.getElementById('category')
    const value = select.options[select.selectedIndex].value
    filterProducts(value)
})