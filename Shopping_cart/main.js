/*
Bruk det du har lært om å legge inn data i arrays og hvordan å hente data fra arrays og lag en handlevogn!

Når du trykker på knappen "add to cart", tar du inn input fra brukeren og legger til og oppdaterer listen din i viewet. 

Det burde se slik ut:

ShoppingCart:

• apple
• banana
• peanutbutter

input:              knapp:
--------------     -------------
|peanutbutter|     |Add to cart |
--------------      ------------

*/


// Jeg tenker jeg må bruke array.push() her




// Model


let shoppingCart = [];


// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <h1>Skriv inn navnet på en vare du vil kjøpe i inputet</h1>
    <input id="itemInput" type="text">
    <button onclick="addItemToCart()">Trykk for å legge til vare i vogna</button>
    <br>Handlevogn: <br/>
    `;
    for(let i = 0; i <= shoppingCart.length - 1; i++) {
        html += `<li>${shoppingCart[i]}</li>`;
    }

    document.getElementById('app').innerHTML = html;
}



// Controller

function addItemToCart() {
    let input = document.getElementById('itemInput').value;
    shoppingCart.push(input)
    updateView();
}





