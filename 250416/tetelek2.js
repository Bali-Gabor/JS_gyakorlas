var szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Minimum kiválasztása

function minimum(tomb){
    let min = 0;

    for(let i = 1; i < tomb.length; i ++){

        if(tomb[i] < tomb[min]){
            min = i;
        }
    }
    return min;
}

console.log('A tömb legkisebb elemének indexe: ' + minimum(szamok) + ' értéke: ' + szamok[minimum(szamok)]);


// Keresés tétele

var keres = 5;

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


// Kiválasztás tétele

var keres = 8;

function kivalasztas(tomb, tulajdonsag){
    let i = 0;
    let sorszam = 0;

    while(tomb[i] != tulajdonsag){
        i ++;
    }

    sorszam = i;
    return sorszam;
}

console.log('A keresett szám indexe: ' + kivalasztas(szamok, keres));


// Kiválogatás tétele

var paros_szamok = [];

function kivalogatas(tomb, uj_tomb){
    let szamlalo = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 0){
            uj_tomb[szamlalo] = tomb[i];
            szamlalo ++;
        }
    }
}

kivalogatas(szamok, paros_szamok);
console.log('Páros számok: ' + paros_szamok.join(', '));