/*
Lag 3 image felt, som starter uten bildekilde (src).

Legg til 3 ulike bilder i prosjektet ditt. 

Lag en funksjon som setter kilden til det bildet du trykker på.

Lag en funksjon som returnerer navnet på et av de 3 bildene. 

Bruk this, parameter og if/else

[[image:picachu.png|alt]]
*/



// Model

// const - sånn at vi kan bruke constene istedenfor siden det er enklere.

const image1Source = "img/kaktus.jpg";
const image2Source = "img/lion.jpg";
const image3Source = "img/tekopp.jpg";


// View

/*
Class 
- sånn at vi kan style bildene

onclick 
- Vi har showRandomImage(this) funksjonen + image som parameter i funskjonen. 
- Derfor skjønner programmet at det er når vi trykker på bilde-plassene at vi skal se et random bilde.
 
- Vi har også showImageName(currentImage) inne i showRandomImage funksjonen.
- Dette gjør at vi ser tilhørende bildenavn når vi klikker på et bilde.
*/

updateView()
function updateView() {
    let html = /*HTML*/ `
    <p id="infoText">Trykk på boksene for å se tilfeldige bilder</p>
    
    <div id="imageName"></div>

    <img class="imageBox" onclick="showRandomImage(this)" alt="Bilde av noe"></img>
    <img class="imageBox" onclick="showRandomImage(this)" alt="Bilde av noe"></img>
    <img class="imageBox" onclick="showRandomImage(this)" alt="Bilde av noe"></img>
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

   





