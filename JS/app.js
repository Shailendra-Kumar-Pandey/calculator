let display = document.querySelector('.display');
let currentValue = '0';

function appendNumber(number) {
        if(currentValue === '0'){
                 currentValue = number;
                
        }else{
                currentValue = currentValue + number;
        }
        updateDisplay();
}

function appendOperetor(operator) {
        if (currentValue !== '' && !isNaN(currentValue.slice(-1))) {
            currentValue= currentValue + operator;
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
            currentValue = eval(currentValue).toString();
            updateDisplay();
    }

    function updateDisplay() {
        display.innerText = currentValue;
    }

    // let display = document.querySelector('.display');
    // let currentValue = '0';
    // let operandStack = [];  // To store numbers and operators
    // let operator = null;    // To store the last operator clicked
    
    // // Function to append a number to the display
    // function appendNumber(number) {
    //     if (currentValue === '0') {
    //         currentValue = number;
    //     } else {
    //         currentValue += number;
    //     }
    //     updateDisplay();
    // }
    
    // // Function to append an operator (+, -, *, /) to the display
    // function appendOperator(op) {
    //     // If the last character is a number, we add the operator to the operand stack
    //     if (!isNaN(currentValue.slice(-1))) {
    //         operandStack.push(currentValue);
    //         operandStack.push(op);
    //         currentValue = '';
    //     }
    //     updateDisplay();
    // }
    
    // // Function to delete the last character in the display
    // function deleteLast() {
    //     currentValue = currentValue.slice(0, -1);
    //     if (currentValue === '') {
    //         currentValue = '0';
    //     }
    //     updateDisplay();
    // }
    
    // // Function to clear the display
    // function clearDisplay() {
    //     currentValue = '0';
    //     operandStack = [];
    //     operator = null;
    //     updateDisplay();
    // }
    
    // // Function to calculate the result
    // function calculatorResult() {
    //     // Add the last number to the operand stack
    //     if (currentValue !== '') {
    //         operandStack.push(currentValue);
    //     }
    
    //     // Process the expression in operandStack
    //     let result = evaluateExpression(operandStack);
    //     currentValue = result.toString();
    //     updateDisplay();
    //     operandStack = [];  // Clear the operand stack after calculation
    // }
    
    // // Function to evaluate the arithmetic expression stored in the operand stack
    // function evaluateExpression(stack) {
    //     let num1 = parseFloat(stack[0]);
    //     let operator = null;
    //     let result = num1;
    
    //     for (let i = 1; i < stack.length; i++) {
    //         if (typeof stack[i] === 'string') {
    //             // If it's an operator, store it
    //             operator = stack[i];
    //         } else if (typeof stack[i] === 'number') {
    //             // If it's a number, perform the operation
    //             let num2 = parseFloat(stack[i]);
    
    //             switch (operator) {
    //                 case '+':
    //                     result += num2;
    //                     break;
    //                 case '-':
    //                     result -= num2;
    //                     break;
    //                 case '*':
    //                     result *= num2;
    //                     break;
    //                 case '/':
    //                     if (num2 === 0) {
    //                         result = 'Error';
    //                     } else {
    //                         result /= num2;
    //                     }
    //                     break;
    //                 default:
    //                     break;
    //             }
    //         }
    //     }
    //     return result;
    // }
    
    // // Function to update the display
    // function updateDisplay() {
    //     display.innerText = currentValue;
    // }
    



//     // type---1
//     let display = document.querySelector('.display');
// let currentValue = '0';

// function appendNumber(number) {
//     currentValue = (currentValue === '0') ? number : currentValue + number;
//     updateDisplay();
// }

// function appendOperator(operator) {
//     if (!isNaN(currentValue.slice(-1))) {
//         currentValue += operator;
//         updateDisplay();
//     }
// }

// function deleteLast() {
//     currentValue = currentValue.slice(0, -1) || '0';
//     updateDisplay();
// }

// function clearDisplay() {
//     currentValue = '0';
//     updateDisplay();
// }

// function calculatorResult() {
//     try {
//         currentValue = eval(currentValue).toString();
//     } catch (e) {
//         currentValue = 'Error';
//     }
//     updateDisplay();
// }

// function updateDisplay() {
//     display.innerText = currentValue;
// }



// // type--2

// let display = document.querySelector('.display');
// let currentValue = '0';
// let operandStack = [];

// function appendNumber(number) {
//     currentValue = (currentValue === '0') ? number : currentValue + number;
//     updateDisplay();
// }

// function appendOperator(operator) {
//     if (!isNaN(currentValue.slice(-1))) {
//         operandStack.push(currentValue);
//         operandStack.push(operator);
//         currentValue = '';
//     }
//     updateDisplay();
// }

// function deleteLast() {
//     currentValue = currentValue.slice(0, -1) || '0';
//     updateDisplay();
// }

// function clearDisplay() {
//     currentValue = '0';
//     operandStack = [];
//     updateDisplay();
// }

// function calculatorResult() {
//     operandStack.push(currentValue);
//     currentValue = evaluateExpression(operandStack);
//     updateDisplay();
//     operandStack = [];
// }

// function evaluateExpression(stack) {
//     let result = parseFloat(stack[0]);
//     for (let i = 1; i < stack.length; i++) {
//         if (typeof stack[i] === 'string') {
//             let operator = stack[i];
//             let operand = parseFloat(stack[i + 1]);
//             switch (operator) {
//                 case '+': result += operand; break;
//                 case '-': result -= operand; break;
//                 case '*': result *= operand; break;
//                 case '/': result /= operand; break;
//             }
//         }
//     }
//     return result;
// }

// function updateDisplay() {
//     display.innerText = currentValue;
// }



// type--3

// class Calculator {
//     constructor() {
//         this.display = document.querySelector('.display');
//         this.currentValue = '0';
//         this.operandStack = [];
//     }

//     appendNumber(number) {
//         this.currentValue = (this.currentValue === '0') ? number : this.currentValue + number;
//         this.updateDisplay();
//     }

//     appendOperator(operator) {
//         if (!isNaN(this.currentValue.slice(-1))) {
//             this.operandStack.push(this.currentValue);
//             this.operandStack.push(operator);
//             this.currentValue = '';
//         }
//         this.updateDisplay();
//     }

//     deleteLast() {
//         this.currentValue = this.currentValue.slice(0, -1) || '0';
//         this.updateDisplay();
//     }

//     clearDisplay() {
//         this.currentValue = '0';
//         this.operandStack = [];
//         this.updateDisplay();
//     }

//     calculatorResult() {
//         this.operandStack.push(this.currentValue);
//         this.currentValue = this.evaluateExpression(this.operandStack);
//         this.updateDisplay();
//         this.operandStack = [];
//     }

//     evaluateExpression(stack) {
//         let result = parseFloat(stack[0]);
//         for (let i = 1; i < stack.length; i++) {
//             if (typeof stack[i] === 'string') {
//                 let operator = stack[i];
//                 let operand = parseFloat(stack[i + 1]);
//                 switch (operator) {
//                     case '+': result += operand; break;
//                     case '-': result -= operand; break;
//                     case '*': result *= operand; break;
//                     case '/': result /= operand; break;
//                 }
//             }
//         }
//         return result;
//     }

//     updateDisplay() {
//         this.display.innerText = this.currentValue;
//     }
// }

// let calculator = new Calculator();



// // type--4

// const display = document.querySelector('.display');

// const createCalculator = () => {
//     let currentValue = '0';
//     let operandStack = [];

//     const appendNumber = number => {
//         currentValue = (currentValue === '0') ? number : currentValue + number;
//         updateDisplay();
//     };

//     const appendOperator = operator => {
//         if (!isNaN(currentValue.slice(-1))) {
//             operandStack.push(currentValue);
//             operandStack.push(operator);
//             currentValue = '';
//         }
//         updateDisplay();
//     };

//     const deleteLast = () => {
//         currentValue = currentValue.slice(0, -1) || '0';
//         updateDisplay();
//     };

//     const clearDisplay = () => {
//         currentValue = '0';
//         operandStack = [];
//         updateDisplay();
//     };

//     const calculatorResult = () => {
//         operandStack.push(currentValue);
//         currentValue = evaluateExpression(operandStack);
//         updateDisplay();
//         operandStack = [];
//     };

//     const evaluateExpression = stack => {
//         let result = parseFloat(stack[0]);
//         for (let i = 1; i < stack.length; i++) {
//             if (typeof stack[i] === 'string') {
//                 let operator = stack[i];
//                 let operand = parseFloat(stack[i + 1]);
//                 switch (operator) {
//                     case '+': result += operand; break;
//                     case '-': result -= operand; break;
//                     case '*': result *= operand; break;
//                     case '/': result /= operand; break;
//                 }
//             }
//         }
//         return result;
//     };

//     const updateDisplay = () => {
//         display.innerText = currentValue;
//     };

//     return { appendNumber, appendOperator, deleteLast, clearDisplay, calculatorResult };
// };

// const calculator = createCalculator();



// // type--5
// 5. State Management (Using a More Complex Library)
// For more complex calculators, especially if you're working in a framework like React, Vue, or Angular, you might manage state with an external state management library like Redux (React) or Vuex (Vue). This would separate the state management from UI updates and make the application more scalable.

// // This example uses Redux (React) for state management
// const initialState = {
//     currentValue: '0',
//     operandStack: [],
// };

// // Actions
// const ADD_NUMBER = 'ADD_NUMBER';
// const ADD_OPERATOR = 'ADD_OPERATOR';
// const DELETE_LAST = 'DELETE_LAST';
// const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
// const CALCULATE_RESULT = 'CALCULATE_RESULT';

// // Reducer function
// const calculatorReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_NUMBER:
//             return { ...state, currentValue: state.currentValue === '0' ? action.payload : state.currentValue + action.payload };
//         case ADD_OPERATOR:
//             return { ...state, operandStack: [...state.operandStack, state.currentValue, action.payload], currentValue: '' };
//         case DELETE_LAST:
//             return { ...state, currentValue: state.currentValue.slice(0, -1) || '0' };
//         case CLEAR_DISPLAY:
//             return { ...state, currentValue: '0', operandStack: [] };
//         case CALCULATE_RESULT:
//             const result = evaluateExpression([...state.operandStack, state.currentValue]);
//             return { ...state, currentValue: result.toString(), operandStack: [] };
//         default:
//             return state;
//     }
// };

// // Helper function to evaluate expressions
// function evaluateExpression(stack) {
//     let result = parseFloat(stack[0]);
//     for (let i = 1; i < stack.length; i++) {
//         let operator = stack[i];
//         let operand = parseFloat(stack[i + 1]);

