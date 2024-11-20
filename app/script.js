import jogarDado from "./dado.js";

const tabuleiro = document.querySelector('.tabuleiro');
const dado = document.querySelector('.dado');

const todasCasasVerdes = {
    id: ['verde-0', 'verde-1', 'verde-2', 'verde-3', 'verde-4', 'verde-5', 'verde-6', 'verde-7', 'verde-8','verde-9', 'verde-10', 'verde-11', 'verde-12', 'verde-13', 'verde-14', 'verde-15', 'verde-16', 'verde-17' ],
    grid: [
        '7 / 2 / 8 / 3',
        '7 / 3 / 8 / 4',
        '7 / 4 / 8 / 5',
        '7 / 5 / 8 / 6',
        '7 / 6 / 8 / 7', 
        '6 / 7 / 7 / 8',
        '5 / 7 / 6 / 8',
        '4 / 7 / 5 / 8', 
        '3 / 7 / 4 / 8',
        '2 / 7 / 3 / 8',
        '1 / 7 / 2 / 8',
        '1 / 8 / 2 / 9',
        '1 / 9 / 2 / 10',
        '8 / 2 / 9 / 3',
        '8 / 3 / 9 / 4',
        '8 / 4 / 9 / 5',
        '8 / 5 / 9 / 6',
        '8 / 6 / 9 / 7'
    ],
    classe: ['-save', '', '', '', '', '', '', '', '-save', '', '', '', '', '', '', '', '', ''

    ],
    cor: ['-verde', '', '', '', '', '', '', '', '-verde', '', '', '', '', '-verde', '-verde', '-verde', '-verde', '-verde'

    ]
}

const todasCasasVermelhas = {
    id: 
    ['vermelho-0', 'vermelho-1', 'vermelho-2', 'vermelho-3', 'vermelho-4', 'vermelho-5', 'vermelho-6', 'vermelho-7', 'vermelho-8','vermelho-9', 'vermelho-10', 'vermelho-11', 'vermelho-12', 'vermelho-13', 'vermelho-14', 'vermelho-15', 'vermelho-16', 'vermelho-17' ],

    grid:
    [
    '2 / 9 / 3 / 10',
    '3 / 9 / 4 / 10',
    '4 / 9 / 5 / 10',
    '5 / 9 / 6 / 10',
    '6 / 9 / 7 / 10',

    '7 / 10 / 8 / 11',
    '7 / 11 / 8 / 12',
    '7 / 12 / 8 / 13',
    '7 / 13 / 8 / 14',
    '7 / 14 / 8 / 15',
    '7 / 15 / 8 / 16',
    '8 / 15 / 9 / 16',
    '9 / 15 / 10 /16',

    '2 / 8 / 3 / 9',
    '3 / 8 / 4 / 9',
    '4 / 8 / 5 / 9',
    '5 / 8 / 6 / 9',
    '6 / 8 / 7 / 9'

    ],

    classe: [
    '-save', '', '', '', '', '', '', '', '-save', '', '', '', '', '', '', '', '', ''

    ],
    cor: [
    '-vermelho', '', '', '', '', '', '', '', '-vermelho', '', '', '', '', '-vermelho', '-vermelho', '-vermelho', '-vermelho', '-vermelho'

    ]
}

const todasCasasAzuis = {
    id: 
    ['azul-0', 'azul-1', 'azul-2', 'azul-3', 'azul-4', 'azul-5', 'azul-6', 'azul-7', 'azul-8','azul-9', 'azul-10', 'azul-11', 'azul-12', 'azul-13', 'azul-14', 'azul-15', 'azul-16', 'azul-17' ],

    grid:
    [
    '14 / 7 / 15 / 8',
    '13 / 7 / 14 / 8',
    '12 / 7 / 13 / 8',
    '11 / 7 / 12 / 8',
    '10 / 7 / 11 / 8',

    '9 / 6 / 10 / 7',
    '9 / 5 / 10 / 6',
    '9 / 4 / 10 / 5',
    '9 / 3 / 10 / 4',
    '9 / 2 / 10 / 3',
    '9 / 1 / 10 / 2',
    '8 / 1 / 9 / 2',
    '7 / 1 / 8 / 2',

    '14 / 8 / 15 / 9',
    '13 / 8 / 14 / 9',
    '12 / 8 / 13 / 9',
    '11 / 8 / 12 / 9',
    '10 / 8 / 11 / 9'

    ],

    classe: [
    '-save', '', '', '', '', '', '', '', '-save', '', '', '', '', '', '', '', '', ''

    ],
    cor: [
    '-azul', '', '', '', '', '', '', '', '-azul', '', '', '', '', '-azul', '-azul', '-azul', '-azul', '-azul'

    ]
}

const todasCasasLaranjas = {
    id: 
    ['laranja-0', 'laranja-1', 'laranja-2', 'laranja-3', 'laranja-4', 'laranja-5', 'laranja-6', 'laranja-7', 'laranja-8','laranja-9', 'laranja-10', 'laranja-11', 'laranja-12', 'laranja-13', 'laranja-14', 'laranja-15', 'laranja-16', 'laranja-17' ],

    grid:
    [
    '9 / 14 / 10 / 15',
    '9 / 13 / 10 / 14',
    '9 / 12 / 10 / 13',
    '9 / 11 / 10 / 12',
    '9 / 10 / 10 / 11',

    '10 / 9 / 11 / 10',
    '11 / 9 / 12 / 10',
    '12 / 9 / 13 / 10',
    '13 / 9 / 14 / 10',
    '14 / 9 / 15 / 10',
    '15 / 9 / 16 / 10',
    '15 / 8 / 16 / 9',
    '15 / 7 / 16 / 8',

    '8 / 14 / 9 / 15',
    '8 / 13 / 9 / 14',
    '8 / 12 / 9 / 13',
    '8 / 11 / 9 / 12',
    '8 / 10 / 9 / 11'
    ],

    classe: [
    '-save', '', '', '', '', '', '', '', '-save', '', '', '', '', '', '', '', '', ''

    ],
    cor: [
    '-laranja', '', '', '', '', '', '', '', '-laranja', '', '', '', '', '-laranja', '-laranja', '-laranja', '-laranja', '-laranja'

    ]
}

dado.addEventListener('click', () => {
    jogarDado();
})



function criarCasas(tabuleiro, todasCasas) { 
       
    for (let contador = 0; contador < todasCasas.id.length; contador++) {
        const casa = document.createElement('div');
        casa.classList.add(`tabuleiro__casa` + `${todasCasas.classe[contador]}`);
        casa.classList.add(`tabuleiro__casa` + `${todasCasas.cor[contador]}`);
        casa.style.gridArea = `${todasCasas.grid[contador]}`
        tabuleiro.append(casa);
        
    }
}


criarCasas(tabuleiro, todasCasasVerdes);
criarCasas(tabuleiro, todasCasasAzuis);
criarCasas(tabuleiro, todasCasasLaranjas);
criarCasas(tabuleiro, todasCasasVermelhas);