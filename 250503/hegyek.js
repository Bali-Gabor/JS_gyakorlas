function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 1. feladat

var Terulet = [];


// 2. feladat

function TeruletRandom(tomb){
    
    for(let i = 0; i < 20; i ++){
        tomb[i] = getRndInteger(100, 2000);
    }
}

TeruletRandom(Terulet);


// 3. feladat

function TeruletKiir(tomb){

    for(let i = 0; i < tomb.length; i ++){
        console.log(`${i + 1}. terület magassága: ${tomb[i]} méter`)
    }

    console.log('');
}

TeruletKiir(Terulet);


// 4. feladat

function SiksagAtlag(tomb){
    let osszeg = 0;
    let darab = 0;
    let i = 0;

    while(tomb[i] >= 200){
        i ++;
    }

    if(i < tomb.length){

        for(let j = 0; j < tomb.length; j ++){

            if(tomb[j] < 200){
                osszeg += tomb[j];
                darab ++;
            }
        }

        console.log(`A síkságok átlagmagassága: ${(osszeg / darab).toFixed(1)} méter.\n`);
    }
    else{
        console.log('Nincs síkság az adatok között.\n');
    }
}

SiksagAtlag(Terulet);


// 5. feladat

function HegyDarab(tomb){
    let darab = 0;

    for(let i = 0;i < tomb.length; i ++){

        if(tomb[i] > 500){
            darab ++;
        }
    }

    return darab;
}

console.log(`${HegyDarab(Terulet)} hegy van.\n`);


// 6. feladat

function DombMin(tomb){
    let min = 0;

    while(tomb[min] < 200 || tomb[min] > 500){
        min ++;
    }

    if(min < tomb.length){

        for(let i = 0; i < tomb.length; i ++){

            if(tomb[i] >= 200 && tomb[i] <= 500 && tomb[i] < tomb[min]){
                min = i;
            } 
        }

        console.log(`A legalacsonyabb domb ${tomb[min]} méter magas.\n`);
    }
    else{
        console.log('Nem található domb az adatbázisban.\n');
    }
}

DombMin(Terulet);



// 7. feladat

function HegyMax(tomb){
    let max = -1;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] > 500 && (max == -1 || tomb[i] > tomb[max])){
            max = i;
        }
    }

    if(max != -1){
        console.log(`A vizsgált területek közül a legmagasabb ${tomb[max]} méter.\n`);
    }
    else{
        console.log('Nem található hegy az adatbázisban.\n');
    }
}

HegyMax(Terulet);


// 8. feladat

function HegyEldont(tomb){
    let van = false;
    let i = 0;

    while(i < tomb.length && tomb[i] <= 1500){
        i ++;
    }

    if(i < tomb.length){
        van = true;
    }

    if(van){
        console.log('Igen, van 1500 méternél magasabb hegy.\n');
    }
    else{
        console.log('Nincs 1500 méternél magasabb hegy.\n');
    }
}

HegyEldont(Terulet);


// 9. feladat
var top = [];

function Top1500(tomb, uj_tomb){
    let szamlalo = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] > 1500){
            uj_tomb[szamlalo] = {sorszam : (i + 1), magassag : tomb[i]};
            szamlalo ++;
        }
    }
}

Top1500(Terulet, top);

console.log(top.map(obj => `${obj.sorszam}. terület, ${obj.magassag} méter`).join('; '));