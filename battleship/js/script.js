var alphabet = ["A", "B", "C", "D", "E", "F", "G"]
var playerCoords = [];
var computerCoords = [];
var result = false;
var x = 0;
var y = 0;
var output = document.getElementById("output");
var computerPosition = {
    x: Math.round(Math.random() * 6 + 1),
    y: Math.round(Math.random() * 6 + 1)
}
var playerPosition = "";
var turn = true;
var hit = false;
function start() {
    output.innerHTML = "";
    x = 0;
    y = 0;
    for (var i = 0; i < 49; i++){
        if (x % 7 == 0) {
            y++
            x = 1
        } else {
            x++
        }
        output.innerHTML += `<div class="box">
                                <button onclick="setPosition(` + x + ", " + y +`)" class="buttons">`+ alphabet[x - 1] + y +`</button>
                            </div>`
        console.log(x, y)
    }
    output.innerHTML += '<button onclick="playing()" class="confirm">Confirm</button>'
}
function playing(){
    if (playerPosition != "") {
        output.innerHTML = "";
        x = 0;
        y = 0;
        for (var i = 0; i < 49; i++){
            if (x % 7 == 0) {
                y++
                x = 1
            } else {
                x++
            }
            var addOne = i + 1
            output.innerHTML += `<div class="box">
                                    <button onclick="play(` + x + ", " + y +`)" class="buttons">`+ alphabet[x - 1] + y +`</button>
                                </div>`
            console.log(x, y)
        }
    } else {
        alert("You didnt assign a spot");
        start();
    }
}
function setPosition(x, y){
    playerPosition = {x: x, y: y}
}
function play(x, y) {
    turn = true;
    if (playerCoords.length === 0) {
        playerCoords.push({x: x, y: y});
        isHit(x, y, computerPosition);
        computerTurn();
    } else {
        for(var i = 0; i < playerCoords.length; i++){
            result = compareObjs(playerCoords[i], {x: x, y: y});
            if(result) {
                break;
            }
        };
        if (result) {
            console.log("Already chose that boss");
        } else {
            playerCoords.push({x: x, y: y});
            isHit(x, y, computerPosition)
            computerTurn();
        }
    }
}
function computerTurn() {
    turn = false;
    x = Math.round(Math.random() * 6 + 1);
    y = Math.round(Math.random() * 6 + 1);
    if (computerCoords.length === 0) {
        computerCoords.push({x: x, y: y});
        isHit(x, y, playerPosition)
    } else {
        for(var i = 0; i < computerCoords.length; i++){
            result = compareObjs(computerCoords[i], {x: x, y: y});
            if(result) {
                break;
            }
        };
        if (result) {
            console.log("Already chose that boss");
            computerTurn();
        } else {
            computerCoords.push({x: x, y: y});
            isHit(x, y, playerPosition)
        }
    }
}
function isHit(x, y, type){
    if (x === type.x && y === type.y) {
        hit = true;
        if (turn) {
            alert("You won!")
            location.reload();
        } else {
            alert("You Lost!")
            location.reload();
        }
    } else {
        hit = false;
        console.log(hit)
    }
}
function compareObjs(obj1, obj2) {
    for (const key in obj1) {
        var ar1 = obj1[key];
        var ar2 = obj2[key];

        if (ar1 !== ar2) {
            return false;
        }
    }
    return true;
}
