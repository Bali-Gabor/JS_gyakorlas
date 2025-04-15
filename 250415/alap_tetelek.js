var szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Kiválogatás tétele

var paratlan_szamok = [];

function kivalogat(tomb, uj_tomb){
    let szamlalo = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 1){
            uj_tomb[szamlalo] = tomb[i];
            szamlalo ++;
        }
    }
}

kivalogat(szamok, paratlan_szamok);
console.log('Páratlan számok: ' + paratlan_szamok.join(', '));


// Kiválastás tétele

var keres = 7;

function kivalaszt(tomb, tulajdonsag){
    let i = 0;

    while(i < tomb.length && tomb[i] != tulajdonsag){
        i ++;
    }

    return i;
}

console.log('A keresett szám indexe: ' + kivalaszt(szamok, keres));


// Keresés tétele

var keres = 3;

function kereses(tomb, tulajdonsag){
    let i = 0;
    let sorszam = 0;

    while(i < tomb.length && tomb[i] != tulajdonsag){
        i ++;
    }

    if(i < tomb.length){
        sorszam = i;
    }
    else{
        sorszam = -1;
    }

    return sorszam;
}

console.log('A keresett érték indexe: ' + kereses(szamok, keres));


// Minimun kiválasztás tétele

function minimum(tomb){
    let min = 0;

    for(let i = 1; i < tomb.length; i ++){

        if(tomb[i] < tomb[min]){
            min = i;
        }
    }
    return min;
}

console.log('A tömb legkisebb elemének indexe ' + minimum(szamok) + ' értéke ' + szamok[minimum(szamok)]);


// Megszámlálás tétele

function megszamol(tomb){
    let darab = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 0){
            darab ++;
        }
    }
    return darab;
}

console.log('A tömben található páros elemek száma: ' + megszamol(szamok));


// Eldöntés tétele

var keres = 10;

function eldont(tomb, tulajdonsag){
    let van = false;
    let i = 0;

    while(i < tomb.length && tomb[i] != tulajdonsag){
        i ++;
    }

    if(i < tomb.length){
            van = true;
    }
    
    return van;
}

console.log('A keresett érték benne van a tömbben: ' + eldont(szamok, keres));


// Maximum kiválasztás tétele

function maximum(tomb){
    let max = 0;

    for(let i = 1; i < tomb.length; i ++){

        if(tomb[i] > tomb[max]){
            max = i;
        }
    }

    return max;
}

console.log('A tömb legnagyobb elemének indexe ' + maximum(szamok) + ' értéke ' + szamok[maximum(szamok)]);


// Összegzés tétele

function osszegzes(tomb){
    let sum = 0;

    for(let i = 0;i < tomb.length; i ++){
        sum += tomb[i];
    }

    return sum;
}

console.log('A töm elemeinek összege: ' + osszegzes(szamok));