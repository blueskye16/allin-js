// Logika utama untuk kalkulator
let currentInput = "0"; // Menyimpan input pengguna
let previousInput = ""; // Menyimpan input sebelumnya
let operator = null; // Menyimpan operator yang dipilih

// Inisialisasi setelah DOM siap
document.addEventListener("DOMContentLoaded", () => {
  const answerElement = document.getElementById("answer");
  const numberElements = getNumberElements();
  const nonNumberElements = getNonNumberElements();

  // Tambahkan event listener ke tombol angka
  Object.values(numberElements).forEach((button) => {
    button.addEventListener("click", () => {
      handleNumberClick(button.innerText);
      updateDisplay(answerElement);
    });
  });

  // Tambahkan event listener ke tombol operasi
  Object.values(nonNumberElements).forEach((button) => {
    button.addEventListener("click", () => {
      handleOperatorClick(button.id);
      updateDisplay(answerElement);
    });
  });
});

// Fungsi untuk menangani klik tombol angka
function handleNumberClick(value) {
  if (currentInput === "0" || operator === "=") {
    currentInput = value;
    operator = null; // Reset operator setelah "="
  } else {
    currentInput += value;
  }
}

// Fungsi untuk menangani klik tombol operasi
function handleOperatorClick(operatorId) {
  switch (operatorId) {
    case "btnDeleteAll":
      clearAll();
      break;
    case "btnBackspace":
      backspace();
      break;
    case "btnEqual":
      calculateResult();
      operator = "=";
      break;
    default:
      if (previousInput && operator) {
        calculateResult();
      }
      operator = mapOperator(operatorId);
      previousInput = currentInput;
      currentInput = "";
      break;
  }
}

// Fungsi untuk memetakan tombol ke operator
function mapOperator(operatorId) {
  const operators = {
    btnPlus: "+",
    btnSubstraction: "-",
    btnMultiple: "*",
    btnDivision: "/",
    btnPercent: "%",
  };
  return operators[operatorId] || null;
}

// Fungsi untuk menghitung hasil
function calculateResult() {
  if (!previousInput || !operator || !currentInput) return;

  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = current !== 0 ? prev / current : "Error";
      break;
    case "%":
      result = (prev * current) / 100;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  previousInput = "";
  operator = null;
}

// Fungsi untuk menghapus semua input
function clearAll() {
  currentInput = "0";
  previousInput = "";
  operator = null;
}

// Fungsi untuk menghapus karakter terakhir
function backspace() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
}

// Fungsi untuk memperbarui tampilan
function updateDisplay(element) {
  element.innerText = currentInput;
}

// Fungsi untuk mendapatkan elemen tombol angka
function getNumberElements() {
  return {
    btnOne: document.getElementById("btnOne"),
    btnTwo: document.getElementById("btnTwo"),
    btnThree: document.getElementById("btnThree"),
    btnFour: document.getElementById("btnFour"),
    btnFive: document.getElementById("btnFive"),
    btnSix: document.getElementById("btnSix"),
    btnSeven: document.getElementById("btnSeven"),
    btnEight: document.getElementById("btnEight"),
    btnNine: document.getElementById("btnNine"),
    btnZero: document.getElementById("btnZero"),
    btnDoubleZero: document.getElementById("btnDoubleZero"),
    btnDot: document.getElementById("btnDot"),
  };
}

// Fungsi untuk mendapatkan elemen tombol operasi
function getNonNumberElements() {
  return {
    btnDeleteAll: document.getElementById("btnDeleteAll"),
    btnPercent: document.getElementById("btnPercent"),
    btnBackspace: document.getElementById("btnBackspace"),
    btnDivision: document.getElementById("btnDivision"),
    btnMultiple: document.getElementById("btnMultiple"),
    btnSubstraction: document.getElementById("btnSubstraction"),
    btnPlus: document.getElementById("btnPlus"),
    btnEqual: document.getElementById("btnEqual"),
  };
}
