var output = document.getElementById("output");
var player = {
    coins: 0,
    maxHp: 20,
    hp: 20,
    ap: 1,
    exp: 0,
    lvl: 1
}
var monsters = {
    slime: {
        coins: 1,
        maxHp: 5,
        hp: 5,
        ap: 1,
        exp: 10,
        lvl: 1
    },
    goblin: {
        coins: 4,
        maxHp: 8,
        hp: 8,
        ap: 2,
        exp: 15,
        lvl: 2
    },
    troll: {
        coins: 6,
        maxHp: 10,
        hp: 10,
        ap: 3,
        exp: 18,
        lvl: 3
    },
    spider: {
        coins: 6,
        maxHp: 15,
        hp: 15,
        ap: 4,
        exp: 20,
        lvl: 4
    },
    orc: {
        coins: 6,
        maxHp: 20,
        hp: 20,
        ap: 6,
        exp: 25,
        lvl: 5
    },
    dragon: {
        coins: 15,
        maxHp: 50,
        hp: 50,
        ap: 30,
        exp: 100,
        lvl: 10
    }
}
var bosses = {
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
function play() {
    console.log("playing");
    event.preventDefault();
    output.innerHTML = "<p>Would you like to explore a dungeon?</p><br><button onclick='start()'>Yes</button><button onclick='location.href=\"http://bfy.tw/KbHY\"'>No</button>"
}
function start(){
    output.innerHTML = "<p>You run into a slime</p><img class=\"img-responsive\" src=\"img/slime.jpg\" alt=\"slime.jpg\"> <span>LVL</span>" + monsters.slime.lvl + "<br><button onclick=\"combatMonster('slime')\">Roll</button>"
}
function combatMonster(mob) {
    var damageMulti = Math.round(Math.random() * player.lvl + player.ap);
    var monsterDamage = monsters[mob].ap;
    monsters[mob].hp -= damageMulti;
    console.log(player.hp, monsters[mob].hp)
    // console.log(monsters[mob].hp)
    player.hp -= monsterDamage;
    if (monsters[mob].hp <= 0){
        monsters[mob].hp = 0;
        monsters[mob].hp += monsters[mob].maxHp;
        player.exp += monsters[mob].exp;
        player.coins += monsters[mob].coins;
        console.log(player.coins)
    }
    if (player.exp >= 100) {
        levelUp()
    }
    console.log(player.exp)
}
function levelUp() {
    player.exp = 0;
    player.lvl++;
    console.log(player.lvl)
}
