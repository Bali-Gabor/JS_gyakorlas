function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1. feladat

var Terulet = new Array(20);


// 2. feladat

function TeruletRandom(tomb, min, max){

    for(let i = 0; i < tomb.length; i++){
        tomb[i] = getRndInteger(min, max);
    }
}

TeruletRandom(Terulet, 100, 2000);


// 3. feladat

function TeruletKiir(tomb){
    
    for(let i = 0; i < tomb.length; i++){
        console.log(`${i + 1}. terület magassága: ${tomb[i]} méter`);
    }

    console.log('');
}

TeruletKiir(Terulet);


// 4. feladat

function SiksagAtlag(tomb){
    let osszeg = 0;
    let darab = 0;

    for(let i = 0; i < tomb.length; i++){

        if(tomb[i] < 200){
            osszeg += tomb[i];
            darab++;
        }
    }

    if(darab){
        console.log(`A síkságok átlagmagassága: ${(osszeg / darab).toFixed(1)}\n`);
    }
    else{
        console.log('Nics síksági adat.\n');
    }
    
}

SiksagAtlag(Terulet);


// 5. feladat

function HegyDarab(tomb){
    let darab = 0;

    for(let i = 0; i < tomb.length; i++){

        if(tomb[i] > 500){
            darab++;
        }
    }

    if(darab){
        console.log(`${darab} hegy található az adatbázisban.\n`);
    }
    else{
        console.log('Nem található hegy.\n');
    }
}

HegyDarab(Terulet);


// 6. feladat

function DombMin(tomb){
    let min = 0;
    let i = 0;

    while(i < tomb.length && (tomb[i] < 200 || tomb[i] > 500)){
        i++;
    }

    if(i < tomb.length){
        let min = i;

        for(let j = min + 1; j < tomb.length; j++){

            if(tomb[j] < tomb[min] && tomb[j] >= 200 && tomb[j] <= 500){
                min = j;
            }
        }
        console.log(`A legalacsonyabb domb: ${tomb[min]} méter magas.\n`);
    }
    else{
        console.log('Nincs domb az adatok között.\n');
    }
}

DombMin(Terulet);


// 7. feladat

function HegyMax(tomb){
    let i = 0;

    while(i < tomb.length && tomb[i] <= 500){
        i++;
    }

    if(i < tomb.length){
        let max = i;

        for(let j = max + 1; j < tomb.length; j++){

            if(tomb[j] > tomb[max]){
                max = j;
            }
        }
        
        console.log(`A vizsgált területek közül a legmagasabb: ${tomb[max]} méter.\n`);
    }
    else{
        console.log('Nincs hegy az adatok között.\n');
    }
}

HegyMax(Terulet);


// 8. feladat

function HegyEldont(tomb){
    let i = 0;
    let van = false;

    while(i < tomb.length && tomb[i] <= 1500){
        i++;
    }

    if(i < tomb.length){
        van = true;
    }

    return van;
}

if(HegyEldont(Terulet)){
    console.log('Igen, van 1500 méternél magasabb.\n');
}
else{
    console.log('Nincs 1500 méternél magasbb.\n');
}


// 9. feladat

var top = [];

function Top1500(tomb, uj_tomb){
    let szamlalo = 0;

    for(let i = 0; i < tomb.length; i++){
        
        if(tomb[i] > 1500){
            uj_tomb[szamlalo] = {sorszam: i + 1, magassag: tomb[i]};
            szamlalo++;
        }
    }
}

Top1500(Terulet, top);

console.log(top.map(obj=> `${obj.sorszam}. terület, ${obj.magassag} méter`).join('; '));


