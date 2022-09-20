const products = [
    {
        id:1,
        name:'Shampoo Solido',
        image: "images/muestra.jpg",
        price: 1300,
        modalidad: 'No retornable',
        stock: 60,
        items: 1,
    },
    {
        id: 2,
        name: 'Acondicionador Solido',
        image: "images/muestra.jpg",
        price: 1200,
        modalidad: 'No retornable',
        stock: 50,
        items: 1,
    },
    {
        id:3,
        name: 'Crema Facial',
        image: "images/muestra.jpg",
        price: 1500,
        modalidad: 'Retornable',
        stock: 30,
        items: 1,
    },
    {
        id:4,
        name: 'Repelente Natural',
        image: "images/muestra.jpg",
        price: 1000,
        modalidad: 'Retornable',
        stock: 10,
        items: 1,
    },
    {
        id:5,
        name: 'Crema Medicinal',
        image: "images/muestra.jpg",
        price: 1500,
        modalidad: 'Retornable',
        stock: 15,
        items: 1,
    },
    {
        id:6,
        name: 'Aceite Bronceador',
        image: "images/muestra.jpg",
        price: 1400,
        modalidad: 'Retornable',
        stock: 15,
        items: 1,
    },
    {
        id:7,
        name: 'Desodorante Natural',
        image: "images/muestra.jpg",
        price: 900,
        modalidad: 'No Retornable',
        stock: 15,
        items: 1,
    },
    {
        id:8,
        name: 'Protector Solar',
        image: "images/muestra.jpg",
        price: 15000,
        modalidad: 'Retornable',
        stock: 15,
        items: 1,
    }
   
];

let cart = [];

const renderProducts = () => {
    //captura div principal tienda, pinta elementos en HTML
    const mainContainer = document.getElementById('mainContainer');

    mainContainer.classList.add('container-xxl');
    mainContainer.classList.add('d-flex');
    mainContainer.classList.add('flex-wrap');

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
            `

            mainContainer.appendChild(itemCard);

        const addToCartButton = itemCard.querySelector('.addToCart');
        
        addToCartButton.addEventListener('click',()=>{
            addToCart(element.id)
            
        })

    
})


}


renderProducts();

const addToCart = (id) => {

    const newItem = products.find( element => element.id == id );

    const cartItem = cart.find ( element => element.id == id)

    if(cartItem){
       
        cartItem.items++
        console.log(cart)
    } else {

        newItem.items = 1;

        cart.push(newItem)
        console.log(cart)
    }

    renderCart();
}

const renderCart = () =>{

    const divCart = document.getElementById('cart');
    divCart.innerHTML='';

    cart.forEach((element) => {

    const cartItem = document.createElement('div');

    cartItem.classList.add('text-center')
    cartItem.classList.add('col-6')
    cartItem.classList.add('d-flex')
    cartItem.classList.add('justify-content-around')
    cartItem.classList.add('p-3')
    cartItem.classList.add('text-decoration-none')

    
    const cartContent = `
    <div id="contenedor-${element.name}">
            <img src=${element.image} alt="foto producto" width="100px" height="100px">
            <ul>
                <li>${element.name}</li>
                <li>${element.price}</li>
                <li ><input type="text" value=${element.items} class="unidades"></li>
            </ul>
            
        <button class="deleteBtn" id="${element.id}">Borrar</button>
    </div>
`
    cartItem.innerHTML += cartContent;
    divCart.appendChild(cartItem);

    cartItem.querySelector('.deleteBtn').addEventListener('click', () =>{
        deleteCartItem(element.id);
    })

    })

    const emptyCartBtn = document.createElement('button');
    emptyCartBtn.classList.add('btn')
    emptyCartBtn.classList.add('btn-light')
    
    emptyCartBtn.innerText = "Vaciar Carrito"
    divCart.appendChild(emptyCartBtn)

    emptyCartBtn.addEventListener('click', () =>{
        emptyCart()
    })
};

const deleteCartItem = (itemId) => {

    const item = cart.find(element => element.id == itemId); 
    const itemIndex = cart.indexOf(item);

   if(cart[itemIndex].items > 1){

    cart[itemIndex].items--

   }else{
    
    cart.splice(itemIndex, 1);
   }
    renderCart();

}

const emptyCart = () => {
    cart.length = 0;
    renderCart();
}

