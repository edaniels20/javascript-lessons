function update() {
    var questList = document.getElementById("activeQuest");
    updateStats.innerHTML = `<div class='container'>
                                <div class='row'><div class='col-sm-6 updateDivLeft'>
                                    <img class='updateIcons' src='img/heart.png' alt='health'>: ` + player.hp + `   
                                    <br> 
                                    <img class='updateIcons' src='img/manaHeart.png' alt='mana'>: ` + player.stats.mp + `
                                    <br>
                                    <img class='updateIcons' src='img/lvl.png' alt='lvl'>: ` + player.lvl + `
                                </div>
                                    <div class='col-sm-6 updateDivRight'>
                                        <img class='updateIcons' src='img/healthPotion.png' alt='healthPotion'>: ` + player.inventory.hpPotions + `
                                        <br>
                                        <img src='img/manaPotion.png' class='updateIcons' alt='manaPotions'>: ` + player.inventory.mpPotions + `
                                        <br>
                                        <img class='updateIcons' src='img/coin.png'>: ` + player.coins + `
                                    </div>
                                </div>
                            </div>`; 
    if (combat != true){
        mobHealth.innerHTML = "";
    }
    if (activeQuest.length <= 0){
        questList.innerHTML = "<p>You have no active Quests"
    } else {
        questList.innerHTML = "<p>You have killed " + activeQuest[0].kills + "/" + activeQuest[0].killsToFinish + " " + activeQuest[0].mobToKill + "</p>"
    }
};

function clearStats() {
    updateStats.innerHTML = "";
    console.log("dab")
};

function updateMonsterHealth(type, mob) {
    mobHealth.innerHTML = "<img src='img/heart.png' class='updateIcons' alt='heart'>: " + monsters[type][mob].hp;
};