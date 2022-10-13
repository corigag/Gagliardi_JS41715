//import { products } from "./stock.js";
import { getCartLocalStorage, setCartLocalStorage } from "./storage.js";



let cart = getCartLocalStorage() || [];
const offcanvasCart = document.querySelector('#cartBody');

const addToCart = (id) => {

    //busca coincidencia de producto en el array de productos
    const newItem = products.find( element => element.id == id );

    //busca coincidencia de productos en el array carrito
    const cartItem = cart.find ( element => element.id == id);

    cartItem ? (

         Toastify({
            text: `Agregaste 1 unidad de ${cartItem.name}`,
            duration: 2000,
            gravity: 'top',
            position: 'center',
            style: {
                background: 'radial-gradient(circle, rgba(208,199,203,1) 0%, rgba(190,176,188,1) 100%',
                color: 'black',
            }
        }).showToast(),
    
        cartItem.amount++

    ) : (

        Toastify({
            text: `Agregaste ${newItem.name} al carrito`,
            duration: 2000,
            gravity: 'top',
            position: 'center',
            style: {
                background: 'radial-gradient(circle, rgba(208,199,203,1) 0%, rgba(190,176,188,1) 100%',
                color: 'black',
            }
        }).showToast(),
    
        newItem.amount = 1,
    
        cart.push(newItem)
    )

    
    renderCart(cart);
}

const renderCart = (cart) =>{

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

    cartCount(cart);
    emptyCart(cart);
    showTotal(cart);
    
};

const cartCount = (cart) =>{

    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((acc, element) => acc + element.amount, 0);
    cartCount.innerText = totalItems
};

const deleteCartItem = (itemId) => {

    //busca coincidencia dentro del array carrito
    const item = cart.find(element => element.id == itemId); 

    //busca el indice del elemento encontrado
    const itemIndex = cart.indexOf(item);

   if(cart[itemIndex].amount > 1){

    cart[itemIndex].amount-- ;

    Toastify({
        text: `${cart[itemIndex].name} disminuyo 1 unidad`,
        duration: 2000,
        gravity: 'top',
        position: 'left',
        style: {
            background: 'radial-gradient(circle, rgba(208,199,203,1) 0%, rgba(190,176,188,1) 100%',
            color: 'black',
        }
    }).showToast();

   }else{

    Toastify({
        text: `Eliminaste ${cart[itemIndex].name} del carrito`,
        duration: 2000,
        gravity: 'top',
        position: 'left',
        style: {
            background: 'radial-gradient(circle, rgba(208,199,203,1) 0%, rgba(190,176,188,1) 100%',
            color: 'black',
        }
    }).showToast();

    cart.splice(itemIndex, 1);
   }

    renderCart(cart);

}

//crea funcionalidad y boton vaciar carrito
const emptyCart = (cart) => {
    
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
        
    Swal.fire({
        title: 'Esta seguro?',
        text: `Va a vaciar su carrito de compras.`,
        icon: 'warning',
        height: 100 ,
        width: 350 ,
        background: '#EFEBE7',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
         
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Productos eliminados!',
                'Listo para realizar una nueva seleccion?',
                'success',
                100,
                350,
                '#EFEBE7'
                
            )
            cart.length = 0;
            renderCart(cart);  
        }
    })
 
    })
}

const showTotal = (cart) => {

    //suma total precios de productos en array carrito
    const total = cart.reduce((acc, el) => acc + (el.price * el.amount), 0)
    
    //crea elemento para mostrar el total
    const divTotal = document.createElement('div')
    offcanvasCart.appendChild(divTotal);
    divTotal.innerHTML = `
     <p class= "text-center"> Total = <span class= "fs-4"> $${total} </span> </p>
     <div  >
    <button class="btn btn-success " id="finishShopping"><a class="text-decoration-none" href="../src/form.html" target="_blank">Finalizar compra</a></button>
    </div>
    `
    
    setCartLocalStorage(cart);
    
    
    return total
}



export { addToCart , renderCart , showTotal , cart}