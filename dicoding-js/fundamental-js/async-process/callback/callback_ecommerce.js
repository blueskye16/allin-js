export function surfingEcommerce(callback) {
  const estimationTime = 2000;

  const inHour = Math.ceil((estimationTime / 1000) + 5);
  console.log(`Toko memproses barang pesanan dalam ${inHour} jam`);
  setTimeout(() => {
    console.log('Barang diproses toko');

    callback();
  }, estimationTime);
}

export function sendPackage(callback) {
  const estimationTime = 3000;

  const inHour = Math.ceil(estimationTime / 1000 + 2);
  console.log(`Barang diantar kurir dalam ${inHour} jam`);
  setTimeout(() => {
    console.log(`Barang sampai di tujuan`);

    callback();
  }, estimationTime);
}

export function unboxing(callback) {
  const estimationTime = 1000;

  const inMinute = Math.ceil(estimationTime / 1000 + 1);
  console.log(`Unboxing barang selama ${inMinute} menit`);
  setTimeout(() => {
    console.log('Barangnya mantap gan');

    callback();
  }, estimationTime);
}