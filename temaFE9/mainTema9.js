let selectieLansari = function () {
    let despreLansari = function(response) {
        let detaliiLansari = response.flight_number
        let 1Lansare = detaliiLansari[0]
        let 2Lansare = detaliiLansari[1]
        let 3Lansare = detaliiLansari[2]
        let dateLansari = document.getElementById("tabelLansari");
        let row = dateLansari.insertRow()
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        cell1.innerHTML = 1Lansare
        cell2.innerHTML = 2Lansare
        cell3.innerHTML = 3Lansare
    }
   axios.get('https://api.spacexdata.com/v4/launches').then(despreLansari);
}


