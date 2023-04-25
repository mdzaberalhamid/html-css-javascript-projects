const btnElement = document.getElementById("btn");
const birthdayElement = document.getElementById("birthday");
const resultElement = document.getElementById("result");

function calculateAge(){
    // console.log("Clicked!");
    const birthdayValue = birthdayElement.value;
    // console.log(birthdayValue);

    if(birthdayValue === ""){
        alert("Please, enter your birthdate.");
    }else{
        const age = getAge(birthdayValue);
        // console.log(age);
        resultElement.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"}.`;
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthDate = new Date(birthdayValue);
    // console.log(currentDate.getFullYear());
    // console.log(birthDate.getFullYear());
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    // console.log(age);
    const month = currentDate.getMonth() - birthDate.getMonth();
    // console.log(month);
    if(month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate()) ){
        age--;
        // console.log(age);
    }
    return age;
}

btnElement.addEventListener("click", calculateAge)