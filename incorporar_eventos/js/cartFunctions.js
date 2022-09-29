


const addToCart = (id) => {

    //busca coincidencia de producto en el array de productos
    const newItem = products.find( element => element.id == id );

    //busca coincidencia de productos en el array carrito
    const cartItem = cart.find ( element => element.id == id);

    if(cartItem){
       
        cartItem.amount++;
        
    } else {

        newItem.amount = 1;

        cart.push(newItem);
        //alert(`El producto ${newItem.name} ha sido añadido al carrito`);
    }

    renderCart();
}


const renderCart = () =>{

    offcanvasCart.innerHTML='';

    //Pinta cada elemento del array cart
    cart.forEach((element) => {

    const cartItem = document.createElement('div');

    cartItem.classList.add('d-flex')
    cartItem.classList.add('justify-content-around')
    cartItem.classList.add('p-5')
    cartItem.classList.add('text-decoration-none')

    
    const cartContent = ` 
        <div class = "d-flex ">
            <div id="contenedor-${element.name}" class= "py-2 px-2 ">
                <img src=${element.image} alt="foto producto" width="100px" height="100px">
            </div>
            <div >
                <ul class="list-unstyled py-1" id="detailsCartItem">
                    <li>${element.name}</li>
                    <li id="priceCartItem">$${element.price}</li>
                    <input  type="text" value=${element.amount} class="unidades">
                </ul>
            </div>
            <div>
            </div>
            <button class="btn deleteBtn" id="${element.id}"><img src="./images/iconoDelete.png" alt="icono basurero" id="icono_carrito"></button>
        </div>
`
    cartItem.innerHTML += cartContent;
    offcanvasCart.appendChild(cartItem);

    //Boton borrar producto
    cartItem.querySelector('.deleteBtn').addEventListener('click', () =>{
        deleteCartItem(element.id);
    })

    })

    emptyCart();
    showTotal();
    
};

const emptyCart = () => {
    
    //crea funcionalidad y boton vaciar carrito
    const emptyCartBtn = document.createElement('button');
    emptyCartBtn.classList.add('btn')
    emptyCartBtn.classList.add('btn-light')
    
    emptyCartBtn.innerText = "Vaciar Carrito"
    offcanvasCart.appendChild(emptyCartBtn)
    
    if (cart.length == 0){
        emptyCartBtn.classList.add('d-none')
        const emptyCartText = document.createElement('p')
        emptyCartText.innerText = "Su carrito de compras esta vacio"
        offcanvasCart.appendChild(emptyCartText) 
    }

    emptyCartBtn.addEventListener('click', () =>{
        cart.length = 0;
        renderCart();
        
    })
}

const deleteCartItem = (itemId) => {

    //busca coincidencia dentro del array carrito
    const item = cart.find(element => element.id == itemId); 

    //busca el indice del elemento encontrado
    const itemIndex = cart.indexOf(item);

   if(cart[itemIndex].amount > 1){

    cart[itemIndex].amount--

   }else{
    
    cart.splice(itemIndex, 1);
   }
    renderCart();

}