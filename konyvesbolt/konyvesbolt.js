var Bevetel = new Array (30);


// 2. feladat

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Feladat_02(tomb, min, max){

    for(let i = 0; i < tomb.length; i++){
        tomb[i] = getRndInteger(min, max);
    }
}

Feladat_02(Bevetel, 600, 2000);


// 3. feladat

function Feladat_03(tomb){

    for(let i = 0; i < tomb.length; i++){
        console.log(`November ${i + 1}., Bevétel: ${tomb[i]} ezer Ft.`);
    }
}

Feladat_03(Bevetel);


// 4. feladat

function Feladat_04(tomb){
    let osszeg = 0;

    for(let i = 0;i < tomb.length; i++){
        osszeg += tomb[i];
    }
    
    return (osszeg / tomb.length).toFixed(0);
}

var atlag = Feladat_04(Bevetel);

console.log(`\nÁtlagbevétel: ${atlag} ezer Ft.`);


// 5. feladat

function Feladat_05(tomb){
    let max = 0;

    for(let i = 1; i < tomb.length; i++){

        if(tomb[i] > tomb[max]){
            max = i;
        }
    }

    console.log(`\nLegforgalmasabb nap: November ${max + 1}., bevétel: ${tomb[max]} ezer Ft.`);
}

Feladat_05(Bevetel);


// 6. feladat

function Feladat_06(tomb){
    let i = 0;
    let van = false;

    while( i < tomb.length && tomb[i] <= 1500){
        i++;
    }

    if(i < tomb.length){
        van = true;
    }

    return van;
}

if(Feladat_06(Bevetel)){
    console.log("\nIgen volt ilyen nap.");
}
else{
    console.log("\nNem, nem volt ilyen nap.");
}


// 7. feladat

var napok = [];

function Feladat_07(tomb, uj_tomb, valtozo){
  
    for(let i = 0; i < tomb.length; i++){

        if(tomb[i] > valtozo){
            uj_tomb[uj_tomb.length] = (`November ${i + 1}.`);
        }
    }
}

Feladat_07(Bevetel, napok, atlag);

if(napok.length){
    console.log("");
    console.log(napok.join(', '));
}
else{
    console.log("\nNem volt ilyen nap.");
}


// 8. feladat

function Feladat_08(tomb, adat){
    let darab = 0;

    for(let i = 0; i < tomb.length; i++){

        if(tomb[i] < (adat / 2)){
            darab++;
        }
    }
    if(darab){
        console.log(`\n${darab} ilyen nap volt.`);
    }
    else{
        console.log("\nNem volt ilyen nap.");
    }
}

Feladat_08(Bevetel, atlag);