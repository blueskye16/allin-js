/**
 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */

class Item {
  constructor(id, name, quantity, price) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  updateDetails(newName, newQuantity, newPrice) {
    if (typeof newName !== 'string') {
      throw new Error('Name must be a string!');
    }
    if (typeof newQuantity !== 'number' || newQuantity < 0) {
      throw new Error('Quantity must be a valid number!');
    }
    if (typeof newPrice !== 'number' || newPrice < 0) {
      throw new Error('Price must be a valid number!');
    }

    this.name = newName;
    this.quantity = newQuantity;
    this.price = newPrice;
  }

  displayDetails() {
    return `${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
  }
  /* 
  displayDetails() {
  return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
}
  */
}

// Jangan hapus kode di bawah ini!
export default Item;