function town() {
    output.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-sm-12 townPic">
                <img src="img/town.png" alt="town">
            </div>
            <div class="col-sm-12">
                <button onclick="shop()"><img class="shopButton" src="img/healthPotion.png" alt=""><br>Shop</button>
                <button onclick="questBoard()"><img class="shopButton" src="img/guard.png" alt="guard"><br>Quest</button>
                <button onclick="rest()"><img class="shopButton" src="img/bed.png" alt="bed"><br>Rest</button>
                <button onclick="mainMenu()"><img class="leaveImg" src="img/leave.png" alt="leaveSign"><br>Leave</button>
            </div>
        </div>
    </div>
    `
}

function questBoard() {
    if (quests.slimeQuest.active == false && quests.slimeQuest.turnedIn == false){
        output.innerHTML = `<img class="npc" src="img/guardBig.png" alt="guard">
                            <br>
                            <button onclick='slimeQuestDescription()'>Slay Those Slimes!</button>
                            <br>
                            <button onclick='town()'>Return To Town</button>
                            `;
    } 
    if (quests.slimeQuest.active == false && quests.slimeQuest.turnedIn == true && quests.slimeKingQuest.active == false && quests.slimeKingQuest.turnedIn == false){
        output.innerHTML = `<img class="npc" src="img/guardBig.png" alt="guard">
                            <br>
                            <button onclick='slimeKingQuestDescription()'>The Big Slime!</button>
                            <br>
                            <button onclick='town()'>Return To Town</button>`;
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

function shop() {
    output.innerHTML = `
    <img class="potionShopImg" src="img/potionShop.png" alt="wizard">
    <button onclick='buyHealthPotion()' class='Potion' id='health'><img src='img/healthPotion.png' alt='Health Potion'>Health 30c</button>
    <button onclick='buyManaPotion()' class='Potion' id='mana'><img src='img/manaPotion.png' alt='Mana Potion'>Mana 30c</button>
    <br>
    <button class="leaveShopButton" onclick="town()">Back to town</button>
    `
}

function slimeQuestDescription() {
    output.innerHTML = ''
    if (quests.slimeQuest.active == false && quests.slimeQuest.done == false) {
        var slimeQuestText = new Typed('#output', {
            strings: ['<h2>Slay Those Slimes!</h2><p class="questText">Those damn slimes are escaping the dungeon at a rapid rate! We need to reduce their population asap. I need you to go to the dungeon and slay 4 slimes for me! Do you think you can do it?</p><button class="questButton" onclick="slimeQuest()">Accept</button><button class="questButton" onclick="questBoard()">Decline</button>'],
            typeSpeed: 10,
            loop: false,
        });
    } else {
        slimeQuest();
    }
}

function slimeKingQuestDescription() {
    output.innerHTML = ''
    if (quests.slimeKingQuest.active == false && quests.slimeKingQuest.done == false) {
        var QuestText = new Typed('#output', {
            strings: ['<h2>The Big Slime!</h2><p class="questText">Those damn slimes keep coming! We had another scout party of 5 to go into the dungeon and only 1 came back... He keeps screaming the big slime the big slime! I need you to go in and investigate. Do you think you can do this?</p><button class="questButton" onclick="slimeKingQuest()">Accept</button><button class="questButton" onclick="questBoard()">Decline</button>'],
            typeSpeed: 10,
            loop: false,
        });
    } else {
        var QuestText = new Typed('#output', {
            strings: ['<h2>Hero!?</h2><p class="questText">So they are calling you a hero? Well that \"King Slime\" you killed the only thing between us and the other horrors of that dungeon! Collect your reward and just be ready for the horrors that await...</p><button class="questButton" onclick="slimeKingQuest()">Okay</button>'],
            typeSpeed: 10,
            loop: false,
        });
        update();
    }
    update();
}

function rest() {
    output.innerHTML = `
                        <img src="img/inn.png" alt="inn">
                        <p>Would you like to stay at the inn? It will cost 50c</p>
                        <button onclick="sleep()">Yes</button>
                        <button onclick="town()">No</button>
                        `
}

function sleep() {
    if (player.coins >= 50){
        player.coins -= 50;
        player.hp = player.maxHp;
        player.stats.mp = player.stats.maxMp;
        update();
    } else {
        console.log("You dont have enough gold!")
        return false;
    }
}