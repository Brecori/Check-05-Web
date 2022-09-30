let numbers = [];

for (i=0;i<20;i++) {
    numbers[i] = Math.floor(Math.random()*100);
}

function arrayOne(numbers) {
    document.querySelector("#array1").textContent = numbers;
}

function arrayTwo(numbers) {
    let negativeNumbers = [];
    for (i=0; i<20;i++) {
        negativeNumbers[i] = numbers[i] - (numbers[i]*2);
    }
    document.querySelector("#array2").textContent = negativeNumbers
}

function arrayThree(numbers) {
    let plusNumbers = [];
    for (i=0; i<20;i++) {
        plusNumbers[i] = numbers[i] + 1;
    }
    document.querySelector("#array3").textContent = plusNumbers
}

function arrayFour(numbers) {
    let evenNumbers = [];
    let j = 0;
    let evenCount = 0;
    for (i=0; i<20;i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers[j] = numbers[i];
            evenCount +=1;
            j +=1;
        }
    }
    document.querySelector("#array4").textContent = `${evenNumbers} Total de números pares = ${evenCount}`;
}

function arrayFive(numbers) {
    let soma = 0;
    for (i=0;i<20;i++) {
        soma += numbers[i];
    }
    document.querySelector("#array5").textContent = soma;
}


