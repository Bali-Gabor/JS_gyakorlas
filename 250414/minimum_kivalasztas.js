var szamok = [1, 2, 3, 4, 5, 6, -7, 8, 9, 10];
function minimum(tomb){
    let min = 0;
    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] < tomb[min]){
            min = i;
        }
    }
    return min;
}

console.log('A tömb legkisebb elemének indexe: ' + minimum(szamok) + ', értéke: ' + szamok[minimum(szamok)]);