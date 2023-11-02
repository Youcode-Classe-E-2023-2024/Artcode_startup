function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateName(name){
    if ((name == "") || (name == null)) {
        printError("sp-name", "Veuillez entrez votre nom.");
        return false;
    } else {
        var regex = /^[a-zA-Z]+$/;
        if (!regex.test(name)) {
            printError("sp-name", "Veuillez entrez un nom valide.");
            return false;
        } else {
            printError("sp-name", "");
            return true;
        }
    }
}

function validateEmail(email){
    if ((email == "") || (email == null)) {
        printError("sp-email", "Veuillez entrez votre email.");
        return false;
    } else {
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!regex.test(email)) {
            printError("sp-email", "Veuillez entrez un email valide.");
            return false;
        } else {
            printError("sp-email", "");
            return true;
        }
    }
}

function validateMessage(message){
    if ((message == "") || (message == null)) {
        printError("sp-message", "Veuillez entrez votre message.");
        return false;
    } else {
            printError("sp-message", "");
            return true;
        }
}

function initValidation(){
    var nameInput = document.getElementById("name");
        nameInput.addEventListener("blur",function (){
            validateName(nameInput.value);
        });
}

function initValidation2(){
    var emailInput = document.getElementById("email");
    emailInput.addEventListener("blur",function (){
        validateEmail(emailInput.value);
    });
}

function initValidation3(){
    var messageInput = document.getElementById("message");
    messageInput.addEventListener("blur",function (){
        validateMessage(messageInput.value);
    });
}


function affiche() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var nameErr = validateName(name);
    var emailErr = validateEmail(email);
    var messageErr = validateMessage(message);

    if (nameErr == false || emailErr == false || messageErr == false){
        return false;
    }
    return true;
}

initValidation();
initValidation2();
initValidation3();