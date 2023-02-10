/*
Bruk MVC, variabler, arrays og for-løkker for å løse oppgaven.

Handleliste 🛒

Lag din egen handleliste der man kan:

Vise alle varer som er lagt til i handlelisten
Kunne legge til ny vare
----------------------------------
Gjør:
-----
Slette en valgt vare
Endre navn på en valgt vare
*/


// Model

let shoppingCart = ['Melk', 'Appelsin', 'Ost'];

let inputValue = '';






// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <h1>Skriv inn navnet på en vare</h1>

    <input oninput="inputValue = this.value" id="itemInput" type="text">

    <p id="outputText"></p>

    <button onclick="addItem()">Legg til varen i handlelista</button> 

    

    <div>
        <br>Handleliste:<br/>
    </div>
    `;

    // For å legge til handlelista i viewet:

    for(let i = 0; i <= shoppingCart.length - 1; i++){
        html += /*HTML*/ `
        <li>
          ${shoppingCart[i]}
          <button onclick="changeChosenItem(${i})">Endre vare</button>
          <button onclick="deleteChosenItem(${i})">Slett vare</button>
        </li>
        `; 
         

    }

    document.getElementById('app').innerHTML = html;
}


// Controller

function addItem() {
    input = document.getElementById('itemInput').value;
    shoppingCart.push(inputValue);
    updateView();
}


function changeChosenItem(chosenItem){
    shoppingCart[chosenItem] = inputValue;
    updateView();
}


function deleteChosenItem(chosenItem){
    shoppingCart.splice(chosenItem, 1);
    updateView();
}






