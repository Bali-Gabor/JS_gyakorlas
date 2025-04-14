var szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var keres = 9;

function kivalasztas(tomb, tulajdonsag){
    let i = 0;

    while(i < tomb.length && tomb[i] != tulajdonsag){
        i ++;
    }
    return i;
}

console.log('A keresett szám indexe: ' + kivalasztas(szamok, keres));
