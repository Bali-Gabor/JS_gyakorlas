// 1. feladat

const Bevetel = new Array(30);


// 2. feladat

function Feladat_02(tomb, min, max){

    for(let i = 0; i < tomb.length; i++){
        tomb[i] = Math.floor(Math.random() * (max - min  + 1)) + min;
    }
}

Feladat_02(Bevetel, 600, 2000);


// 3. feladat

function Feladat_03(tomb){

    for(let i = 0; i < tomb.length; i++){
        console.log(`November ${i + 1}., Bevétel: ${tomb[i]} ezer Ft.`);
    }
}

console.log("3.feladat:");
Feladat_03(Bevetel);


// 4. feladat

function Feladat_04(tomb){
    let osszeg = 0;

    for(let i = 0;i < tomb.length; i++){
        osszeg += tomb[i];
    }

    return osszeg / tomb.length;
}

var atlag = Feladat_04(Bevetel);
console.log("\n4. feladat:");
console.log(`Átlagbevétel: ${atlag.toFixed(0)} ezer Ft`);


// 5. feladat

function Feladat_05(tomb){
    let max = 0;

    for(let i = 1;i < tomb.length; i++){

        if(tomb[i] > tomb[max]){
            max = i;
        }
    }

    console.log(`Legforgalmasabb nap: November ${max + 1}., Bevétele: ${tomb[max]} ezer Ft.`);
}

console.log("\n5. feladat:");
Feladat_05(Bevetel);


// 6. feladat

function Feladat_06(tomb){
    let i = 0;

    while(i < tomb.length && tomb[i] <= 1500){
        i++;
    }

    if(i < tomb.length){
        console.log("Igen, volt ilyen nap.");
    }
    else{
        console.log("Nem, nem volt ilyen nap.");
    }
}

console.log("\n6. feladat:");
Feladat_06(Bevetel);


// 7. feladat

var felett = [];

function Feladat_07(tomb, adat, uj_tomb){

    for(let i = 0; i < tomb.length; i++){
        if(tomb[i] > adat){
            uj_tomb[uj_tomb.length] = (`November ${i + 1}.`);
        }
    }
}

console.log("\n7. feladat:");
Feladat_07(Bevetel, atlag, felett);

if(felett.length){
    console.log(felett.join(', '));
}
else{
    console.log('Nincs átlag feletti nap.');
}


// 8. feladat

function Feladat_08(tomb, adat){
    let darab = 0;

    for(let i = 0; i < tomb.length; i++){

        if(tomb[i] < (adat / 2)){
            darab++;
        }
    }
    return darab;
}

var napokSzama = Feladat_08(Bevetel, atlag);
console.log("\n8. feladat:");

if(napokSzama){
    console.log(`${napokSzama} napon nem érte el az átlag felét sem a bevétel.`);
}
else{
    console.log("Nem volt olyan nap, amikor az átlag felénél kevesebb lett volna a bevétel.");
}
