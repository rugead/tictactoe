const listen = require('good-listener');
const playerXO = document.querySelectorAll('#player');
const playerO = document.querySelector('#playerO');
let player = '';
let tictactoe = {};
let tic = [];
let tac = {};
let crossOne = {};
let crossTwo = {};
let columns = {};
let numberOfFields = 3;
let allFields = numberOfFields;
let item = Math.floor(Math.random() * allFields.length);
let targets = document.querySelectorAll('.box');

listen(playerXO, 'click', (e) => {
    player = e.target.value;
});

listen(targets, 'click', function (e) {
    let id = e.target.id;
    let zwei = id.charAt(1);
    let eins = id.charAt(0);

    if (player === '') {
        document.querySelector('#choose-player').style.display = 'none';
        player = 'x';
    }

    if ((findBox(e.target.id).innerHTML === 'x') || findBox(e.target.id).innerHTML === 'o') {
        return
    };

    writeToBox(id, player);
    settictactoe(id, eins, zwei, player);
    setCrossOne(id, eins, zwei, player);
    setCrossTwo(id, eins, zwei, player);
    // setColumns(id, eins, zwei, player);
    player = (player.indexOf('x') > -1) ? (player = 'o') : (player = 'x');
});

let findBox = (id) => {
    let box = document.getElementById(id);
    return box;
}

let writeToBox = (id, player) => {
    findBox(id).innerHTML = player;
}

let setCrossOne = (id, eins, zwei, player) => {
    if ((eins === zwei) && crossOne[player]) {
        crossOne[player].push(id);
    } else if (eins === zwei) {
        crossOne[player] = [id];
    }
}

// let row = tictactoe.filter(function () {
//   tictactoe[x][eins]
// })

let setCrossTwo = (id, eins, zwei, player) => {
    if ((parseInt(eins) + parseInt(zwei) === numberOfFields + 1) && crossTwo[player]) {
        crossTwo[player].push(id);
    } else if (parseInt(eins) + parseInt(zwei) === numberOfFields + 1) {
        crossTwo[player] = [id];
    }
}

function settictactoe(id, eins, zwei, player) {
    if (tictactoe[player]) {
        tictactoe[player]['eins'].push(id);
        tictactoe[player]['zwei'].push(id);
        tictactoe[player]['xxx'].push(eins);

    } else {
        tictactoe[player] = {
            eins: [id],
            zwei: [id],
            xxx: [eins]
        }
    }

    console.log('tictactoe: ', tictactoe);
    // console.log('cross:', crossOne, crossTwo);
    // console.log('----------------------');
};
