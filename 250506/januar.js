var januar = [];

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// 1. feladat

function feltoltHomersekletekkel(tomb){

    for(let i = 0; i < 31; i++){
        tomb[i] = getRndInteger(-10, 3);
    }
}

feltoltHomersekletekkel(januar);


// 2. feladat

function homersekletKiiras(tomb){
    console.log('Hőmérsékletek:\n');

    for(let i = 0; i < tomb.length; i++){
        console.log(`\tJanuár ${i+1}. ${tomb[i]} Celsius fok`);
    }

    console.log('');
}

homersekletKiiras(januar);


// 3. feladat

function kozephomerseklet(tomb){
    let osszeg = 0;

    for(let i = 0; i < tomb.length; i++){
        osszeg += tomb[i];
    }

    return osszeg / tomb.length;
}

console.log(`A januári középhőmérséklet: ${(kozephomerseklet(januar)).toFixed(1)} Celsius fok.\n`);


// 4. feladat

function fagymentesEldont(tomb){
    let van = false;
    let i = 0;

    while(i < tomb.length && tomb[i] <= 0){
        i++;
    }

    if(i < tomb.length){
        van = true;
    }

    return van;
}

if(fagymentesEldont(januar)){
    console.log('Volt fagymentes nap.\n');
}
else{
    console.log('Nem volt fagymentes nap.\n');
}


// 5. feladat

function elsoFagymentesNap(tomb){
    let i = 0;
    let sorszam = -1;

    while(i < tomb.length && tomb[i] <= 0){
        i++;
    }

    if(i < tomb.length){
        sorszam = i;
    }

    return sorszam;    
}

var elso = elsoFagymentesNap(januar);

if( elso != -1){
    console.log(`Első fagymentes nap: Január ${elsoFagymentesNap(januar) + 1}.\n`);
}
else{
    console.log('Nem volt fagymentes nap.\n');
}


// 6. feladat

function fagymentesNapokSzama(tomb){
    let darab = 0;

    for(let i = 0; i < tomb.length; i++){

        if(tomb[i] > 0){
            darab++;
        }
    }

    return darab;
}

var mentesDarab = fagymentesNapokSzama(januar);

if(mentesDarab){
    console.log(`Fagymentes napok száma: ${mentesDarab}\n`);
}
else{
    console.log('Nem volt fagymentes nap.\n');
}


// 7. feladat

function legNapok(tomb){
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

    console.log(`Leghidegebb nap: Január ${min + 1}. ${tomb[min]} Celsius fok.\n`);
    console.log(`Legmelegebb nap: Január ${max + 1}. ${tomb[max]} Celsius fok.`);
}

legNapok(januar);