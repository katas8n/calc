const defaultResult = 0;
let currentResult = defaultResult;
let operand;

function getUserNumberInput() {
    return parseInt(input.value);
}

function createAndWriteOutput(operator, fN, sN) {
    const calcDescription = `${fN} ${operator} ${sN}`;

    outputResult(currentResult, calcDescription);
}

function caculateResult(calculateType) {
    const enteredNumber = getUserNumberInput();
    const prevNumber = currentResult;

    if (calculateType === 'ADD') {
        currentResult += enteredNumber;

        operand = '+';
    } else if (calculateType === 'SUB') {
        currentResult -= enteredNumber;

        operand = '-';
    } else if (calculateType === 'MULT') {
        currentResult *= enteredNumber;

        operand = '*';
    } else if (calculateType === 'DIV') {
        currentResult /= enteredNumber;

        operand = '/';
    }
    createAndWriteOutput(operand, prevNumber, enteredNumber);
}

function add() {
    caculateResult('ADD');
}

function substract() {
    caculateResult('SUB');
}

function multiply() {
    caculateResult('MULT');
}

function divide() {
    caculateResult('DIV');
}

plusBtn.addEventListener('click', add);
substractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
