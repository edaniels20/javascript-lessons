function combatMonster(type, mob) {
    var damageMulti = Math.round(Math.random() * player.lvl + player.stats.ap);
    var monsterDamage;
    var levelDif = player.lvl - monsters[type][mob].lvl;
    var dodgeChance = Math.round(Math.random() * 10 + Number(player.stats.luk));
    updateMonsterHealth(type, mob)
    if (player.class == "mage"){
        player.stats.mp -= 5;
        if (player.stats.mp <= 0) {
            prompt("Dont have enough mana for that must run away!")
            combat = false;
            update();
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
        if (mob == "slime" && quests.slimeQuest.active == true) {
            quests.slimeQuest.kills++
            if(quests.slimeQuest.killsToFinish == quests.slimeQuest.kills) {
                quests.slimeQuest.done = true;
                quests.slimeQuest.active = false;
            }
        } else if (mob == 'slimeKing' && quests.slimeKingQuest.active == true) {
            quests.slimeKingQuest.kills++
            if(quests.slimeKingQuest.killsToFinish == quests.slimeKingQuest.kills) {
                quests.slimeKingQuest.done = true;
                quests.slimeKingQuest.active = false;
            }
        }
        if (levelDif < 3){
            player.exp += monsters[type][mob].exp;
        }
        player.coins += monsters[type][mob].coins;
        // mainMenu();
    }
    if (player.exp >= player.expToLevel) {
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
    player.exp = 0;
    player.lvl++;
    player.maxHp += 5;
    player.expToLevel += player.expToLevel * .5
    player.hp = player.maxHp;
}

function gameOver() {
    location.reload();
}