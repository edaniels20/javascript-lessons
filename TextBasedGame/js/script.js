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
    if (quests.slimeQuest.active == false && quests.slimeQuest.done == false){
        output.innerHTML = "<p>What would you like to do?</p><p>Go To Town And Grab The Slime Slayer Quest!</p><h1 class='questNotification'>!</h1><button onclick='town()'><img class='town' src='img/town.png' alt='town'><br>Town</button>"
    } else if (quests.slimeQuest.active == true && quests.slimeQuest.done == false && quests.slimeQuest.turnedIn == false) {
        output.innerHTML = "<p>Go to the dungeon to slay the slimes!</p><button onclick='dungeon()'><img class='dungeon' src='img/dungeon.jpg' alt='dungeon'><br>Dungeon</button><button onclick='town()'><img class='town' src='img/town.png' alt='town'><br>Town</button>"
    } else if (quests.slimeQuest.active == false && quests.slimeQuest.turnedIn == false && quests.slimeQuest.done == true) {
        output.innerHTML = "<p>What would you like to do?</p><p>Go To Town And Turn in Slime Slayer Quest!</p><h1 class='questNotification'>?</h1><button onclick='dungeon()'><img class='dungeon' src='img/dungeon.jpg' alt='dungeon'><br>Dungeon</button><button onclick='town()'><img class='town' src='img/town.png' alt='town'><br>Town</button>"
    } else if (quests.slimeQuest.turnedIn == true && quests.slimeKingQuest.active == false && quests.slimeKingQuest.done == false) {
        output.innerHTML = "<p>What would you like to do?</p><p>Go To Town Grab The Big Slime Quest!</p><h1 class='questNotification'>!</h1><button onclick='dungeon()'><img class='dungeon' src='img/dungeon.jpg' alt='dungeon'><br>Dungeon</button><button onclick='town()'><img class='town' src='img/town.png' alt='town'><br>Town</button>"
    } else if (quests.slimeQuest.turnedIn == true && quests.slimeKingQuest.active == true && quests.slimeKingQuest.done == false) {
        output.innerHTML = "<p>What would you like to do?</p><p>Go To Dungeon and slay The King Slime! (Reccomended to go to town and buy potions!)</p><h1 class='questNotification'>!</h1><button onclick='dungeon()'><img class='dungeon' src='img/dungeon.jpg' alt='dungeon'><br>Dungeon</button><button onclick='town()'><img class='town' src='img/town.png' alt='town'><br>Town</button>"
    } else if (quests.slimeKingQuest.active == false && quests.slimeKingQuest.done == true) {
        output.innerHTML = "<p>What would you like to do?</p><p>You are a hero! You can go back to town and turn in the quest to Slay The King Slime!</p><h1 class='questNotification'>?</h1><button onclick='dungeon()'><img class='dungeon' src='img/dungeon.jpg' alt='dungeon'><br>Dungeon</button><button onclick='town()'><img class='town' src='img/town.png' alt='town'><br>Town</button>"

    }
    
    // else if (quests.slimeQuest.active == true && quests.slimeQuest.turnedIn == false || quests.slimeKingQuest.active == false && quests.slimeKingQuest.turnedIn == false){
    //     output.innerHTML = "<p>What would you like to do?</p><button onclick='dungeon()'><img class='dungeon' src='img/dungeon.jpg' alt='dungeon'><br>Dungeon</button><button onclick='town()'><img class='town' src='img/town.png' alt='town'><br>Town</button>"   
    // }
}