// coffee.mjs

export function makeCoffee(name) {
  return new Promise((resolve, reject) => {
    const estimationTime = 2000;
    const isSuccess = Math.random() > 0.9;  // 10% chance of success

    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi...`);

    setTimeout(() => {
      if (!isSuccess) {
        reject(new Error('Maaf, kopi gagal dibuatkan.'));
        return;
      }

      console.log('Pramusaji selesai membuat kopi.');
      resolve(name);
    }, estimationTime);
  });
}

export function sendCoffee(name) {
  return new Promise((resolve, reject) => {
    const estimationTime = 1000;
    const isSuccess = Math.random() > 0.9;  // 10% chance of success

    console.log('Pramusaji sedang mengantarkan kopi pesanan');

    setTimeout(() => {
      if (!isSuccess) {
        reject(new Error('Maaf, kopi gagal diantarkan.'));
        return;
      }

      console.log('Pramusaji sudah sampai ke meja.');
      resolve(name);
    }, estimationTime);
  });
}
