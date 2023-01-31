/*
Bruk en for-løkke til å printe ut 2-gangen

resultatet bør da liste ut tallene:
2,4,6,8,10,12,14,16,18,20
*/




// Model 

let stopValue = 20;





// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <button onclick="TimesTwoTable()">Trykk for å se to-gangen</button>
    `;

    document.getElementById('app').innerHTML = html;
}




// Controller


function TimesTwoTable() {
    for(let counter = 2; counter <= stopValue; counter += 2){
        document.getElementById('app').innerHTML += `<li>` + counter + `</li>`;
    }
}






