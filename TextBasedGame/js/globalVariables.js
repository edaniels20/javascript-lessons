var updateStats = document.getElementById("outputStats");
var output = document.getElementById("output");
var mobHealth = document.getElementById("mobHealth");
var questsDone = 0;
var combat = false;
var activeQuest = [
    
]
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
var quests = {
    slimeQuest: {
        active: false,
        done: false,
        kills: 0,
        killsToFinish: 4,
        expReward: 50,
        coins: 50,
        turnedIn: false,
        mobToKill: 'slime'
    },
    slimeKingQuest: {
        active: false,
        done: false,
        kills: 0,
        killsToFinish: 1,
        expReward: 100,
        coins: 200,
        turnedIn: false,
        mobToKill: 'slimeKing'
    }
}
var player = {
    coins: 0,
    maxHp: 20,
    hp: 20,
    expToLevel: 100,
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