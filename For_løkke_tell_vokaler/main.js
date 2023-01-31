/*
Vokaler: a, e, i, o, u, y, æ, ø, å

Lag en funksjon som teller opp antall vokaler i en string ved hjelp av en for-løkke

Bruk en variabel for hver av vokalene feks let aCounter = 0 som plusses oppover dersom du finner bokstaven i tekststringen
*/




// Model


/*
Bruker en variabel for hver av vokalene.
feks let aCounter = 0 som plusses oppover dersom programmet finner bokstaven i tekststringen.
*/

let aCounter = 0;
let eCounter = 0;
let iCounter = 0;
let oCounter = 0;
let uCounter = 0;
let yCounter = 0;
let æCounter = 0;
let øCounter = 0;
let åCounter = 0;





// View

/*
Setter opp standard updateView funksjon.

Lager et input med type tekst og id textInput. Id-en er der for å kunne referere til inputet seinere.

Så lager vi en button som kjører countVowelsInString funksjonen når vi trykker på den.
*/

updateView();
function updateView() {
  let html = /*HTML*/ `
    <input type="text" id="textInput">
    <button onclick="countVowelsInString()">Trykk for å se antall vokaler i stringen</button>
    `;

  document.getElementById('app').innerHTML = html;
}




// Controller


/*
Vi lager en funskjon "countVowelsInString".

text:
- Vi bruker id-en "textInput" fra inputet når vi lager en "text" variabel her.
- Vi setter text variabelen lik elementet med id-en "textInput" sin value.
- Da blir text variabelen lik det vi skriver i inputet.

result:
- Vi lager en ny variabel "result" og setter den lik den neste funksjonen vår: countVowels(text);
- Det gjør at når vi kaller på result vil det være det samme som å kjøre den neste funksjonen vår: countVowels(text);

Så sier vi at div-en med id "app" sitt innhold skal bli plusset på med verdien av result variabelen.
- Da vil vi få et visuelt resultat av countVowels funksjonen.
*/

function countVowelsInString() {
  let text = document.getElementById("textInput").value;
  let result = countVowels(text);

  document.getElementById('app').innerHTML += `<br>${result}`;
}



/*
Vi lager en funskjon: countVowels og gir den parameteret "text".

Vi lager en for løkke.
- Den vil ha telle fra 0, kjøre så lenge "i" (telleren vår) er mindre enn text sin lengde
  og vil øke med 1 per runde.

- Inne i for-løkka har vi et switch statement.
Uttrykket er "text[i].toLowerCase()" så det er det som vil bli vurdert.
- Vi har et case for hver variabel, f.eks er det en 'a', vil vi øke aCounter variablen med 1.
- Break er skille for hvert case.

Så vil koden returnere tekst og verdiene på de forskjellige Counter variablene.
Hvis det f.eks. var to o-er i teksten vil vi se det på siden vår.
*/



function countVowels(text) {
  for (let i = 0; i < text.length; i++) {
    switch (text[i].toLowerCase()) {
      case 'a':
        aCounter++;
        break;
      case 'e':
        eCounter++;
        break;
      case 'i':
        iCounter++;
        break;
      case 'o':
        oCounter++;
        break;
      case 'u':
        uCounter++;
        break;
      case 'y':
        yCounter++;
        break;
      case 'æ':
        æCounter++;
        break;
      case 'ø':
        øCounter++;
        break;
      case 'å':
        åCounter++;
        break;
    }
  }
  return `Antall a: ${aCounter}, Antall e: ${eCounter}, Antall i: ${iCounter}, Antall o: ${oCounter},
          Antall u: ${uCounter}, Antall y: ${yCounter}, Antall æ: ${æCounter}, Antall ø: ${øCounter}, 
          Antall å: ${åCounter}`;        
}
