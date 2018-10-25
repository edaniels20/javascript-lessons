var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function ceaserCipher(){
    var input = document.getElementById("input").value;
    var shift = parseFloat(document.getElementById("shift").value);
    var whatever = document.getElementById("nameConventionsAreHard");
    var display = "";
    
    for (var i=0; i < input.length; i++) {
        var output = '';
        lowerCase.forEach(function(el, idx){
            if (input[i] == el) {
                output = lowerCase[idx + shift];
            }
            if(!output){
                output = ' ';
            }
        })
        lowerCase.forEach(function(el, idx){
        if (input[i] == el) {
            console.log((idx + shift) % 26)
            output = lowerCase[(idx + shift) % 26];
        }
        })


        display += output;
    }
    whatever.innerHTML = display;
    
}