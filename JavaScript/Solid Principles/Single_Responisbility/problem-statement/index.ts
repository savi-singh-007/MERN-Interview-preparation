import { Product, Order } from "./Order";
const product1 = {
  id: 1,
  name: "T Shirt",
  price: 9_999,
  currency: "$",
};
const product2 = {
  id: 2,
  name: "Pant",
  price: 10_999,
  currency: "$",
};

const prod1 = new Product(product1);
const prod2 = new Product(product2);

const order = new Order();

order.addProduct(prod1);
order.addProduct(prod2);

console.log(order.getProducts());
order.calculatePricing();
order.generateInvoice();
order.paymentProcessing();
