var januar = [];

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}


// 1. feladat

function feltolt(tomb){

    for(let i = 0; i < 31; i ++){
        tomb[i] = getRndInteger(-10 , 3);
    }
}

feltolt(januar);


// 2. feladat

function kiir(tomb){
    console.log('Hőmérsékletek:');

    for(let i = 0; i < tomb.length; i ++){
        console.log('\tJanuár ' + (i+1) + '. ' + tomb[i] + ' Celsius fok');
    }

    console.log('');
}

kiir(januar);


// 3. feladat

function kozephomerseklet(tomb){
    let sum = 0;

    for(let i = 0; i < tomb.length; i ++){
        sum += tomb[i];
    }

    return (sum / tomb.length).toFixed(1);
}

console.log('A januári középhőmérséklet: ' + kozephomerseklet(januar) + ' Celsius fok.\n');


// 4. feladat

function fagymentes(tomb){
    let i = 0; 
    let van = false;

    while(i < tomb.length && tomb[i] < 1){
        i ++;
    }

    if(i < tomb.length){
        van = true;
    }

    return van;
}

if(fagymentes(januar)){
    console.log('Volt fagymentes nap.\n');
}
else{
    console.log('Nem volt fagymentes nap.\n');
}


// 5. feladat

function elso_fagymentes(tomb){
    let i = 0;

    while(i < tomb.length && tomb[i] < 1){
        i ++;
    }

    if(i < tomb.length){
        console.log('Az első fagymentes nap: Január ' + (i + 1) + '.\n');
    }
    else{
        console.log('Nem volt fagymentes nap.\n');
    }
}

elso_fagymentes(januar);

// 6. feladat

function fagymentes_napok_szama(tomb){
    let darab = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] > 0){
            darab ++;
        }
    }

    return darab;
}

var sum = fagymentes_napok_szama(januar);

if(sum){
    console.log('Fagymentes napok száma: ' + sum + '\n');
}
else{
    console.log('Nem volt fagymentes nap.\n');
}


// 7. feladat

function leg_napok(tomb){
    let min = 0; 
    let max = 0;

    for(let i = 1; i < tomb.length; i ++){

        if(tomb[i] < tomb[min]){
            min = i;
        }

        if(tomb[i] > tomb[max]){
            max = i;
        }
    }

    console.log('A leghidegebb nap: Január ' + (min + 1) + '. ' + tomb[min] + ' Celsius fok.\n');
    console.log('A legmelegebb nap: Január ' + (max + 1) + '. ' + tomb[max] + ' Celsius fok.\n');
}

leg_napok(januar);