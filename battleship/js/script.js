var coords = [];
function play(x, y) {
    if (coords.length == 0) {
        coords.push({x: x, y: y});
        console.log(coords)
    } else {
        for (i in coords) {
            if (coords[i].x != x && coords[i].y != y) {
                console.log("YOU FUCKING DID IT")
            } else {
                console.log("I WANT TO KILL MYSELF")
           }
        }
    }
}