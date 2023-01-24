/*
Lag en webside der brukeren kan skrive inn navn og året brukeren ble født. 
Det skal da skrives ut en tekst på hva du heter og hvor gammel du er slik:

input your year of birth: 

input your name:

Result: 
Name: usersName
Age: usersAge
*/



    // Model

    let usersName;

    let birthYear;

    let currentYear = new Date().getFullYear();

    let age;

    let result;





    // View


    updateView()
    function updateView() {
        let html = /*HTML*/ `
            <label>Skriv inn navnet ditt:</label><br>
            <input id="nameInputId" type="text"><br>

            <label class="label-style">Skriv inn året du ble født:</label><br>
            <input id="birthYearInputId" type="number"><br>
        
            <button id="submitBtn" onclick="calculateAge()">Trykk for å se navn og alder</button>

            <div id="result"></div>
        `;

        document.getElementById('app').innerHTML = html;

    }



    // Controller

    /*
    Hvis updateView() var inni calculateAge(), ville det bety at oppdateringen av visningen skjedde hver gang logikken ble utført. 
    Ved å ha den utenfor,kan man kontrollere når og hvor ofte oppdateringen skjer,
    og unngå unødvendige oppdateringer av visningen.
    */

    function calculateAge() {
        usersName = document.getElementById('nameInputId').value;

        birthYear = document.getElementById("birthYearInputId").value;
        
        age = currentYear - birthYear;

        result = `Navn: ${usersName} <br> Alder: ${age}`

        document.getElementById('result').innerHTML = result;
        
    }

    updateView();








