

OnLoad(() => {
    // Get the table that we want to add data to
    var table = document.getElementById("tabValiderThemes");

    // Get the data from the server 
    // TODO:
    var data = {
        title: "gestion de pfe",
        description: "on veut cree une application full web qui va nous aider a faire la gestion des pfes",
        encadreur: "mohammed, ben snane et ahmed",
    }

    // Add the data to the table
    for (let i = 0; i < 6; i++) {
        table.innerHTML += "<tr><td><h4>" + data.title + "</h4><span>" + data.description + "</span></td><td>" + data.encadreur + "</td><td><button>accepter<span>&check;</span></button></td><td><button >rejeter<span>x</span></button></td><td><button>&gt;</button></td></tr>"

    }

    // Add style to the last child of the table, so it doesn't overlap the border radius with 
    // its bottom-radius property
    table.lastChild
        // Get all the tds in the last tr (table row)
        .childNodes[0].childNodes.forEach(e => {
            // Remove the bottom border
            e.style.borderBottom = "none";
        });

});