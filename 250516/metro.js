const Metro = new Array(12);

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

// 2. feladat

function feltolt(tomb, min, max){
    
    for(let i = 0; i < tomb.length; i++){
        tomb[i] = getRndInteger(min, max);
    }
}

feltolt(Metro, 850, 990);


// 3. feladat

function kiir(tomb){

    for(let i = 0;i < tomb.length; i++){
        console.log(`7 óra ${i * 5} perc, utasszám: ${tomb[i]} fő`);
    }
}

kiir(Metro);


// 4. feladat

function atlagosUtasszam(tomb){
    let osszeg = 0;

    for(let i = 0; i < tomb.length; i++){
        osszeg += tomb[i];
    }

    return (osszeg / tomb.length).toFixed(0);
}

const atlag = atlagosUtasszam(Metro);

console.log(`\nÁtlagos utasszám: ${atlag} fő`);


// 5. feladat

function legSzerelveny(tomb){
    let min = 0;
    let max = 0;

    for(let i = 1;i < tomb.length; i++){

        if(tomb[i] < tomb[min]){
            min = i;
        }

        if(tomb[i] > tomb[max]){
            max = i;
        }
    }

    console.log(`\nA legüresebb szerelvény 7 óra ${min * 5} perckor indult, ${tomb[min]} utassal.`);
    console.log(`A legzsúfoltabb szerelvény 7 óra ${max * 5} perckor indult, ${tomb[max]} utassal.`);
}

legSzerelveny(Metro);


// 6. feladat

function zsufolt(tomb){
    let i = 0;

    while(i < tomb.length && tomb[i] <= 975){
        i++;
    }

    if(i < tomb.length){
        console.log("\nIgen, volt zsúfolt szerelvény.");
    }
    else{
        console.log("\nNem, nem volt zsúfolt szerelvény.");
    }
}

zsufolt(Metro);


// 7. feladat

function utasZsufolt(tomb){
    let darab = 0;

    for(let i = 0; i < tomb.length; i++){

        if(tomb[i] >= 900){
            darab++;
        }
    }
    return darab;
}

console.log(`\nAz utasok szerint ${utasZsufolt(Metro)} túlzsúfolt indulás volt.`);


// 8. feladat

function elsoZsufolt(tomb){
    let i = 0;

    while(i < tomb.length && tomb[i] < 900){
        i++;
    }

    if(i < tomb.length){
        console.log(`\n7 óra ${i * 5} perckor induló metró már zsúfolt.`);
    }
    else{
        console.log(`\nNem volt zsúfolt szerelvény.`);
    }
}

elsoZsufolt(Metro);


// 9. feladat

function ritkitas(tomb, valtozo){
    let ritka = [];

    for(let i = 0; i < tomb.length; i++){

        if(tomb[i] < valtozo){
            if(i <= 1){
                ritka[ritka.length] = (`7:0${i * 5}`);
            }
            else{
                ritka[ritka.length] = (`7:${i * 5}`);
            }
        }
    }
    console.log(`\n${ritka.join(', ')}`);
    console.log(`Átlag alatti indulások száma: ${ritka.length} darab`);
    if(ritka.length <= 6){
        console.log("Nem szükséges a ritkítás.");
    }
    else{
        console.log("A menetrend felülvizsgálata szükséges.");
    }
}

ritkitas(Metro, atlag);