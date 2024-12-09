// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

function addOrder(customerName, items) {
  const id = generateUniqueId();
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const newOrder = { id, customerName, items, totalPrice, status: 'Menunggu' };
  orders.push(newOrder);
}

function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);
  if (order) {
    order.status = status;
  } else {
    console.error('Order not found');
  }
}

function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === 'Selesai')
    .reduce((sum, order) => sum + order.totalPrice, 0);
}

function deleteOrder(id) {
  const index = orders.findIndex((order) => order.id === id);
  if (index !== -1) {
    orders.splice(index, 1);
  } else {
    console.error('Order not found');
  }
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
