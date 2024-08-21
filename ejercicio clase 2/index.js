let categoria = parseInt(prompt('ingrese categoria 1 2 3 para salarios de usd 1000, sd 1500'));
let subcategoria = prompt(prompt('elija la subcategoria'));

let sueldo = 1000;

if (categoria == 1) {
    sueldo = 1000;
}
else if (categoria == 2) {
    sueldo = 1500;
}
else if (categoria == 3) {
    sueldo == 2000;
}

switch(subcategoria.toUpperCase()) {
    case 'A':
    sueldo *= 1.5;
    break;

    case 'B':
    sueldo *= 2;
    break;

    case 'C':
    sueldo *= 2.5;
    break;
}

alert (`El sueldo es de ${sueldo}`);