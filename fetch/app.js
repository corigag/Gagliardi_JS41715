import { addToCart } from "./src/cartFunctions.js";


const renderProducts = (products) => {

    const containerBtn = document.getElementById('containerBtn');
    const btnBack = document.createElement('button');
    btnBack.innerHTML= `
        <button type="button" class="btn btn_leermas border-3 px-5 py-2"><a href="index.html" class="text-decoration-none text-reset">Volver atrás</a></button>
       
    `
    containerBtn.appendChild(btnBack);

    //capturo contenedor productos
    const mainContainer = document.getElementById('mainContainer');

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
        
        <p class="card-text valor">$${element.price}</p>
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

export { renderProducts };