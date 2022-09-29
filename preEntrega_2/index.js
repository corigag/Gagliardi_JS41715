import { renderProducts } from "./app.js";
import { products } from "./src/stock.js";
import { renderCart } from "./src/cartFunctions.js";
import { getCartLocalStorage } from "./src/storage.js"


document.addEventListener('DOMContentLoaded' , () => {

    renderProducts(products)

    if (localStorage.getItem('cart')) {
        const localStorageCart = getCartLocalStorage();
        renderCart(localStorageCart);
    }
    
})