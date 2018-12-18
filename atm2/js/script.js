var output = document.getElementById("atmScreen");
var recipt = document.getElementById("recipt");
var buttonLeft = document.getElementById("buttonLeft");
var buttonRight = document.getElementById("buttonRight");
var money = document.getElementById("money");

var users = {
    ethan: {
        first: "Ethan",
        last: "Daniels",
        account: {
            checking: 100.00,
            savings: 100.00,
            card: 1111,
            pin: 1111
        }
    }
}
var userFirst;
var userLast;
var menuCounter = 0;
var keypad = document.querySelectorAll('.key');
keypad.forEach(function(key){
    key.addEventListener('click', foo);
});
function foo() {
    var input = document.getElementById("input");
    var key = event.target.dataset.key;
    if (key == "b") {
        var backSpace = document.getElementById("input").innerText;
        backSpace = backSpace.split("");
        backSpace.pop();
        backSpace = backSpace.join("");
        input.innerHTML = backSpace;
    } else if (key === "c") {
        input.innerHTML = "";
    } else if (key === "e") {
        validation();
    } else {
        input.innerHTML += key;
    }
}


// This is the primary function it checks the variable menuCounter and based on what the menuCounter is it will run the function based on the asignment of the variable
function validation() {
    recipt.classList.remove("transition");
    recipt.innerText = "";
    money.classList.remove("moneyAfter");
    if (menuCounter == "newTransaction") {
        main();
    } else {
        var input = Number(document.getElementById("input").innerText);
    }
    if (menuCounter == 0) {
        for (i in users) {
            if (users[i].account.card == input) {
                userFirst = users[i].first;
                userLast = users[i].last;
                output.innerHTML = `
                        <h1>Please Enter Your Pin</h1>
                        <div class="input">
                            <span id="input"></span>
                        </div>
                `;
                menuCounter++;
            } else {
                alert("Card is not in the system")
            }
        }
    } else if (menuCounter == 1) {
        for (i in users) {
            if (users[i].first == userFirst && users[i].last == userLast) {
                if (users[i].account.pin === input) {
                    main();
                    
                } else {
                    alert("Invalid Pin")
                }
            }
        }
    } else if (menuCounter === "depositeChecking") {
        processing("deposite", "checking", input)
    } else if (menuCounter === "depositeSavings") {
        processing("deposite", "savings", input)
    } else if (menuCounter === "withdrawalChecking") {
        processing("withdrawal", "checking", input)
    } else if (menuCounter === "withdrawalSavings") {
        processing("withdrawal", "savings", input)
    } else if (menuCounter === "transferChecking") {
        processing("transfer", "checking", input)
    } else if (menuCounter === "transferSavings") {
        processing("transfer", "savings", input)
    } else if (menuCounter === "changePin") {
        processing("change", "pin", input)
    }
}

//Overwriting the Dom to ask the user if they want to perform another transaction
function mainMenu() {
    output.innerHTML = `
    <div class="screenHead">
        <h1>Do you want to make another transaction?</h1>
    </div>
    <div class="screenContent">
        <div class="col-sm-4">
            <p class="deposite">Yes</p>
        </div>
        <div class="col-sm-4">

        </div>
        <div class="col-sm-4">
            <p class="changePin">No</p>
        </div>
    </div>
    `
    buttonLeft.innerHTML = `
    <button class="button1"></button>
    <button onclick="validation()" class="button2"></button>
    <button class="button3"></button>
    `;
    buttonRight.innerHTML = `
    <button class="button4"></button>
    <button onclick="location.reload()" class="button5"></button>
    <button class="button6"></button>
    `;
    menuCounter='newTransaction'
}

