import { cart } from "./cartFunctions.js"

const renderCartCheckOut = () => {

    let containerItemsCheckOut = document.getElementById('containerItemsCheckOut')
    const itemCheckOut = document.createElement('div')

    cart.forEach((element) => {

        const totalItem = element.price * element.amount

        const cartItem = `
        <div class="item ${element.id}">
            <span class="price">$${totalItem}</span>
            <p class="item-name">${element.name}</p>
            <p class="item-description">${element.amount}</p>
        </div>
        `

        itemCheckOut.innerHTML += cartItem;
        containerItemsCheckOut.appendChild(itemCheckOut);
    })

    const total = cart.reduce((acc, el) => acc + (el.price * el.amount), 0)
    let printTotal = document.createElement('div');
    printTotal.innerHTML = `
            <div class="total">Total<span class="price">$${total}</span></div>
    `

    containerItemsCheckOut.appendChild(printTotal)
    
}

const formData = () => {

    const continueBtn = document.getElementById('continueBtn')

    continueBtn.addEventListener('submit', (e) => {

        e.preventDefault();

        const name = document.getElementById('name').value 
        const lastName = document.getElementById('surname').value 
        const adress = document.getElementById('adress').value
        const telephone = document.getElementById('telephone').value
        const city = document.getElementById('city').value
        const postCode = document.getElementById('postCode').value 
        const email = document.getElementById('email').value

        const customerInfo = {
            name,
            lastName,
            adress,
            telephone,
            city,
            postCode,
            email
        }

        console.log(customerInfo);

        form.reset()

    })

    


}

export { renderCartCheckOut , formData}