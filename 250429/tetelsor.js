var szamok = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Összegzés tétele

function osszeg(tomb){
    let sum = 0;

    for(let i = 0; i < tomb.length; i ++){
        sum += tomb[i];
    }

    return sum;
}

console.log('A tömb elemeinek összege: ' + osszeg(szamok));

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

console.log('A tömb legnagyobb elemének indexe: ' + maximum(szamok));
console.log('A tömb legnagyobb elemének értéke: ' + szamok[maximum(szamok)]);

// Keresés tétele

var keres = 5;

function kereses(tomb, tulajdonsag){
    let index = 0;
    let i = 0;

    while(i < tomb.length && tomb[i] != tulajdonsag){
        i ++;
    }

    if(i < tomb.length){
        index = i;
    }
    else{
        index = -1;
    }

    return index;
}

console.log('A keresett szám indexe: ' + kereses(szamok, keres));

// Eldöntés tétele

var keres = 1;

function eldontes(tomb, tulajdonsag){
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

console.log('A keresett érték szerepel a tombben: ' + eldontes(szamok, keres));

// Minimum kiválasztás tétele

function minimum(tomb){
    let min = 0;

    for(let i = 1; i < tomb.length; i ++){
        
        if(tomb[i] < tomb[min]){
            min = i;
        }
    }

    return min;
}

console.log('A tömb legkisebb elemének indexe: ' + minimum(szamok));
console.log('A tömb legkisebb elemének értéke: ' + szamok[minimum(szamok)]);

// Kiválasztás tétele

var keres = 6;

function kivalasztas(tomb, tulajdonsag){
    let i = 0;

    while(tomb[i] != tulajdonsag){
        i ++;
    }

    return i;
}

console.log('A keresett érték indexe: ' + kivalasztas(szamok, keres));

// Megszámlálás tétele

function megszamlalas(tomb){
    let darab = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 0){
            darab ++;
        }
    }

    return darab;
}

console.log('A tömben található páros számok száma: ' + megszamlalas(szamok));

// Kiválogatás tétele

var paros_szamok = [];

function kivalogatas(tomb, uj_tomb){
    let szamlalo = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 0){
            uj_tomb[szamlalo] = tomb[i]
            szamlalo ++;
        }
    }
}

kivalogatas(szamok, paros_szamok);
console.log('A tömben található páros számok: ' + paros_szamok.join(', '));