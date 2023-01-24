/*
WordChooser Story!

Lag en liten historie med noen manglende ord. 
Lag en liste over ord som kan klikkes på 
- og la disse ordene fylle tomrommene i historien når de blir valgt.

For å løse oppgaven kan du bruke this, onclick, variabler og innerHTML

Dersom du har løst den uten MVC
- kan den også gjøres om til MVC som en ekstra utfordring
*/



// Model

/*
- Vi definerer tre variabler og setter verdien = "__"
- Da ser det ut som tomme steder. Disse verdiene kan nå endres.
*/

let firstChosenWord = "__";
let secondChosenWord = "__";
let thirdChosenWord = "__";

// View

/*
- I viewet har vi en p-tag (paragraph) hvor vi skriver en tekst og setter inn verdien 
    til de orda vi vil bytte ut. Hvis variablene endrer seg nå vil teksten vise det.

- Vi har så noen DIV-er med class for styling, onclick="function(this)" 
    er i DIV-ene for å endre verdiene til variablene.

- This gjør at DIV-en som this-en er i blir sendt inn som argument i choice parameteret.
    (tror jeg, dobbel sjekk)       
*/

updateView()
function updateView() {
    let html = /*HTML*/ `

    <h1 id="h1-style">Adjektivhistorie</h1>

    <h2 id="h2-style">
    Trykk på de... <br>
    BRUNE knappene for å velge ord nummer én <br>
    LILLA knappene for å velge ord nummer to <br>
    GRØNNE knappene for å velge ord nummer tre

    </h2>

    <p id="storyText">
        Det var en gang en ${firstChosenWord} fyr. 
        Han skulle ut å gjøre noe ${secondChosenWord} i skogen.
        Når han kom dit oppdaget han hvor ${thirdChosenWord} skogen egentlig var. 
    </p>

    <div class="choiceDiv1" onclick="firstWord(this)">rar</div>
    <div class="choiceDiv1" onclick="firstWord(this)">slimete</div>


    <div class="choiceDiv2" onclick="secondWord(this)">heftig</div>
    <div class="choiceDiv2" onclick="secondWord(this)">hårete</div>

    
    <div class="choiceDiv3" onclick="thirdWord(this)">kul</div>
    <div class="choiceDiv3" onclick="thirdWord(this)">sliten</div>


    `;

    document.getElementById('app').innerHTML = html;
}



// Controller


/*
- Disse funksjonene gjør følgende:

- Tar imot et parameter.
- Så settes det relevante ordet lik parameteret sin innerHTML.
- Så caller vi updateView() som gjør at den funksjonen kjører.
- Det gjør at
*/

function firstWord(choice) {
    firstChosenWord = choice.innerHTML;
    updateView();
}


function secondWord(choice) {
    secondChosenWord = choice.innerHTML;
    updateView();
}



function thirdWord(choice) {
    thirdChosenWord = choice.innerHTML;
    updateView();
}







