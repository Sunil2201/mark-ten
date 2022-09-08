const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector('#cashGiven');
const nextButton = document.querySelector('#nextButton');
const checkButton = document.querySelector("#checkButton");
const message = document.querySelector("#errorMessage");
const noOfNotes = document.querySelectorAll(".noteCount");
const inputCashSection = document.querySelector(".inputCash");
const outputSection = document.querySelector(".outputSection");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

hideGivenCashAndOutput();

nextButton.addEventListener("click", function showSomething(){
    showGivenAmountSection();
})

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    message.style.display = "none";
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToReturn = cashGiven.value - billAmount.value;
            calculateChange(amountToReturn)
            outputSection.style.display = 'block'
        }else{
            showErrorMessage("The cash provided should atleast be equal to the bill amount");
        }
    }else{
        showErrorMessage("Invalid Bill Amount")
    }
});

function calculateChange(amountToReturn){
    for(let i=0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToReturn / availableNotes[i]);
        amountToReturn %= availableNotes[i];   
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showErrorMessage(errMessage){
    message.style.display = "block"
    message.innerText = errMessage
}

function hideGivenCashAndOutput(){
    inputCashSection.style.display = 'none';
    outputSection.style.display = 'none';
}

function showGivenAmountSection(){
    message.style.display = 'none'
    if(billAmount.value > 0){
        inputCashSection.style.display = 'flex';
        message.innerText = ''
    }
    else{
        showErrorMessage('Invalid value');
        inputCashSection.style.display = 'none';
        outputSection.style.display = 'none';
    }
}