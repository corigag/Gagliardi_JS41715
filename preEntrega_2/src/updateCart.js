const showTotal = (cart) => {

    //suma total precios de productos en array carrito
    const total = cart.reduce((acc, el) => acc + (el.price * el.amount), 0)
    
    //crea elemento para mostrar el total
    const divTotal = document.createElement('div')
    offcanvasCart.appendChild(divTotal);
    divTotal.innerHTML = `
     <p class= "text-center"> Total = <span class= "fs-4"> $${total} </span> </p>
     <div  >
    <button class="btn btn-success " id="finishShopping">Finalizar compra</button>
    </div>
    `
    finishShopping();
    setCartLocalStorage();
    getCartLocalStorage();
    return total
}