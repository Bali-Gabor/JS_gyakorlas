// 1. feladat

var Metro = new Array(12);


// 2. feladat

function getRndInteger(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function feltoltesRandomSzamokkal(tomb, min, max){

    for(let i = 0; i < tomb.length; i++){
        tomb[i] = getRndInteger(min, max);
    }
}

feltoltesRandomSzamokkal(Metro, 850, 990);


// 3. feladat

function utasszamkKiiras(tomb){

    for(let i = 0; i < tomb.length; i++){
        console.log(`7 óra ${i * 5} perc, utaslétszám: ${tomb[i]} fő`);
    }

}
console.log("3. feladat:");
utasszamkKiiras(Metro);


// 4. feladat


function atlagosUtasszam(tomb){
    let osszeg = 0;
    
    for(let i = 0; i < tomb.length; i++){
        osszeg += tomb[i];
    }

    return (osszeg / tomb.length).toFixed(0);
}

const atlag = atlagosUtasszam(Metro);

console.log("\n4. feladat:");
console.log(`Átlagos utasszám: ${atlag} fő`);


// 5. feladat

function legSzerelvenyek(tomb){
    let min = 0;
    let max = 0;

    for(let i = 1; i < tomb.length; i++){

        if(tomb[i] < tomb[min]){
            min = i;
        }

        if(tomb[i] > tomb[max]){
            max = i;
        }
    }
    console.log(`Legüresebb szerelvény 7 óra ${min * 5} perckor indult, ${tomb[min]} utassal.`);
    console.log(`Legzsúfoltabb szerelvény 7 óra ${max * 5} perckor indult, ${tomb[max]} utassal.`);
}

console.log("\n5. feladat:")
legSzerelvenyek(Metro);


// 6. feladat

function zsufoltSzerelveny(tomb){
    let i = 0;

    while(i < tomb.length && tomb[i] <= 975){
        i++;
    }

    if(i < tomb.length){
        return true;
    }
    else{
        return false;
    }
}

console.log("\n6. feladat:");
if(zsufoltSzerelveny(Metro)){
    console.log("Igen, volt zsúfolt szerelvény.");
}
else{
    console.log("Nem, nem volt zsúfolt szerelvény.");
}


// 7. feladat

function utasZsufolt(tomb){
    let darab = 0;

    for(let i = 0; i <  tomb.length; i++){

        if(tomb[i] >= 900){
            darab++;
        }
    }
    return darab;
}

console.log("\n7. feladat:");
console.log(`Az utasok szerint ${utasZsufolt(Metro)} túlzsúfolt indulás volt.`);


// 8. feladat

function elsoZsufolt(tomb){
    let i = 0;

    while(i < tomb.length && tomb[i] < 900){
        i++;
    }

    if(i < tomb.length){
        return i;
    }
    else{
        return -1;
    }
}

var elso = elsoZsufolt(Metro);

console.log("\n8. feladat:");

if(elso > -1){
    console.log(`7 óra ${elso * 5} perckor induló metró már zsúfolt.`);
}
else{
    console.log("Nem volt zsúfolt szerelvény.");
}


// 9. feladat


function ritkitas(tomb, adat){
    let atlagAlatti = [];

    for(let i = 0; i < tomb.length; i++){

        if(tomb[i] < adat){
            if(i <= 1){
                atlagAlatti[atlagAlatti.length] = (`7:0${i * 5}`);
            }
            else{
                atlagAlatti[atlagAlatti.length] = (`7:${i * 5}`);
            }
        }
    }

    console.log(atlagAlatti.join(', '));
    console.log(`Átlag alatti indulások száma: ${atlagAlatti.length} darab`);
    if(atlagAlatti.length > 6){
        console.log("A ritkítás felülvizsgálata szükséges.");
    }
    else{
        
        console.log("Nem szükséges a ritkítás.");
    }
}

console.log("\n9. feladat:");
ritkitas(Metro, atlag);