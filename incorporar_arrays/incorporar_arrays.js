
const products = [
    {
        id:1,
        name:'Shampoo Solido',
        price: 1300,
        modalidad: 'No retornable',
        stock: 60,
    },
    {
        id: 2,
        name: 'Acondicionador solido',
        price: 1200,
        modalidad: 'No retornable',
        stock: 50,
    },
    {
        id:3,
        name: 'Crema de caléndula',
        price: 1500,
        modalidad: 'retornable',
        stock: 30,
    },
    {
        id:4,
        name: 'Repelente natural',
        price: 1000,
        modalidad: 'Retornable',
        stock: 10,
    },
    {
        id:5,
        name: 'Pasta Dental',
        price: 900,
        modalidad: 'Retornable',
        stock: 15,
    }
]

let cart = [];
let quantity = 0;
let total = 0;
let selection = '';
let catalog = '';

const calculatePrice = () => {
    quantity = Number(prompt('¿Cuantas unidades de este producto desea?'));

    total += (products[selection-1].price * quantity);
    alert ('El total de su compra hasta el momento es $' + total);
    return total
}

const paymentMethod = () => {

    let payment = confirm("¿Desea abonar en cuotas?");

    if( payment === true){
        total = parseInt(total / 3);
        alert ("Puede abonar en 3 cuotas de $ " + total.toFixed(2) + " sin interes.\nNos contactaremos para coordinar el envio");
        alert ("Gracias por su compra!");
    }else{
        alert ("El total de su compra es de $ " + total + ".\nNos contactaremos para coordinar el envio");
        alert("Gracias por su compra!");
    }
}

const showTotal = () => {
    alert("el total de su compra hasta el momento es $" + total.toFixed(2));
    let continueShopping = confirm("¿Desea agregar mas productos?");

    if(continueShopping === true){
        addProducts();
    }else{
        paymentMethod();
    }

}  

const showProducts = () => {
    
    let index = 1;
    
    for (const element of products) {

        catalog += index++ + '-' + element.name + '\n';
    }
 return catalog
} 

const addProducts = () =>{

    do{
        selection = prompt("Seleccione el numero de producto para agregar al carrito\n" + catalog + "6-Continuar");

        if(selection == 6 ){
           showTotal(); 
        }else{
          cart.push(products[selection-1]);
          alert("El producto " + products[selection-1].name + " ($" + products[selection-1].price +" por unidad) ha sido agregado al carrito");
          calculatePrice();
           
        }

    }while(selection != 6)
 
}
    
showProducts();
addProducts();

