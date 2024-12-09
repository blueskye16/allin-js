document.addEventListener('DOMContentLoaded', function () {
  const inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
  document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;

  // onInput
  document.getElementById('inputNama').addEventListener('input', function () {
    const jumlahKarakterDiketik =
      document.getElementById('inputNama').value.length;
    const jumlahKarakterMaksimal =
      document.getElementById('inputNama').maxLength;

    console.log('jumlahKarakterDiketik: ', jumlahKarakterDiketik);
    console.log('jumlahKarakterMaksimal: ', jumlahKarakterMaksimal);

    const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
    document.getElementById('sisaKarakter').innerText =
      sisaKarakterUpdate.toString();

    if (sisaKarakterUpdate === 0) {
      document.getElementById('sisaKarakter').innerText =
        'Batas maksimal tercapai!';
    } else if (sisaKarakterUpdate <= 5) {
      document.getElementById('notifikasiSisaKarakter').style.color = 'red';
    } else {
      document.getElementById('notifikasiSisaKarakter').style.color = 'black';
    }
  });

  // onFocus
  document.getElementById('inputNama').addEventListener('focus', function () {
    console.log('inputNama: focus');
    document.getElementById('notifikasiSisaKarakter').style.visibility =
      'visible';
  });

  // onBlur
  document.getElementById('inputNama').addEventListener('blur', function () {
    console.log('inputNama: blur');
    document.getElementById('notifikasiSisaKarakter').style.visibility =
      'hidden';
  });

  // onChange
  document.getElementById('inputCaptcha').addEventListener('change', function () {
    console.log('inputCaptcha: change');
    const inputCaptcha = document.getElementById('inputCaptcha').value;
    const submitButtonStatus = document.getElementById('submitButton');
    if (inputCaptcha === 'PRNU') {
      submitButtonStatus.removeAttribute('disabled');
    } else {
      submitButtonStatus.setAttribute('disabled', '');
    }
  });

  // onChange, buat ngecek value
  document.getElementById('formDataDiri').addEventListener('submit', function (event) {
    const inputCaptcha = document.getElementById('inputCaptcha').value;
    if (inputCaptcha === 'PRNU') {
      alert('Selamat! Captcha Anda lolos :D');
    } else {
      alert('Captcha Anda belum tepat :(');
      document.getElementById('submitButton').setAttribute('disabled', '');
    }
    event.preventDefault();
  });

  // onCopy
  document.getElementById('inputCopy').addEventListener('copy', function () {
    alert('Anda telah men-copy sesuatu...');
  });

  // onPaste
  document.getElementById('inputPaste').addEventListener('paste', function () {
    alert('Anda telah mem-paste sebuah teks...');
  });
});

/* catatan[event]
  onInput: deteksi input value user
  onFocus: deteksi cursor didalem input
  onBlur: deteksi kalo cursor berpindah dari 'focus' input (jadi ilang)
  onChange: deteksi perubahan input(mirip onInput, kursor harus pindah dulu)
  onCopy: clipboard event copy
  onPaste: clipboard event paste
*/