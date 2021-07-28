let currentNumber = document.querySelector('.currentNumber');
let previousNumber = document.querySelector('.previousNumber');
let operatorDisplay = document.querySelector('.operatorDisplay');
let numberBtn = document.querySelectorAll('.numbers');
let operatorBtn = document.querySelectorAll('.operator');
let clearBtn = document.querySelector('.ac');
let equalsBtn = document.querySelector('.equal');

let result = 0;

const displayNumber = (e) => {
    if (e.target.textContent === '.' && currentNumber.textContent.includes('.')) return;
    if (currentNumber.textContent === '' && e.target.textContent === '.') {
        console.log(e.target.textContent);
        currentNumber.textContent = '0';
    }
    currentNumber.textContent += e.target.textContent;
}

const clearDisplay = () => {
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    result = 0;
    operatorDisplay.innerHTML = '';
}




const equals = (e) => {
    let operator = operatorDisplay.textContent;
    let a = Number(currentNumber.textContent);
    let b = Number(previousNumber.textContent);

    console.log(a);
    console.log(b);

    if (currentNumber.textContent === '') return;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = b - a;
            break;
        case 'x':
            result = a * b;
            break;
        case '/':
            if (a === 0 || b === 0) {
                console.log('dzielenie przez 0');
                return;
            }
            result = b / a;
            break;
        case '%':
            result = a / 100 * b;
            break;
        default:
            break;
    }

    currentNumber.textContent = result;
    operatorDisplay.textContent = '';
    previousNumber.textContent = '';

};
a
const operate = (e) => {
    if (operatorDisplay.textContent !== '' && currentNumber.textContent == '') return;

    if (currentNumber.innerText === '' && e.target.textContent === '-') {
        currentNumber.textContent = '-';
        return;
    };
    if (currentNumber.textContent === '-') return;

    if (currentNumber.textContent === '' && previousNumber.textContent === '') return;

    if (operatorDisplay.textContent !== '') {
        equals(e);
        previousNumber.textContent = currentNumber.textContent;
        operatorDisplay.textContent = e.target.textContent;
        currentNumber.textContent = '';
    } else {
        previousNumber.textContent = currentNumber.textContent;
        operatorDisplay.textContent += e.target.textContent;
        currentNumber.textContent = '';
    }

};


equalsBtn.addEventListener('click', equals);

numberBtn.forEach(button => {
    button.addEventListener('click', displayNumber);
});
operatorBtn.forEach(button => {
    button.addEventListener('click', operate);
});

clearBtn.addEventListener('click', clearDisplay);