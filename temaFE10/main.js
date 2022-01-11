let theTileInit = function() {

    let closeButtons = document.querySelectorAll('#popup .headerClose');
    let ourCloseButton = closeButtons[0];

    ourCloseButton.addEventListener('click', function() {

        let ourPopup = document.getElementById('popup');
        ourPopup.style.display = 'none';
    });

    let popup = document.getElementById('popup');
    popup.style.display = 'block';

    let despreLansari = function(response) {
        let detaliiLansari = response.data;
        let tabelLansari = document.getElementById("tabelLansari");
        for (let i = 0; i < detaliiLansari.length ; i++) {
            let row = tabelLansari.insertRow()
            let cell1 = row.insertCell();
            let cell2 = row.insertCell();
            let cell3 = row.insertCell();
            let cell4 = row.insertCell();
            let id = detaliiLansari[i].id;
            let flightNumber  = detaliiLansari[i].flight_number;
            let ships = detaliiLansari[i].ships.length;
            let date = detaliiLansari[i].date_utc;
            cell1.innerHTML = id
            cell2.innerHTML = flightNumber
            cell3.innerHTML = ships
            cell4.innerHTML = date
    
        };
    
    }

    axios.get('https://api.spacexdata.com/v4/launches').then(despreLansari);    
    
};
