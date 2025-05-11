const Januar = new Array(31);

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max -min + 1)) + min;
}
// 1. feladat

function napokFeltoltese(tomb, min, max){

    for(let i = 0; i < tomb.length; i++){
        tomb[i] = getRndInteger(min, max);
    }
}

napokFeltoltese(Januar, -10, 3);


// 2. feladat

function homersekletKiir(tomb){

    for(let i = 0; i < tomb.length;i++){
        console.log(`Január ${i + 1}. ${tomb[i]} Celsius fok`);
    }
}

homersekletKiir(Januar);
console.log('');

// 3. feladat

function kozephomerseklet(tomb){
    let osszeg = 0;

    for(let i = 0; i < tomb.length; i++){
        osszeg += tomb[i];
    }

    return osszeg / tomb.length;
}

console.log(`A januári középhőmérséklet: ${(kozephomerseklet(Januar)).toFixed(1)} Celsius fok.\n`);


// 4. feladat

function fagymentesEldont(tomb){
    let i = 0;
    let van = false;

    while(i < tomb.length && tomb[i] < 0){
        i++;
    }

    if(i < tomb.length){
        van = true;
    }

    return van;
}

if(fagymentesEldont(Januar)){
    console.log('Volt fagymentes nap.\n');
}
else{
    console.log('Nem volt fagymentes nap.\n');
}


// 5. feladat

function elsoFagymentesNap(tomb){
    let i = 0;
    let sorszam = 0;

    while(i < tomb.length && tomb[i] < 0){
        i++;
    }

    if(i < tomb.length){
        sorszam = i;
    }
    else{
        sorszam = -1;
    }

    return sorszam;
}

let elsoNap = elsoFagymentesNap(Januar);
if( elsoNap >= 0){
    console.log(`Első fagymentes nap: Január ${elsoNap + 1}.\n`);
}
else{
    console.log('Nem volt fagymentes nap.\n');
}


// 6. feladat

function fagymentesNapokSzama(tomb){
    let darab = 0;

    if(fagymentesEldont(tomb)){

        for(let i = 0; i < tomb.length; i++){

            if(tomb[i] >= 0){
                darab++;
            }
        }

        console.log(`Fagymentes napok száma: ${darab}\n`)
    }
    else{
        console.log('Nem volt fagymentes nap.\n');
    }
}

fagymentesNapokSzama(Januar);


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

    console.log(`A leghidegebb nap: Január ${min + 1}. ${tomb[min]} Celsius fok.\n`);
    console.log(`A legmelegebb nap: Január ${max + 1}. ${tomb[max]} Celsius fok.`);
}

legNapok(Januar);