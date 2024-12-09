// belanja online

import * as ecommerce from './callback_ecommerce.js';

console.log('Saya memilih barang pesanan')

ecommerce.surfingEcommerce(() => {
  ecommerce.sendPackage(() => {
    ecommerce.unboxing(() => {

      console.log('Saya memberi rating di toko✨✨✨✨✨');
    })
  })
})