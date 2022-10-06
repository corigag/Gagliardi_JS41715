import { renderProducts } from "./app.js";
import { products } from "./src/stock.js";
import { renderCart } from "./src/cartFunctions.js";
import { getCartLocalStorage } from "./src/storage.js"

const render = (products) => {
    const containerBanners = document.getElementById('containerBanners');
    containerBanners.classList.add('d-none');
    renderProducts(products)
}

document.addEventListener('DOMContentLoaded' , () => {

const btnAllProducts = document.getElementById('btnAllProducts');
btnAllProducts.addEventListener('click', () =>{
    render(products)
});

const btnPiel = document.getElementById('btnPiel')
btnPiel.addEventListener('click', () => {
    const filterPiel = products.filter ((item) => item.category === 'Cremas')
    render(filterPiel)
});

const btnTinturas= document.getElementById('btnTinturas')
btnTinturas.addEventListener('click', () => {
    const filterTinturas = products.filter ((item) => item.category === 'Tinturas')
    render(filterTinturas)
});

const btnVerano= document.getElementById('btnVerano')
btnVerano.addEventListener('click', () => {
    const filterVerano = products.filter ((item) => item.category === 'Verano')
    render(filterVerano)
});

const btnHigiene= document.getElementById('btnHigiene')
btnHigiene.addEventListener('click', () => {
    const filterHigiene = products.filter ((item) => item.category === 'Higiene')
    render(filterHigiene)
});

    if (localStorage.getItem('cart')) {
        const localStorageCart = getCartLocalStorage();
        renderCart(localStorageCart);
    }
})