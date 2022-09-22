const products = [
    {
        id:1,
        name:'Shampoo Solido',
        image: "images/muestra.jpg",
        price: 1300,
        modalidad: 'No retornable',
        stock: 60,
        amount: 1,
    },
    {
        id: 2,
        name: 'Acondicionador Solido',
        image: "images/muestra.jpg",
        price: 1200,
        modalidad: 'No retornable',
        stock: 50,
        amount: 1,
    },
    {
        id:3,
        name: 'Crema Facial',
        image: "images/muestra.jpg",
        price: 1500,
        modalidad: 'Retornable',
        stock: 30,
        amount: 1,
    },
    {
        id:4,
        name: 'Repelente Natural',
        image: "images/muestra.jpg",
        price: 1000,
        modalidad: 'Retornable',
        stock: 10,
        amount: 1,
    },
    {
        id:5,
        name: 'Crema Medicinal',
        image: "images/muestra.jpg",
        price: 1500,
        modalidad: 'Retornable',
        stock: 15,
        amount: 1,
    },
    {
        id:6,
        name: 'Aceite Bronceador',
        image: "images/muestra.jpg",
        price: 1400,
        modalidad: 'Retornable',
        stock: 15,
        amount: 1,
    },
    {
        id:7,
        name: 'Desodorante Natural',
        image: "images/muestra.jpg",
        price: 900,
        modalidad: 'No Retornable',
        stock: 15,
        amount: 1,
    },
    {
        id:8,
        name: 'Protector Solar',
        image: "images/muestra.jpg",
        price: 15000,
        modalidad: 'Retornable',
        stock: 15,
        amount: 1,
    }
   
];

let cart = [];

//capturo elementos del HTML que voy a necesitar
const mainContainer = document.getElementById('mainContainer');
const offcanvasCart = document.querySelector('.offcanvas-body');


const renderProducts = () => {
    //agrego clases a div principal tienda
    
    mainContainer.classList.add('container-xxl');
    mainContainer.classList.add('d-flex');
    mainContainer.classList.add('flex-wrap');

    //pinta productos en HTML
    products.forEach((element) => {
        
        const itemCard = document.createElement('div');
        
        itemCard.classList.add('col-12');
        itemCard.classList.add('col-md-3');
        itemCard.classList.add('text-center');
        itemCard.classList.add('my-3');
        itemCard.classList.add('d-flex');
        
        itemCard.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src=${element.image} class="card-img-top imagen" alt="imagen producto">
        <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        
        <p class="card-text valor">${element.price}</p>
        <a href="#" class="btn btn-primary addToCart id="${element.id} ">Añadir al carrito</a>
        </div>
        </div>
        `;
        
        mainContainer.appendChild(itemCard);
        
        //boton agregar al carrito
        const addToCartButton = itemCard.querySelector('.addToCart');
        addToCartButton.addEventListener('click',()=>{
            addToCart(element.id);
            
        })
    })
}

renderProducts();

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
        alert(`El producto ${newItem.name} ha sido añadido al carrito`);
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
         <div id="contenedor-${element.name}" class= "py-2">
            <img src=${element.image} alt="foto producto" width="100px" height="100px">
        </div>
        <div>
            <ul>
                <li>${element.name}</li>
                <li>${element.price}</li>
                <li ><input type="text" value=${element.amount} class="unidades"></li>
            </ul>
            
            <button class="deleteBtn" id="${element.id}">Borrar</button>
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


const showTotal = () => {

    //suma total precios de productos en array carrito
    const total = cart.reduce((acc, el) => acc + (el.price * el.amount), 0)
    
    //crea elemento para mostrar el total
    const divTotal = document.createElement('div')
    offcanvasCart.appendChild(divTotal);
    divTotal.innerHTML = `
     <p> Total = $${total} </p>
    `
    return total
}

