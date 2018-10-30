var output = document.getElementById("output");
var classes = {
    warrior: {
        ap: 3,
        char: 2,
        luk: 2,
        maxMp: 0,
        mp: 0,
        def: 6
    }, //Starting Stats will be ap: 3, char: 2, luk: 2, mp: 0, def: 6
    mage: {
        ap: 5,
        char: 2,
        luk: 0,
        maxMp: 40,
        mp: 40,
        def: 1
    }, //Starting Stats will be ap: 5 char: 2 luk: 0, mp: 40, def: 1 
    rogue: {
        ap: 2,
        char: 5,
        luk: 5,
        maxMp: 0,
        mp: 0,
        def: 3
    } //Starting Stats will be ap: 2 char: 5 luk: 5, mp: 0, def: 3
}
var player = {
    coins: 30,
    maxHp: 20,
    hp: 20,
    exp: 0,
    lvl: 1,
    class: "",
    inventory: {
        hpPotions: 0,
        mpPotions: 0,
    },
    stats: {
        ap: 0,
        char: 0,
        luk: 0,
        def: 0,
        maxMp: 0,
        mp: 0,
    }
}
var monsters = {
    normal: {
        slime: {
            coins: 5,
            maxHp: 5,
            hp: 5,
            ap: 1,
            exp: 10,
            lvl: 1
        },
        goblin: {
            coins: 8,
            maxHp: 8,
            hp: 8,
            ap: 2,
            exp: 15,
            lvl: 2
        },
        troll: {
            coins: 10,
            maxHp: 10,
            hp: 10,
            ap: 3,
            exp: 20,
            lvl: 3
        },
        spider: {
            coins: 15,
            maxHp: 15,
            hp: 15,
            ap: 4,
            exp: 20,
            lvl: 4
        },
        orc: {
            coins: 20,
            maxHp: 20,
            hp: 20,
            ap: 6,
            exp: 25,
            lvl: 5
        },
        dragon: {
            coins: 30,
            maxHp: 50,
            hp: 50,
            ap: 30,
            exp: 100,
            lvl: 8
        }
    },
    boss: {
        slimeKing: {
            coins: 20,
            maxHp: 40,
            hp: 40,
            ap: 5,
            exp: 25,
            lvl: 3
        },
        goblinLord: {
            coins: 40,
            maxHp: 50,
            hp: 50,
            ap: 10,
            exp: 100,
            lvl: 5
        },
        orcGod: {
            coins: 50,
            maxHp: 70,
            hp: 70,
            ap: 15,
            exp: 200,
            lvl: 9
        },
        dragonKing: {
            coins: 100,
            maxHp: 100,
            hp: 100,
            ap: 40,
            exp: 300,
            lvl: 15
        }
    }
}

function update() {
    var update = document.getElementById("outputStats");
    update.innerHTML = "<div class='container'><div class='row'><div class='col-sm-6 updateDivLeft'><img class='updateIcons' src='img/heart.png' alt='health'>: " + player.hp + "<br> <img class='updateIcons' src='img/manaHeart.png' alt='mana'>: " + player.stats.mp + "<br><img class='updateIcons' src='img/lvl.png' alt='lvl'>: " + player.lvl + "</div><div class='col-sm-6 updateDivRight'><img class='updateIcons' src='img/healthPotion.png' alt='healthPotion'>: " + player.inventory.hpPotions + "<br><img src='img/manaPotion.png' class='updateIcons' alt='manaPotions'>: " + player.inventory.mpPotions + "<br><img class='updateIcons' src='img/coin.png'>: " + player.coins + "</div></div></div>"; 
}

function loadFunc() {
    output.innerHTML = "<button onclick='play()'>PLAY</button>"
}
function classPicker() {
    event.preventDefault();
    var classChoice = document.querySelector('input[name=class]:checked').value;
    var classStats = classes[classChoice];
    player.stats.ap = 0;
    player.stats.char = 0;
    player.stats.def = 0;
    player.stats.luk = 0;
    player.stats.maxMp = 0;
    player.stats.mp = 0;
    if (player.stats.ap == 0) {
        player.class = classChoice;
        player.stats.ap += classStats.ap;
        player.stats.char += classStats.char;
        player.stats.def += classStats.def;
        player.stats.luk += classStats.luk;
        player.stats.maxMp += classStats.maxMp;
        player.stats.mp += classStats.mp;
    }
    console.log(player.stats.ap, player.stats.char, player.stats.def, player.stats.luk, player.stats.mp)
    update();
    classSure(classChoice);
}
function play() {
    event.preventDefault();
    // var classChoice = document.querySelector('input[name=class]:checked').value;

    output.innerHTML = "<form onsubmit='classPicker()'><ul class='characterSelection'><li><h2>Warrior</h2><label> <input type='radio' name='class' id='chooseClass' value='warrior'><img src='img/warrior.png' alt='warrior'></label><p>A warrior has high defence but low damage low chance to dodge.</p></li><li><h2>Rogue</h2><label> <input type='radio' name='class' id='chooseClass' value='rogue'><img src='img/rogue.png' alt='rogue'></label><p>A rogue has low defence high chance to dodge med damage</p></li><li><h2>Mage</h2><label> <input type='radio' name='class' id='chooseClass' value='mage'><img src='img/mage.png' alt='mage'></label><p>A mage has low defence high damage but no chance to dodge</p></li></ul><button type='submit'>Choose</button></form>"
    // output.innerHTML = "<p>Would you like to explore a dungeon?</p><br><button onclick='start()'>Yes</button><button onclick='location.href=\"http://bfy.tw/KbHY\"'>No</button>"
}

