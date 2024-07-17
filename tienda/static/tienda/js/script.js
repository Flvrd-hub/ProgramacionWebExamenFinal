let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active'); 
    cartaItem.classList.remove('active');
    searchForm.classList.remove('active');
}

let cartaItem = document.querySelector('.carta-items-container');

document.querySelector('#carta-btn').onclick = () =>{
    cartaItem.classList.toggle('active');
    navbar.classList.remove('active');  
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#buscar-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');  
    cartaItem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');  
    cartaItem.classList.remove('active');
    searchForm.classList.remove('active');
}

// Selecciona el div con el id user-btn
var userIcon = document.getElementById('user-btn');
// Agrega el evento de clic al div
userIcon.addEventListener('click', function() {
    // Redirige a la página login.htm
    window.location.href = 'login.html';
});


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");    
});

loginBtn.addEventListener('click', () =>
{
    container.classList.remove("active");    
});


//carrito de compras

document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('carta-btn');
    const cartContainer = document.querySelector('.carta-items-container');
    const addToCartButtons = document.querySelectorAll('.boton-item');
    const cart = document.getElementById('cart');
    const total = document.getElementById('total');

    let cartItems = [];

    cartBtn.addEventListener('click', () => {
        cartContainer.classList.toggle('active');
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const item = event.target.closest('.item');
            const itemName = item.querySelector('.titulo-item').innerText;
            const itemPrice = item.querySelector('.precio').innerText.replace('$', '').replace(' CLP', '').replace('.', '').replace(',', '');

            const cartItem = {
                name: itemName,
                price: parseFloat(itemPrice)
            };

            cartItems.push(cartItem);
            updateCart();
        });
    });

    function updateCart() {
        cart.innerHTML = '';
        let totalAmount = 0;
        
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.innerText = `${item.name} - $${item.price.toLocaleString()}`;
            cart.appendChild(li);

            totalAmount += item.price;
        });

        total.innerText = totalAmount.toLocaleString();
    }
}); 

