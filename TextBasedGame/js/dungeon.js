function dungeon() {
    combat = false;
    update();
    output.innerHTML = `<p>What would you like to do in the dungeon?</p>
                        <button onclick='slime(); updateMonsterHealth("normal", "slime")'>Fight normal slime</button>
                        <br>
                        <button onclick='mainMenu();'>Return to menu</button>`;
    if (quests.slimeQuest.turnedIn == true) {
        output.innerHTML = `<p>What would you like to do in the dungeon?</p>
                            <button onclick='slime()'>Fight normal slime</button>
                            <button onclick='kingSlime();'>Fight King Slime!</button>
                            <br>
                            <button onclick='mainMenu()'>Return to menu</button>`;
    }
}

function slime(){
    combat = true;
    update();
    output.innerHTML = `<img class=\"img-responsive\" src=\"img/slime.png\" alt=\"slime.jpg\"> <span>LVL</span>` + monsters.normal.slime.lvl + `<br><button onclick=\"combatMonster('normal', 'slime')\">Attack</button><button onclick='useHealthPotion()'>Heal</button><button onclick='useManaPotion()'>Mana</button><br><button onclick="run(\'normal\', \'slime\'); dungeon();">Back to dungeon</button>`;
}

function kingSlime() {
    if (kingSlimeText <= 0){
        output.innerHTML = '';
        var QuestText = new Typed('#output', {
            strings: ['<p class="questText">You find parts of the scouts bodies all over the floor. Soon you are surounded by slimes. Hope seems bleek and it seems the only option that will lead to survival seems to be to run... The slimes begin to combine and form one giant mass. What will you do?</p><button class="questButton" onclick="fightingKingSlime()">Fight!</button><button class="questButton" onclick="dungeon()">Run!</button>'],
            typeSpeed: 10,
            loop: false,
        });
    } else {
        fightingKingSlime();
    }
    update();
}

function fightingKingSlime() {
    kingSlimeText++;
    combat = true;
    update();
    output.innerHTML = "<img class=\"img-responsive\" src=\"img/slimeking.png\" alt=\"slime.jpg\"> <span>LVL</span>" + monsters.boss.slimeKing.lvl + "<br><button onclick=\"combatMonster('boss', 'slimeKing')\">Attack</button><button onclick='useHealthPotion()'>Heal</button><button onclick='useManaPotion()'>Mana</button><br><button onclick=\"dungeon(); run(\'boss\', \'slimeKing\')\">Back to dungeon</button>"
}