function classSure(classChoice){
    output.innerHTML = "<p>Are you sure you want to choose the " + classChoice + " class?</p><img src='img/" + classChoice + ".png'> <button onclick='mainMenu()'>Yes</button><button onclick='play()'>No</button>"
}

function start(){
    output.innerHTML = "<p>You run into a slime</p><img class=\"img-responsive\" src=\"img/slime.jpg\" alt=\"slime.jpg\"> <span>LVL</span>" + monsters.normal.slime.lvl + "<br><button onclick=\"combatMonster('normal', 'slime')\">Roll</button><button onclick='useHealthPotion()'>Heal</button><button onclick='useManaPotion()'>Mana</button>"
}

function mainMenu() {
    output.innerHTML = "<p>What would you like to do?</p><button onclick='start()'><img class='dungeon' src='img/dungeon.jpg' alt='dungeon'</button><p>Dungeon</p><button onclick='town()'><img class='town' src='img/town.png' alt='town'</button><p>Town</p>"
}

function town() {
    output.innerHTML = "<p>What would you like to buy in town?</p><button onclick='buyHealthPotion()' class='Potion' id='health'><img src='img/healthPotion.png' alt='Health Potion'>Health</button><button onclick='buyManaPotion()' class='Potion' id='mana'><img src='img/manaPotion.png' alt='Mana Potion'>Mana</button><br><br><button onclick='mainMenu()'>Leave</button>";
}

function buyHealthPotion() {
    if (player.coins >= 30) {
        player.coins -= 30;
        player.inventory.hpPotions ++
    } else {
        console.log("not enough coins")
        return false;
    }
    update()
}


function buyManaPotion() {
    if (player.coins >= 30) {
        player.coins -= 30;
        player.inventory.mpPotions ++
    }
    update()
}

function combatMonster(type, mob) {
    var damageMulti = Math.round(Math.random() * player.lvl + player.stats.ap);
    var monsterDamage;
    var levelDif = player.lvl - monsters[type][mob].lvl;
    var dodgeChance = Math.round(Math.random() * 10 + Number(player.stats.luk));
    if (player.class == "mage"){
        player.stats.mp -= 5;
        if (player.stats.mp <= 0) {
            prompt("Dont have enough mana for that must run away!")
            mainMenu();
        }
        if (player.stats.mp < 0){
            player.stats.mp = 0;
        }
    }

    if (player.stats.def == 1){
        monsterDamage = monsters[type][mob].ap * .9;
    } else if (player.stats.def == 3){
        monsterDamage = monsters[type][mob].ap * .7;
    } else {
        monsterDamage = monsters[type][mob].ap * .3;
        console.log("playing warrior")
    }

    if (monsterDamage < 1) {
        monsterDamage = 1;
    }
    monsterDamage = Math.round(monsterDamage);
    if (dodgeChance <= 11) {
        player.hp -= monsterDamage;
    }
    monsters[type][mob].hp -= damageMulti;
    // console.log(monsters[mob].hp)
    if (monsters[type][mob].hp <= 0){
        monsters[type][mob].hp = 0;
        monsters[type][mob].hp += monsters[type][mob].maxHp;
        if (levelDif < 3){
            player.exp += monsters[type][mob].exp;
        }
        player.coins += monsters[type][mob].coins;
        // mainMenu();
    }
    if (player.exp >= 100) {
        levelUp(monsters[type][mob].lvl)
    }
    if (player.hp <= 0){
        gameOver();
    }
    update();
}

function useHealthPotion() {
    if (player.hp < player.maxHp){
        if (player.inventory.hpPotions > 0){
            player.inventory.hpPotions -= 1
            player.hp += 40
            if (player.hp > player.maxHp) {
                player.hp = player.maxHp;
            }
        }
    }
    update();
}

function useManaPotion() {
    if (player.stats.mp < player.stats.maxMp){
        if (player.inventory.mpPotions > 0){
            player.inventory.mpPotions -= 1
            player.stats.mp += 40
            if (player.stats.mp > player.stats.maxMp) {
                player.stats.mp = player.stats.maxMp;
            }
        }
    }
    update();
}

function levelUp(monsterLevel) {
    var levelDif = player.lvl - monsterLevel;
    console.log(levelDif)
    player.exp = 0;
    player.lvl++;
    player.maxHp += 5;
    player.hp = player.maxHp;
}

function gameOver() {
    location.reload();
}
