/*
Man har altså if/else dersom det kun er to betingelser vi har å forholde oss til.  
Dersom vi har flere enn 2, kan vi bruke noe som heter else if. 

Vi ser for oss at vi ønsker å vise et tilfeldig dyr ved hjelp av verdien til en random verdi 
(rng er et tilfeldig tall fra 0 - 3).
*/

// Model


let rng = Math.floor(Math.random() * 4);



// View


updateView();
function updateView() {
    let html = /*HTML*/ ` 
    <button id="animalButton" onclick="showRandomAnimal()">Trykk for å se et random dyr</button>
    <button id="refreshButton" onclick="refreshPage()">Trykk her for å prøve igjen</button>
    <img id="animal-img" src="">
    <p id="animal-name"></p>

    <audio id="dog-audio" src="SFX/sniffing-dog.mp3"></audio>
    <audio id="cat-audio" src="SFX/Minecraft-cat.mp3"></audio>
    <audio id="hamster-audio" src="SFX/hamster-dance.mp3"></audio>
    <audio id="horse-audio" src="SFX/horse-race.mp3"></audio>
    `;

    document.getElementById('app').innerHTML = html;
}



/*
Funksjonen "showRandomAnimal" under er ikke helt ideel. 
Det hadde vært lettere å bruke et array og latt hver element være de forskjellige bildene.

f.eks:

let rng = Math.floor(Math.random() * 4);

const images = ["pictures/dog.png", "pictures/cat.png", "pictures/hamster.png", "pictures/horse.png"];

function changeImage() {
  const image = document.getElementById("animal-img");
  image.src = images[rng];
}

Men vi bruker If her, pga jeg skal lære mer om bruk av if-setninger.
*/



// Controller


function showRandomAnimal() {

    // Dog 
    if (rng == 0) {
        document.getElementById('animal-img').src = "pictures/dog.png";

        document.getElementById('animal-name').innerHTML = "Du møtte på Doggy!";

        document.getElementById("dog-audio").play();
    }

    // Cat
    else if (rng == 1) {
        document.getElementById('animal-img').src = "pictures/cat.png";
        
        document.getElementById('animal-name').innerHTML = " Du møtte på Meowy!";

        document.getElementById("cat-audio").play();
    }

    // Hamster
    else if (rng == 2) {
        document.getElementById('animal-img').src = "pictures/hampter.png";
        
        document.getElementById('animal-name').innerHTML = "Du møtte på Hampter!";

        document.getElementById("hamster-audio").play();
    }

    // Horse
    else {
        document.getElementById('animal-img').src = "pictures/horse.png";
        
        document.getElementById('animal-name').innerHTML = "Du møtte på Horsey!";

        document.getElementById("horse-audio").play();
    }

    // updateView(); av en eller annen grunn funker det ikke med updateView her...
}


function refreshPage() {
    location.reload();
}



