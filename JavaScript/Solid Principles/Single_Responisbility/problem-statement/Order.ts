interface Item {
  id: number;
  name: string;
  price: number;
  currency: string;
}

export class Product {
  id: number;
  name: string;
  price: number;
  currency: string;

  constructor(item: Item) {
    this.id = item.id;
    this.name = item.name;
    this.price = item.price;
    this.currency = item.currency;
  }
}
export class Order {
  products: Product[] = [];

  addProduct(product: Product) {
    return this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  removeProduct(id: number) {
    const findItemIndex = this.products.findIndex((item: Product) => {
      return (item.id = id);
    });
    return this.products.splice(findItemIndex, 1);
  }

  calculatePricing() {
    const total = this.products.reduce((total, item) => {
      total += item.price;
      return total;
    }, 0);
    console.log("fetching latest exchange rates...", total);
  }

  generateInvoice() {
    console.log(`
---------------------INVOICE---------------------
Invoice Date : ${new Date().toDateString()}
-------------------------------------------------
Product Name\tPrice`);

    const totalPrice = this.products.forEach((item) => {
      console.log(`Product : ${item.name} \t\t Price : ${item.price}`);
    });

    console.log("---------------------------------");
    console.log(`Total Amount : ${totalPrice}`);
  }

  paymentProcessing() {
    console.log("Payment processing...");
    console.log("Payment Successfull...");
    console.log("send for shipping...");
    console.log("send email to customer...");
  }
}
