const answerHolder = [];
const RENDER_EVENT = 'render-calculation';

document.addEventListener('DOMContentLoaded', function () {
  displayNumber();
  calculateNumber();
});

function displayNumber() {
  const answerElement = document.getElementById('answer');
  const numberElements = getNumberElements();

  // Simpan jawaban sementara dalam string
  let currentAnswer = '';

  Object.values(numberElements).forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.innerText;

      // Tambahkan angka yang diklik ke string jawaban
      currentAnswer += value;

      // Perbarui tampilan
      answerElement.innerText = currentAnswer;
    });
  });

  // Tambahkan jawaban ke `answerHolder` ketika dibutuhkan
  document.getElementById('btnEqual').addEventListener('click', () => {
    if (currentAnswer !== '') {
      answerHolder.push(currentAnswer); // Simpan jawaban
      currentAnswer = ''; // Reset jawaban sementara
    }
  });
}

function calculateNumber() {
  number = answerHolder;
  const nonNumberElements = getNonNumberElements();
  // console.log(nonNumberElements);
  // number = parseInt(answerHolder[0]);
  // Object.values(nonNumberElements).forEach((li) => {
  //   li.addEventListener('click', () => {
  //     const nonNumberElements = li;
  //   });
  // });
  for (const key in nonNumberElements) {
    nonNumberElements[key].addEventListener('click', () => {
      console.log(`${key} clicked`);
      
      switch (nonNumberElements[key]) {
        case (nonNumberElements[key] == nonNumberElements.btnPlus) :
          calculationPlus();
          break;
      }
    });
  }
}

// function calculationPlus() {
//   answerHolder;
// }

function getNumberElements() {
  return {
    btnOne: document.getElementById('btnOne'),
    btnTwo: document.getElementById('btnTwo'),
    btnThree: document.getElementById('btnThree'),
    btnFour: document.getElementById('btnFour'),
    btnFive: document.getElementById('btnFive'),
    btnSix: document.getElementById('btnSix'),
    btnSeven: document.getElementById('btnSeven'),
    btnEight: document.getElementById('btnEight'),
    btnNine: document.getElementById('btnNine'),
    btnZero: document.getElementById('btnZero'),
    btnDoubleZero: document.getElementById('btnDoubleZero'),
    btnDot: document.getElementById('btnDot'),
  };
}

function getNonNumberElements() {
  return {
    btnDeleteAll: document.getElementById('btnDeleteAll'),
    btnPercent: document.getElementById('btnPercent'),
    btnBAckspace: document.getElementById('btnBackspace'),
    btnDivision: document.getElementById('btnDivision'),
    btnMultiple: document.getElementById('btnMultiple'),
    btnSubstraction: document.getElementById('btnSubstraction'),
    btnPlus: document.getElementById('btnPlus'),
    btnEqual: document.getElementById('btnEqual'),
  };
}
