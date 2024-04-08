const buttonsElement = document.querySelectorAll('button');

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
            appendValue();
        }
    })
}

function clearResult () {

}

function calculateResult () {

}

function appendValue () {
    
}