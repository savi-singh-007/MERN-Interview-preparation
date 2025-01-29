import { Product } from "./Order";


export class Invoice {
  generateInvoice(products: Product[]) {
    console.log(`
---------------------INVOICE---------------------
Invoice Date : ${new Date().toDateString()}
-------------------------------------------------
Product Name\tPrice`);

    const totalPrice = products.forEach((item) => {
      console.log(`Product : ${item.name} \t\t Price : ${item.price}`);
    });

    console.log("---------------------------------");
    console.log(`Total Amount : ${totalPrice}`);
  }
}
