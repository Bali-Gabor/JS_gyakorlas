var szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var keres = 9;

function kereses(tomb, tulajdonsag){
    let i = 0; 
    let ertek = 0;

    while(i < tomb.length && tomb[i] != tulajdonsag){
        i ++;
    }

    if(i < tomb.length){
        ertek = i;
    }
    else{
        ertek = -1;
    }

    return ertek;
}

console.log('A keresett érték indexe: ' + kereses(szamok, keres));