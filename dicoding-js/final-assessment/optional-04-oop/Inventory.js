/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

import Item from './Item.js';

class Inventory {
  constructor(items = []) {
    this.items = items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemId) {
    const index = this.items.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      this.items.splice(index, 1);
    } else {
      return `item id ${itemId} was not found`;
    }
  }

/*   listItems() {
    return this.items.length > 0
      ? `${this.items(this.displayDetails)}`
      : `List item are empty.`;
  } */
      listItems() {
        return this.items.length > 0
          ? this.items.map(item => item.displayDetails()).join('\n')
          : 'List items are empty.';
      }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
