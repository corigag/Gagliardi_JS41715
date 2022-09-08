
const product1 = "Shampoo solido";
const product2 = "Acondicionador solido";
const product3 = "Crema de dia";
const product4 = "Pasta dental";
const product5 = "Repelente natural";

let price = '';
let total = 0;
let quantity = 0;


const calculatePrice = (price) => {
    quantity = Number(prompt('¿Cuantas unidades de este producto desea?'))
    total += (price * quantity)

    return total
}

const showTotal = () => {

    alert("el total de su compra hasta el momento es $" + total.toFixed(2))
    let continueShopping = confirm("¿Desea agregar mas productos?")

    if(continueShopping === true){
        buyProducts()
    }else{
        paymentMethod()
    }

}  

const paymentMethod = () => {

    let payment = confirm("¿Desea abonar en cuotas?")

    if( payment === true){
        total = parseInt(total / 3)
        alert ("Puede abonar en 3 cuotas de $ " + total.toFixed(2) + " sin interes.\nNos contactaremos para coordinar el envio")
        alert ("Gracias por su compra!")
    }else{
        alert ("El total de su compra es de $ " + total + ".\nNos contactaremos para coordinar el envio")
        alert("Gracias por su compra!")
    }
}

const buyProducts = () => {

    let productSelection = '';
    do{
        productSelection =Number(prompt("Seleccione el numero de producto para agregar al carrito " +
        "\n1- " + product1 + "\n2- " + product2 + "\n3- " + product3 + "\n4- " + product4 + "\n5- " + product5 + "\n6- Continuar")) 
        
        switch(productSelection){
            case 1:
                price = 1000
                calculatePrice(price);
                alert(product1 + " por "+ quantity + " uni. ha sido agregado al carrito");
                break;
            case 2: 
                price = 1200
                calculatePrice(price);
                alert(product2 + " por "+ quantity + " uni. ha sido agregado al carrito");
                break;
            case 3:
                price = 1700
                calculatePrice(price);
                alert(product3 + " por "+ quantity + " uni. ha sido agregado al carrito");
                break;
            case 4: 
                price = 900
                calculatePrice(price);
                alert(product4 + " por "+ quantity + " uni. ha sido agregado al carrito");
                break;
            case 5:
                price = 1100
                calculatePrice(price);
                alert(product5 + " por "+ quantity + " uni. ha sido agregado al carrito");
                break;
            case 6:
                showTotal()
                break;
            default:
                alert('Por favor, ingrese una opcion valida');
                break;
           
        }

        
    }while(productSelection != 6)

   return total;
    
}

buyProducts()




