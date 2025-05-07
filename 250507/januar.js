function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// 1. feladat

var januar = new Array(31);

function homersekletFeltolt(tomb){

    for(let i = 0; i < tomb.length; i++){
        tomb[i] = getRndInteger(-10, 3);
    }
}

homersekletFeltolt(januar);


// 2. feladat

function homersekletKiir(tomb){

    for(let i = 0; i < tomb.length; i++){
        console.log(`Január ${i + 1}. ${tomb[i]} Celsius fok.`);
    }

    console.log('');
}

homersekletKiir(januar);


// 3. feladat

function januarKozephomerseklet(tomb){
    let osszeg = 0;

    for(let i = 0; i < tomb.length; i++){
        osszeg += tomb[i];
    }

    return osszeg / tomb.length;
}

console.log(`A januári középhőmérséklet: ${(januarKozephomerseklet(januar)).toFixed(1)} Celsius fok.\n`);


// 4. feladat

function fagymentesNap(tomb){
    let i = 0;
    let van = false;

    while(i < tomb.length && tomb[i] <= 0){
        i++;
    }

    if(i < tomb.length){
        van = true;
    }

    return van;
}

if(fagymentesNap(januar)){
    console.log('Volt fagymentes nap.\n');
}
else{
    console.log('Nem volt fagymentes nap.\n');
}


// 5. feladat

function elsoFagymentesNap(tomb){
    let i = 0;

    while(i < tomb.length && tomb[i] <= 0){
        i++;
    }

    if(i < tomb.length){
        console.log(`Az első fagymentes nap: Január ${i + 1}.\n`);
    }
    else{
        console.log('Nem volt fagymentes nap.\n');
    }
}

elsoFagymentesNap(januar);


// 6. feladat

function fagymentesNapokSzama(tomb){
    let darab = 0;

    for(let i = 0; i < tomb.length; i++){

        if(tomb[i] > 0){
            darab++;
        }
    }

    if(darab){
        console.log(`Fagymentes napok száma: ${darab}.\n`);
    }
    else{
        console.log('Nem volt fagymentes nap.\n');
    }
}

fagymentesNapokSzama(januar);


// 7. feladat

function legNapok(tomb){
    let min = 0;
    let max = 0;

    for(let i = 0; i < tomb.length; i++){

        if(tomb[i] < tomb[min]){
            min = i;
        }

        if(tomb[i] > tomb[max]){
            max = i;
        }
    }

    console.log(`A leghidegebb nap: Január ${min + 1}. ${tomb[min]} Celsius fok.\n`);
    console.log(`A legmelegebb nap: Január ${max + 1}. ${tomb[max]} Celsius fok.\n`);
}

legNapok(januar);