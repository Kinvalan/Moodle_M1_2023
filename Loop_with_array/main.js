    /*
    Denne videoen: https://www.youtube.com/watch?v=-qqWpy1c9Ig&t=1s&ab_channel=GETAcademy 

    viser hvordan man looper igjennom et array - 
    og kan se ett og ett element i nettleserkonsollen. 

    Bruk en for loop og eksperimenter videre for å få til å heller vise dette i viewet.
    */




    // Model

    const pocketStuff = ['Briller', 'Tyggis', 'Mobil', 'Ørepropper'];
    
    let output = '';


    // View

    updateView()
    function updateView() {
        let html = /*HTML*/ ` 
        <button onclick="openPocket()">Se hva som er i pocketStuff arrayet</button>
        <p id="outputText"></p>
        `;

        document.getElementById('app').innerHTML = html;
    }



    // Controller



    function openPocket() { 
        for(let i = 0; i <= pocketStuff.length - 1; i++){
            output += `På runde ${i} ser vi: ${pocketStuff[i] + '.' + ' '}`;
        }
         document.getElementById('outputText').innerHTML = output;
    }

    // funker ikke med updateView av en grunn