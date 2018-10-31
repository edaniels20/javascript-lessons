//Primary On Load Function
function loadFunc() {
    output.innerHTML = "<button onclick='play()'>PLAY</button>"
}
//Outputs Classes on the screen
function play() {
    event.preventDefault();
    output.innerHTML = "<form onsubmit='classPicker()'><ul class='characterSelection'><li><h2>Warrior</h2><label> <input type='radio' name='class' id='chooseClass' value='warrior'><img src='img/warrior.png' alt='warrior'></label><p>A warrior has high defence but low damage low chance to dodge.</p></li><li><h2>Rogue</h2><label> <input type='radio' name='class' id='chooseClass' value='rogue'><img src='img/rogue.png' alt='rogue'></label><p>A rogue has low defence high chance to dodge med damage</p></li><li><h2>Mage</h2><label> <input type='radio' name='class' id='chooseClass' value='mage'><img src='img/mage.png' alt='mage'></label><p>A mage has low defence high damage but no chance to dodge</p></li></ul><button type='submit'>Choose</button></form>"
}
//Applies class Stats/Variables to Player object
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
//Confirms if the player wants to play selected class
function classSure(classChoice){
    output.innerHTML = "<p>Are you sure you want to choose the " + classChoice + " class?</p><img src='img/" + classChoice + ".png'> <button onclick='mainMenu()'>Yes</button><button onclick='clearStats(); play()'>No</button>"
}

function mainMenu() {
    output.innerHTML = "<p>What would you like to do?</p><button onclick='dungeon()'><img class='dungeon' src='img/dungeon.jpg' alt='dungeon'><br>Dungeon</button><button onclick='town()'><img class='town' src='img/town.png' alt='town'><br>Town</button>"
    if (quests.slimeQuest.active == false && quests.slimeQuest.turnedIn == false || quests.slimeKingQuest.active == false && quests.slimeKingQuest.turnedIn == false){
        output.innerHTML = "<p>What would you like to do?</p><button onclick='dungeon()'><img class='dungeon' src='img/dungeon.jpg' alt='dungeon'><br>Dungeon</button><button onclick='town()'><img class='town' src='img/town.png' alt='town'><br>Town</button><p>Go to town you have a quest to accept!</p>"
    }
}

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
