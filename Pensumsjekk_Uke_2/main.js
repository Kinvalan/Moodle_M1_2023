/*
Lag 3 image felt, som starter uten bildekilde (src).

Legg til 3 ulike bilder i prosjektet ditt. 

Lag en funksjon som setter kilden til det bildet du trykker på.

Lag en funksjon som returnerer navnet på et av de 3 bildene. 

Bruk this, parameter og if/else

[[image:picachu.png|alt]]
*/



// Model



const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

const image1Source = "img/kaktus.jpg";
const image2Source = "img/lion.jpg";
const image3Source = "img/tekopp.jpg";


// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <p id="infoText">Trykk på boksene for å se tilfeldige bilder</p>
    
    <div id="imageName"></div>

    <img id="image1" class="imageBox" onclick="showRandomImage(this)" alt="Bilde av noe"></img>
    <img id="image2" class="imageBox" onclick="showRandomImage(this)" alt="Bilde av noe"></img>
    <img id="image3" class="imageBox" onclick="showRandomImage(this)" alt="Bilde av noe"></img>
    `;

    document.getElementById('app').innerHTML = html;
}



// Controller


function showRandomImage(image) {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let currentImage;

    if(randomNumber == 1){
        image.src = image1Source;
        currentImage = image1Source;
    } 
    
    else if(randomNumber == 2) {
        image.src = image2Source;
        currentImage = image2Source;
    }

    else if(randomNumber == 3) {
        image.src = image3Source;
        currentImage = image3Source;
    }

    showImageName(currentImage);
}
/* 
Ved å kalle på updateView() funksjonen etter at showRandomImage() funksjonen har endret bildekilden,
resettes kilden tilbake til det opprinnelige. Derfor har vi ikke med updateView her.
*/

  
   
function showImageName(imageSource) {    
    let imageName = document.getElementById("imageName");
    imageName.innerHTML = imageSource;
}

   





