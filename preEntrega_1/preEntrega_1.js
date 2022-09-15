const products = [
    {
        id:1,
        name:'shampoo solido',
        price: 1300,
        modalidad: 'No retornable',
        stock: 60,
    },
    {
        id: 2,
        name: 'acondicionador solido',
        price: 1200,
        modalidad: 'No retornable',
        stock: 50,
    },
    {
        id:3,
        name: 'crema facial',
        price: 1500,
        modalidad: 'retornable',
        stock: 30,
    },
    {
        id:4,
        name: 'repelente natural',
        price: 1000,
        modalidad: 'Retornable',
        stock: 10,
    },
    {
        id:5,
        name: 'pasta dental',
        price: 900,
        modalidad: 'Retornable',
        stock: 15,
    }
];



let cart = [];
let quantity = 0;
let total = 0;
let selection = '';
let catalogue = '';
let totalCart = 0;



const displayProducts = () => {
    
    let index = 1;
    
    for (const element of products) {

        catalogue += index++ + '-' + element.name + '\n';
    }
 return catalogue

};



const showCart = () => {
    let selectedItems = '';
    let index = 1;
    for (const element of cart) {
        
        selectedItems += index++ + ' - ' + element.name + "\n" ;
    };

    totalCart = cart.reduce((acc,el) => acc + el.price,0);

    alert(`Su carrito es:\n${selectedItems}\nEl total de su compra es: $${totalCart}`) 
    
    return totalCart
};



const addProducts = () =>{

    do{
        selection = prompt("Seleccione el numero de producto para agregar al carrito\n" + catalogue + "6-Continuar");

        if(selection == 6 ){
           continueShopping(); 
        }else{
          cart.push(products[selection-1]);
          alert("El producto " + products[selection-1].name + " ($" + products[selection-1].price +" por unidad) ha sido agregado al carrito");
          //calculatePrice();
           
        }

    }while(selection != 6)
 
};



const continueShopping = () => {
   
    let continueConfirmation = confirm("¿Desea agregar mas productos?");

    if(continueConfirmation === true){
        addProducts();
    }else{
        showCart();
    }

 };



const applyDiscount = () => {
    
    let discountCode = prompt("Ingrese su codigo de descuento")

    if(discountCode == "hampi20"){
        let discount = totalCart * 0.2
        let totalWithDiscount = totalCart - discount
        alert(`El monto total a pagar con el 20% de descuento es $ ${totalWithDiscount.toFixed(2)}`)
    }else{
        alert('Su codigo de descuento no es valido.')
    }

};



const paymentMethod = () => {
    
    let payment = confirm("¿Desea abonar en cuotas?");
    
    if(payment === true){
        let fees = parseInt(prompt("Seleccione para abonar en 3 o 6 cuotas") ) 
        
        if(fees === 3){
            
            totalCart = totalCart / 3
            alert ("Puede abonar en 3 cuotas de $ " + totalCart.toFixed(2) + " sin interes.\nNos contactaremos para coordinar el envio");
            
        }else if(fees === 6){
            
            totalCart = totalCart / 6
            alert ("Puede abonar en 6 cuotas de $ " + totalCart.toFixed(2) + " sin interes.\nNos contactaremos para coordinar el envio");
        }
        
    }else{
        alert ("El total de su compra es de $ " + totalCart + ".\nNos contactaremos para coordinar el envio");
    }
};



const deleteItem = () => {
    
    let selectItem = prompt("Escriba el nombre del producto que desea eliminar");

    let deleteThisItem = cart.find(element => element.name == selectItem)

    if(cart.includes(deleteThisItem)){
        
        cart.splice((cart.indexOf(deleteThisItem)),1)
        console.log(cart)
    }else{
        alert("El producto que quiere eliminar no existe")
    }

};



const optionsMenu = () => {

    let options = '';
    do{
        
        options = parseInt(prompt('Bienvenide a la tienda online de Hampi Yura!\nDigite un numero para comenzar\n 1-Seleccionar productos\n 2-Mostrar carrito\n 3-Aplicar descuento\n 4-Pago en cuotas\n 5-Eliminar producto del carrito\n 0-Salir'));

        switch(options){

            case 1:
                displayProducts();
                addProducts();
                break;
            case 2:
                showCart();
                break;
            case 3:
                applyDiscount();
                break;
            case 4:
                paymentMethod();
                break;
            case 5:
                deleteItem();
                break;
            case 0:
                alert('Gracias por elegir Hampi Yura');
                break;
            default:
                alert('Por favor, elija una opcion valida para continuar');
                break;
            }
        }while(options != 0)

}


optionsMenu();