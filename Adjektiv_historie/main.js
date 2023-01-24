/*
WordChooser Story!

For å løse oppgaven kan du bruke this, onclick, variabler og innerHTML

Lag en liten historie med noen manglende ord. 

Lag en liste over ord som kan klikkes på - og la disse ordene fylle tomrommene i historien når de blir valgt.
*/




// Model

const output = document.getElementById('storyOutput');

let firstWord = "___";
let secondWord = "___";
let thirdWord = "___";
let fourthWord = "___";

// View

buildStory()
function buildStory() { 
 

    output.innerHTML = /*HTML*/ `
    Det var en gang en ${firstWord} skapning som skulle bli ${secondWord}. 
    Den skulle kjøpe noe ${thirdWord}. Selgeren var veldig ${fourthWord}...

   
   
    <div class="startRow choiceBoxes"  onclick="chooseFirstWord(this)">grønn</div>
    <div class="choiceBoxes"  onclick="chooseFirstWord(this)">oransje</div>

    <div class="startRow choiceBoxes"  onclick="chooseSecondWord(this)">rar</div>
    <div class="choiceBoxes"  onclick="chooseSecondWord(this)">kul</div>

    <div class="startRow choiceBoxes"  onclick="chooseThirdWord(this)">slimete</div>
    <div class="choiceBoxes"  onclick="chooseThirdWord(this)">jålete</div>

    <div class="startRow choiceBoxes"  onclick="chooseFourthWord(this)">hårete</div>
    <div class="choiceBoxes"  onclick="chooseFourthWord(this)">sleip</div>
    `;



}


// Controller



function chooseFirstWord(choice){
    firstWord = choice.innerHTML;
    buildStory(); 
} 



function chooseSecondWord(choice){
    secondWord = choice.innerHTML;
    buildStory(); 
} 



function chooseThirdWord(choice){
    thirdWord = choice.innerHTML;
    buildStory(); 
} 



function chooseFourthWord(choice){
    fourthWord = choice.innerHTML;
    buildStory(); 
} 




