const inputEl = document.getElementById("input");

function updateResults () {
    console.log("Input changed!");
}

inputEl.addEventListener("input", updateResults);