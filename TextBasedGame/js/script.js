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
    if (quests.slimeQuest.active == false){
        output.innerHTML = "<p>What would you like to do?</p><p>Go To Town And Grab The Slime Slayer Quest!</p><h1 class='questNotification'>!</h1><button onclick='town()'><img class='town' src='img/town.png' alt='town'><br>Town</button>"
    } else if (quests.slimeQuest.active == true || quests.slimeQuest.turnedIn == true) {
        output.innerHTML = "<p>What would you like to do?</p><button onclick='dungeon()'><img class='dungeon' src='img/dungeon.jpg' alt='dungeon'><br>Dungeon</button><button onclick='town()'><img class='town' src='img/town.png' alt='town'><br>Town</button>"
    } 
    
    // else if (quests.slimeQuest.active == true && quests.slimeQuest.turnedIn == false || quests.slimeKingQuest.active == false && quests.slimeKingQuest.turnedIn == false){
    //     output.innerHTML = "<p>What would you like to do?</p><button onclick='dungeon()'><img class='dungeon' src='img/dungeon.jpg' alt='dungeon'><br>Dungeon</button><button onclick='town()'><img class='town' src='img/town.png' alt='town'><br>Town</button>"   
    // }
}