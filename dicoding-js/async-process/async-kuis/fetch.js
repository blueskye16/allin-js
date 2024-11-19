import { API, sampleErrorData, sampleSuccessData } from './fetch-support.js';

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */


function processData(data) {
  // Map each object in the data array to a call to API.fetch with the delay and simulateError properties
  const promises = data.map(item => API.fetch(item.delay, item.simulateError));

  // Return the results or catch errors using Promise.all
  return Promise.all(promises);
}

// async function processData(delay, simulateError) {
// /*   // kode di bawah hanya untuk melihat nilai data. Silakan hapus untuk menjawab kuis.
//   return Promise.resolve(data); */
// }

processData(sampleErrorData).then(console.log).catch(console.log); // Throw exception: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log); // expected output: ['Data from delay 100', 'Data from delay 50']


