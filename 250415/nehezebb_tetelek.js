var elso = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var masodik = [6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 15, 16];
var kimenet = [];

// Unió tétele

function unio(tomb1, tomb2, tomb_ki){
    let szamlalo = 0;

    for(let i = 0; i < tomb1.length; i ++){
        tomb_ki[szamlalo] = tomb1[i];
        szamlalo ++;
    }

    for(let j = 0; j < tomb2.length; j ++){
        let van = false;
            
        for(let k = 0; k < szamlalo; k ++){

            if(tomb_ki[k] == tomb2[j]){
                van = true;
                break;
            }
        }
            
        if(van != true){
                tomb_ki[szamlalo] = tomb2[j];
                szamlalo ++;
        }
    }
}

unio(elso, masodik, kimenet);
console.log('A U B = ' + kimenet.join(', '));


// Metszet tétele

var elso = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var masodik = [6, 7, 8, 9, 10, 11, 12, 2, 13, 14, 15, 10, 16];
var kimenet = [];

function metszet(tomb1, tomb2, tomb_ki){
    let szamlalo = 0;

    for(let i = 0; i < tomb1.length; i ++){
        let van = false;

        for(let j = 0; j < tomb2.length; j ++){

            if(tomb1[i] == tomb2[j]){

                for(let k = 0; k < szamlalo; k ++){

                    if(tomb_ki[k] == tomb1[i])
                        van = true;
                }
            if(van != true){
                tomb_ki[szamlalo] = tomb1[i];
                szamlalo ++;
            }
            }
        }
    }
}

metszet(elso, masodik, kimenet);
console.log('A ∩ B = ' + kimenet.join(', '));


// Különbség tétele

var elso = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 10];
var masodik = [6, 7, 8, 9, 10, 11, 12, 2, 13, 14, 15, 10, 16];
var kimenet = [];

function kulonbseg(tomb1, tomb2, tomb_ki){
    let szamlalo = 0;

    for(let i = 0; i < tomb1.length; i ++){
        let van = false;

        for(let j = 0;j < tomb2.length; j ++){

            if(tomb1[i] == tomb2[j]){
                van = true;
                break;
            }
        }
        if(van != true){
            tomb_ki[szamlalo] = tomb1[i];
            szamlalo ++;
        }
    }
}

kulonbseg(elso, masodik, kimenet);
console.log('A / B = ' + kimenet.join(', '));