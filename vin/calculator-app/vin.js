let answer = '';
let currentInput = '0';
let previousInput = '';
let operator = '';

document.addEventListener('DOMContentLoaded', () => {
  const answerElement = document.getElementById('answer');
  const numberElements = getNumberElements;
  const nonNumberElements = getNonNumberElements();

  Array.from(numberElements).forEach((btnElement) => {
    btnElement.addEventListener('click', () => {
      handleNumberClick(btnElement.innerText);
      answer += btnElement.innerText;
      updateAnswer(answerElement);
    });
  });

  /* nampilin elemen yang diklik antara angka sama operatornya masih terpisah, makanya ilang - ilangan */

  Object.values(nonNumberElements).forEach((btnElement) => {
    btnElement.addEventListener('click', () => {
      handleOperatorClick(btnElement.id);
      answer += operator;
      updateAnswer(answerElement);
    });
  });

  // updateAnswer(answerElement);
});

function handleNumberClick(value) {
  if (currentInput === '0') {
    answer = '';
    currentInput = value;
  } else {
    currentInput += value;
  }
}

function handleOperatorClick(operatorId) {
  switch (operatorId) {
    case 'btnDeleteAll':
      clearAll();
      break;
    case 'btnBackspace':
      backspaceInput();
      break;
    case 'btnEqual':
      calculateResult();
      operator = '=';
      break;
    default:
      if (previousInput && operator) {
        calculateResult();
      }
      operator = mapOperator(operatorId);
      previousInput = currentInput;
      currentInput = '';
      break;
  }
}

function mapOperator(operatorId) {
  const operators = {
    btnPercent: '%',
    btnDivision: '/',
    btnMultiple: '*',
    btnSubstraction: '-',
    btnPlus: '+',
  };
  return operators[operatorId] || null;
}

function calculateResult() {
  // if (!previousInput || !operator || !currentInput) return;
  // if (!currentInput && !previousInput && !operator) {
  //   return error;
  // }

  const firstValue = parseFloat(previousInput);
  const secondValue = parseFloat(currentInput);
  let result;

  switch (operator) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    case '%':
      result = (firstValue * secondValue) / 100;
      break;
    case '/':
      result = firstValue !== 0 ? firstValue / secondValue : 'Error';
      break;
    default:
      return;
  }
  currentInput = result.toString();
  // previousInput = "";
  operator = '';
}

function clearAll(answerElement) {
  // const blinkingCursor = document.createElement('span');
  // blinkingCursor.innerText = '|';
  // blinkingCursor.className = 'blinking-cursor';
  // blinkingCursor.appendChild(answerElement);

  answer = '0';
  currentInput = '0';
  operator = '';
}

function backspaceInput() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = '0';
  }
}

function updateAnswer(answerElement) {
  if (operator !== '=') {
    answerElement.innerText = answer;
  } else if (operator == '=') {
    answerElement.innerText = currentInput;
    answer = currentInput;
  }
}

const getNumberElements = document.getElementsByClassName('btn-number');

function getNonNumberElements() {
  return {
    btnDeleteAll: document.getElementById('btnDeleteAll'),
    btnPercent: document.getElementById('btnPercent'),
    btnBackspace: document.getElementById('btnBackspace'),
    btnDivision: document.getElementById('btnDivision'),
    btnMultiple: document.getElementById('btnMultiple'),
    btnSubstraction: document.getElementById('btnSubstraction'),
    btnPlus: document.getElementById('btnPlus'),
    btnEqual: document.getElementById('btnEqual'),
  };
}
