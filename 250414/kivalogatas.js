// Kiválogatás tétele

var szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var paratlan = [];

function kivalogatas(tomb, uj_tomb){
    let szamlalo = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 1){
            uj_tomb[szamlalo] = tomb[i];
            szamlalo ++;
        }
    }
}

kivalogatas(szamok, paratlan);
console.log('A tömben található pártlan számok: ' + paratlan.join(', '));