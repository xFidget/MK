//Task #0 
let player1 = {
    name: 'Scorpion',
    hp: 100,
    img: '',
    weapon: ['sword', 'bow', 'arcanaMace', 'angelSlayer', 'shadowMorn']
}
let player2 = {
    name: 'Sonya',
    hp: 100,
    img: '',
    weapon: ['sword', 'bow', 'arcanaMace', 'angelSlayer', 'shadowMorn']
}
function attack(name) {
    console.log(name + ' - fight')
}
//Task #1
function createPlayer() {
    let player = document.createElement('player');
    let progressbar = document.createElement('progressbar');
    let character = document.createElement('character');
    let live = document.createElement('live');
    let name = document.createElement('name');
    let img = document.createElement('img');

    player.classList.add(player1);
    player.appendChild(progressbar);
    player.appendChild(character);

    player.progressbar.appendChild(live);
    live.style = 'width: 100%';
    player.progressbar.appendChild(name);
    name.innerText = 'Sonya';
    
    img.src = 'scorpion.gif';
    player.character.appendChild(img);
}
const $root = document.querySelector('.root');

document.getElementById