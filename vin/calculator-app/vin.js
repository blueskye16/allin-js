let currentInput = '0';
let previousInput = '';
let operator = '';
let answer = '';
const getNumberElements = document.getElementsByClassName('btn-number');


document.addEventListener('DOMContentLoaded', () => {
  const answerElement = document.getElementById('answer');
  const numberElements = getNumberElements;
  const nonNumberElements = getNonNumberElements();

  document.addEventListener('keydown', handleKeyboardInput);

  Array.from(numberElements).forEach((btnElement) => {
    btnElement.addEventListener('click', () => {
      handleNumberClick(btnElement.innerText);
      updateAnswer(answerElement);
    });
  });

  Object.values(nonNumberElements).forEach((btnElement) => {
    btnElement.addEventListener('click', () => {
      handleOperatorClick(btnElement.id);
      updateAnswer(answerElement);
    });
  });
});

function handleKeyboardInput(keyboardPress) {
  console.log(keyboardPress.key);
  const answerElement = document.getElementById('answer');

  switch (true) {
    case !isNaN(keyboardPress.key) && keyboardPress.key.trim() !== '':
      handleNumberClick(keyboardPress.key);
      updateAnswer(answerElement);
      break;
    case keyboardPress.code === 'Escape':
      handleOperatorClick('btnDeleteAll');
      updateAnswer(answerElement);
      break;
    case keyboardPress.code === 'Backspace':
      handleOperatorClick('btnBackspace');
      updateAnswer(answerElement);
      break;
    case keyboardPress.code === 'Equal' || keyboardPress.code === 'Enter':
      handleOperatorClick('btnEqual');
      updateAnswer(answerElement);
      break;
    case keyboardPress.key === '+':
      handleOperatorClick('btnPlus');
      updateAnswer(answerElement);
      break;
    case keyboardPress.key === '-':
      handleOperatorClick('btnSubstraction');
      updateAnswer(answerElement);
      break;
    case keyboardPress.key === '*':
      handleOperatorClick('btnMultiple');
      updateAnswer(answerElement);
      break;
    case keyboardPress.key === '/':
      handleOperatorClick('btnDivision');
      updateAnswer(answerElement);
      break;
    case keyboardPress.key === '%':
      handleOperatorClick('btnPercent');
      updateAnswer(answerElement);
      break;
    default:
  }
}

function handleNumberClick(value) {
  if (currentInput === '0') {
    answer = '';
    currentInput = value;
  } else {
    currentInput += value;
  }

  answer += value;
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
      break;
    default:
      if (previousInput && operator) {
        calculateResult();
      }
      if (operator && !currentInput) {
        return;
      } else {
        operator = mapOperator(operatorId);
        answer += `${operator}`;
        previousInput = currentInput;
        currentInput = '';
        break;
      }
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
  if (!currentInput || !operator || !previousInput) return;

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
  previousInput = '';
  operator = '';
  answer = result.toString();
}

function clearAll() {
  currentInput = '0';
  previousInput = '';
  operator = '';
  answer = '0';
}

function backspaceInput() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else if (currentInput.length === 1 && currentInput !== '') {
    currentInput = '';
  } else if (operator) {
    operator = '';
    answer = answer.slice(0, -1).trim();

    if (previousInput) {
      currentInput = previousInput;
      previousInput = '';
    }
  } else {
    currentInput = '0';
  }

  answer = `${previousInput} ${operator} ${currentInput}`.trim();
}

function updateAnswer(answerElement) {
  answerElement.innerText = answer || '0';
}

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
