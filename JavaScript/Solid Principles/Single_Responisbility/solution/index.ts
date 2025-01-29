import { Product, Order } from "./Order";
import { CalculatePricing } from "./CalculatePricing";
import { Invoice } from "./Invoice";
import { Payment } from "./Payment";
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
const products = order.getProducts();
console.log(products);
const pricing = new CalculatePricing();
pricing.calculatePricing(products);

const invoice = new Invoice();
invoice.generateInvoice(products);

const payment = new Payment();
payment.paymentProcessing();
