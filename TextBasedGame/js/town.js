function town() {
    output.innerHTML = "<p>What would you like to buy in town?</p><button onclick='buyHealthPotion()' class='Potion' id='health'><img src='img/healthPotion.png' alt='Health Potion'>Health</button><button onclick='buyManaPotion()' class='Potion' id='mana'><img src='img/manaPotion.png' alt='Mana Potion'>Mana</button><br><br><button onclick='mainMenu()'>Leave</button><br><button onclick='questBoard()'>Quest Listings</button>";
}

function questBoard() {
    if (quests.slimeQuest.active == false && quests.slimeQuest.turnedIn == false){
        output.innerHTML = "<button onclick='slimeQuest()'>Slay Those Slimes!</button><br><button onclick='town()'>Return To Town</button>";
    } if (quests.slimeQuest.active == false && quests.slimeQuest.turnedIn == true && quests.slimeKingQuest.active == false && quests.slimeKingQuest.turnedIn == false){
        output.innerHTML = "<button onclick='slimeKingQuest()'>The Big Slime!</button><br><button onclick='town()'>Return To Town</button>";
    }
}

function slimeQuest() {
    if (quests.slimeQuest.active == false && quests.slimeQuest.done == false){
        quests.slimeQuest.active = true;
        activeQuest.push(quests.slimeQuest)
    } else if (quests.slimeQuest.done == true && quests.slimeQuest.turnedIn == false){
        player.exp += quests.slimeQuest.expReward;
        console.log(quests.slimeQuest.expReward)
        player.coins += quests.slimeQuest.coins;
        questsDone++;
        quests.slimeQuest.turnedIn = true;
        activeQuest.length = 0;
        console.log("quest done")
        if (player.exp >= player.expToLevel){
            update();
            levelUp();
        }
    }
    update();
    town();
}

function slimeKingQuest() {
    if (quests.slimeKingQuest.active == false && quests.slimeKingQuest.done == false){
        quests.slimeKingQuest.active = true;
        activeQuest.push(quests.slimeKingQuest)
    } else if (quests.slimeKingQuest.done == true && quests.slimeKingQuest.turnedIn == false){
        player.exp += quests.slimeKingQuest.expReward;
        console.log(quests.slimeKingQuest.expReward)
        player.coins += quests.slimeKingQuest.coins;
        questsDone++;
        quests.slimeKingQuest.turnedIn = true;
        activeQuest.length = 0;
        console.log("quest done")
        if (player.exp >= player.expToLevel){
            update();
            levelUp();
        }
    }
    update();
    town();
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
