function vowelTracker() {
    var vowels = ["a", "e", "i", "o", "u"];
    var cons = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'];
    var letterCount = {};
    event.preventDefault();
    var display = document.getElementById("display");
    var input = document.getElementById("input").value.toLowerCase();
    var vowelCount = 0;
    var consCounter = 0;
    var letterOutput = "";
    for (var i=0; i < input.length; i++){
        vowels.forEach(function(el){
            if (input[i] == el) {
                vowelCount++;
                if (letterCount.hasOwnProperty(el)) {
                    letterCount[el] += 1;
                } else {
                    letterCount[el] = 1
                }
            }
        });
        cons.forEach(function(el){
            if (input[i] === el) {
                consCounter++;
                if (letterCount.hasOwnProperty(el)) {
                    letterCount[el] += 1;
                } else {
                    letterCount[el] = 1
                }
            }
        });
        console.log(letterCount)
    }
    for (key in letterCount){
        letterOutput += key + "=" + letterCount[key] + ', '
    }
    display.innerHTML = "Vowels" + vowelCount + "<br> Cons " + consCounter + "<br> Letter count is " + letterOutput;
    // output();
}
// function output(){
//     var output;
//     vowelsUsed.forEach(function(el, idx){
//         vowelValue = vowelsUsed[idx];
//         output += "You used the vowel " + vowelValue.vowelUsed + " a total of " + vowelValue.counter + " times<br>"
        
//     })
//     display.innerHTML = output
    
// }