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
                            <button onclick='kingSlime(); updateMonsterHealth("boss", "slimeKing")'>Fight King Slime!</button>
                            <br>
                            <button onclick='mainMenu()'>Return to menu</button>`;
    }
}

function slime(){
    combat = true;
    update();
    output.innerHTML = `<img class=\"img-responsive\" src=\"img/slime.png\" alt=\"slime.jpg\"> <span>LVL</span>` + monsters.normal.slime.lvl + `<br><button onclick=\"combatMonster('normal', 'slime')\">Roll</button><button onclick='useHealthPotion()'>Heal</button><button onclick='useManaPotion()'>Mana</button><br><button onclick='dungeon()'>Back to dungeon</button>`;
}

function kingSlime() {
    combat = true;
    update();
    output.innerHTML = "<img class=\"img-responsive\" src=\"img/slimeking.png\" alt=\"slime.jpg\"> <span>LVL</span>" + monsters.boss.slimeKing.lvl + "<br><button onclick=\"combatMonster('boss', 'slimeKing')\">Roll</button><button onclick='useHealthPotion()'>Heal</button><button onclick='useManaPotion()'>Mana</button><br><button onclick='dungeon()'>Back to dungeon</button>"
}