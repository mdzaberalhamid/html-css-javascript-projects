

const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp (event) {
    // console.log('Value changed!');
    // console.log(event.target.value);

    const currentValue = +event.target.value;

    switch (event.target.name) {
        case "celsius":
            kelvinEl.value = (currentValue + 273.32);
            fahrenheitEl.value = (currentValue * 1.8 + 32);
            break;
    
        default:
            break;
    }

    // console.log(fahrenheitEl.value);
}