//This is the mainMenu 
function main() {
    output.innerHTML = `
        <div class="screenHead">
        <h1>Welcome ` + userFirst + " " + userLast + `</h1>
        </div>
        <div class="screenContent">
            <div class="col-sm-4">
                <p class="withdrawal">Withdrawal</p>
                <p class="deposite">Deposit</p>
                <p class="transfer">Transfer</p>
            </div>
            <div class="col-sm-4">

            </div>
            <div class="col-sm-4">
                <p class="changePin">Change Pin</p>
                <p class="checkBalance">Check Balance</p>
            </div>
        </div>
        ` 
        buttonLeft.innerHTML = `
        <button onclick="depositeMenu()" class="button1"></button>
        <button onclick="withdrawalMenu()" class="button2"></button>
        <button onclick="transferMenu()" class="button3"></button>
        `;
        buttonRight.innerHTML = `
        <button onclick="changePinMenu()" class="button4"></button>
        <button onclick="checkBalanceMenu()" class="button5"></button>
        <button class="button6"></button>
        `;
}
function depositeMenu() {
    output.innerHTML = `
    <div class="screenHead">
        <h1>Checking or Savings?</h1>
    </div>
    <div class="screenContent">
        <div class="col-sm-4">
            <p class="deposite">Checking</p>
        </div>
        <div class="col-sm-4">

        </div>
        <div class="col-sm-4">
            <p class="changePin">Savings</p>
        </div>
    </div>
    `
    buttonLeft.innerHTML = `
    <button onclick="depositeChecking()" class="button1"></button>
    <button class="button2"></button>
    <button class="button3"></button>
    `;
    buttonRight.innerHTML = `
    <button onclick="depositeSavings()" class="button4"></button>
    <button class="button5"></button>
    <button class="button6"></button>
    `;
}
function depositeChecking() {
    output.innerHTML = `
    <h1>How much would you like to deposit?</h1>
    <div class="input">
        <span id="input"></span>
    </div>
    `;
    menuCounter = "depositeChecking"
}
function depositeSavings() {
    output.innerHTML = `
    <h1>How much would you like to deposit?</h1>
    <div class="input">
        <span id="input"></span>
    </div>
    `;
    menuCounter = "depositeSavings"
}
function withdrawalMenu() {
    output.innerHTML = `
    <div class="screenHead">
        <h1>Checking or Savings?</h1>
    </div>
    <div class="screenContent">
        <div class="col-sm-4">
            <p class="deposite">Checking</p>
        </div>
        <div class="col-sm-4">
        
        </div>
        <div class="col-sm-4">
            <p class="changePin">Savings</p>
        </div>
    </div>
    `;
    buttonLeft.innerHTML = `
    <button onclick="withdrawalChecking()" class="button1"></button>
    <button class="button2"></button>
    <button class="button3"></button>
    `;
    buttonRight.innerHTML = `
    <button onclick="withdrawalSavings()" class="button4"></button>
    <button class="button5"></button>
    <button class="button6"></button>
    `;
}
function withdrawalChecking() {
    output.innerHTML = `
                    <div class="screenHead">
                    <h1>Welcome ` + userFirst + " " + userLast + `</h1>
                    </div>
                    <div class="screenContent">
                        <div class="col-sm-4">
                            <p class="withdrawal">$40</p>
                            <p class="deposite">$20</p>
                            <p class="transfer">$60</p>
                        </div>
                        <div class="col-sm-4">

                        </div>
                        <div class="col-sm-4">
                            <p class="eighty">$80</p>
                            <p class="hundred">$100</p>
                            <p class="custom">Custom</p>
                        </div>
                    </div>
    `;
    buttonLeft.innerHTML = `
    <button onclick="processing('withdrawal', 'checking', 20)" class="button1"></button>
    <button onclick="processing('withdrawal', 'checking', 40)" class="button2"></button>
    <button onclick="processing('withdrawal', 'checking', 60)" class="button3"></button>
    `;
    buttonRight.innerHTML = `
    <button onclick="processing('withdrawal', 'checking', 80)" class="button4"></button>
    <button onclick="processing('withdrawal', 'checking', 100)" class="button5"></button>
    <button onclick="customWithdrawal()" class="button6"></button>
    `;
    menuCounter = "withdrawalChecking"
}
function withdrawalSavings() {
    output.innerHTML = `
                    <div class="screenHead">
                    <h1>Welcome ` + userFirst + " " + userLast + `</h1>
                    </div>
                    <div class="screenContent">
                        <div class="col-sm-4">
                            <p class="withdrawal">$40</p>
                            <p class="deposite">$20</p>
                            <p class="transfer">$60</p>
                        </div>
                        <div class="col-sm-4">

                        </div>
                        <div class="col-sm-4">
                            <p class="eighty">$80</p>
                            <p class="hundred">$100</p>
                            <p class="custom">Custom</p>
                        </div>
                    </div>
    `;
    buttonLeft.innerHTML = `
    <button onclick="processing('withdrawal', 'savings', 20)" class="button1"></button>
    <button onclick="processing('withdrawal', 'savings', 40)" class="button2"></button>
    <button onclick="processing('withdrawal', 'savings', 60)" class="button3"></button>
    `;
    buttonRight.innerHTML = `
    <button onclick="processing('withdrawal', 'savings', 80)" class="button4"></button>
    <button onclick="processing('withdrawal', 'savings', 100)" class="button5"></button>
    <button onclick="customWithdrawal()" class="button6"></button>
    `;
    menuCounter = "withdrawalSavings"
}
function customWithdrawal() {
    output.innerHTML = `
    <h1>Enter Custom Withdrawal</h1>
    <div class="input">
        <span id="input"></span>
    </div>
    `
    buttonLeft.innerHTML = `
    <button class="button1"></button>
    <button class="button2"></button>
    <button class="button3"></button>
    `
    buttonRight.innerHTML = `
    <button class="button4"></button>
    <button class="button5"></button>
    <button class="button6"></button>
    `
}
function transferMenu() {
    output.innerHTML = `
    <div class="screenHead">
        <h1>What account do you want to transfer from?</h1>
    </div>
    <div class="screenContent">
        <div class="col-sm-4">
            <p class="deposite">Checking</p>
        </div>
        <div class="col-sm-4">

        </div>
        <div class="col-sm-4">
            <p class="changePin">Savings</p>
        </div>
    </div>
    `
    buttonLeft.innerHTML = `
    <button class="button1"></button>
    <button onclick="transferChecking()" class="button2"></button>
    <button class="button3"></button>
    `;
    buttonRight.innerHTML = `
    <button class="button4"></button>
    <button onclick="transferSavings()" class="button5"></button>
    <button class="button6"></button>
    `;
}
function transferChecking() {
    output.innerHTML = `
    <h1>How much would you like to transfer?</h1>
    <div class="input">
        <span id="input"></span>
    </div>
    `;
    menuCounter = "transferChecking"
}
function transferSavings() {
    output.innerHTML = `
    <h1>How much would you like to transfer?</h1>
    <div class="input">
        <span id="input"></span>
    </div>
    `;
    menuCounter = "transferSavings"
}
function processing(action, account, amount) {
    if (action === "deposite" && account === "checking") {
        for (i in users) {
            if (users[i].first == userFirst) {
                users[i].account.checking += amount;
                recipt.innerHTML = `
                    <span> You deposited: ` + amount + ` </span> <br>
                    <span> into your checking account</span> <br>
                    <span> Checking Account Balance:</span> ` + users[i].account.checking + `
                `;
                input.innerText = "";
                mainMenu();
                recipt.classList.add("transition");
            }
        }
    } else if (action === "deposite" && account === "savings") {
        for (i in users) {
            if (users[i].first == userFirst) {
                users[i].account.savings += amount;
                recipt.innerHTML = `
                    <span> You deposited: ` + input.innerText + ` </span> <br>
                    <span> into your savings account</span> <br>
                    <span> Savings Account Balance:</span> ` + users[i].account.savings + `
                `;
                mainMenu();
                recipt.classList.add("transition");
            }
        }
    } else if (action === "withdrawal" && account === "checking") {
        for (i in users) {
            if (users[i].first == userFirst) {
                if (amount <= users[i].account.checking) {
                    users[i].account.checking -= amount;
                    recipt.innerHTML = `
                    <span> You withdrew: ` + amount + ` </span> <br>
                    <span> into your checking account</span> <br>
                    <span> Checking Account Balance:</span> ` + users[i].account.checking + `
                    `;
                    mainMenu();
                    recipt.classList.add("transition");
                    money.classList.add("moneyAfter");
                } else {
                    alert("Not enough money bud!")
                }
            }
        }
    } else if (action === "withdrawal" && account === "savings") {
        for (i in users) {
            if (users[i].first == userFirst) {
                if (amount <= users[i].account.savings) {
                    users[i].account.savings -= amount;
                    recipt.innerHTML = `
                    <span> You withdrew: ` + amount + ` </span> <br>
                    <span> into your checking account</span> <br>
                    <span> Checking Account Balance:</span> ` + users[i].account.savings;
                    mainMenu();
                    recipt.classList.add("transition");
                    money.classList.add("moneyAfter")
                } else {
                    alert("Not enough money bud")
                }
            }
        }
    } else if (action === "transfer" && account === "checking") {
        for (i in users) {
            if (users[i].first == userFirst) {
                if (amount <= users[i].account.checking) {
                    users[i].account.checking -= amount;
                    users[i].account.savings += amount;
                    recipt.innerHTML = `
                    <span> You transfered: ` + amount + ` </span> <br>
                    <span> into your checking account</span> <br>
                    <span> Savings Account Balance:</span> ` + users[i].account.savings +` <br>
                    <span> Your Checking Account balance is: ` + users[i].account.checking + `</span>`;
                    mainMenu();
                    recipt.classList.add("transition");
                } else {
                    alert("Not enough money bud")
                }
            }
        }
    } else if (action === "transfer" && account === "savings") {
        for (i in users) {
            if (users[i].first == userFirst) {
                if (amount <= users[i].account.checking) {
                    users[i].account.savings -= amount;
                    users[i].account.checking += amount;
                    recipt.innerHTML = `
                    <span> You transfered: ` + amount + ` </span> <br>
                    <span> into your savings account</span> <br>
                    <span> Savings Account Balance:</span> ` + users[i].account.savings +` <br>
                    <span> Checking Account balance is: ` + users[i].account.checking + `</span>`;
                    mainMenu();
                    recipt.classList.add("transition");
                } else {
                    alert("Not enough money bud")
                }
            }
        }
    } else if (action === "change" && account === "pin") {
        if (amount.toString().length == 4) {
            for (i in users) {
                if (users[i].first == userFirst){
                    users[i].account.pin = Number(amount);
                    mainMenu();
                    recipt.classList.add("transition");
                }
            }
        } else {
            alert("Must be 4 didgets")
        }
    }
}
function changePinMenu() {
    output.innerHTML = `
    <h1>What would you like to change your pin to?</h1>
    <div class="input">
        <span id="input"></span>
    </div>
    `;
    menuCounter = "changePin"
}