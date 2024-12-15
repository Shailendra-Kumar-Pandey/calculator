let display = document.querySelector('.display');
let currentValue = '0';
// let currentOperator = '';
// let previousInput = '';

function appendNumber(number) {
        if(currentValue === '0'){
                 currentValue = number;
                
        }else{
                currentValue +=  number;
        }
        updateDisplay();
}

function appendOperetor(operator) {
        if (currentValue !== '' && !isNaN(currentValue.slice(-1))) {
            currentValue += operator;
            updateDisplay();
        }
    }

    function deleteLast() {
        currentValue = currentValue.slice(0, -1);
        if (currentValue === '') {
            currentValue = '0';
        }
        updateDisplay();
    }

    function clearDisplay() {
        currentValue = '0';
        updateDisplay();
    }

    function calculatorResult() {
        try {
            // Evaluate the expression using the JavaScript eval function
            currentValue = eval(currentValue).toString();
            updateDisplay();
        } catch (error) {
            currentValue = 'Error';
            updateDisplay();
        }
    }

    function updateDisplay() {
        display.innerText = currentValue;
    }

