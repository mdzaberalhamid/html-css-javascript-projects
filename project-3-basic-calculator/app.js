const buttonsElement = document.querySelectorAll('button');

const inputField = document.getElementById("result");

// console.log(buttonsElement);
for (let i = 0; i < buttonsElement.length; i++) {
    buttonsElement[i].addEventListener('click', ()=> {

        // console.log(buttonsElement[i].textContent);
        const buttonValue = buttonsElement[i].textContent;

        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    })
}

function clearResult () {
    inputField.value = "";
}

function calculateResult () {
    inputField.value = eval(inputField.value);
}

function appendValue (buttonValue) {
    inputField.value += buttonValue;
}
