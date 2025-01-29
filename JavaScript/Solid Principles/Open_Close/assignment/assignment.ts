import { Product } from "../../Single_Responisbility/solution/Order";

interface IStandardInvoceFormat {
  generateInvoice(): string;
}

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

export class Invoice {
  constructor(private format: IStandardInvoceFormat) {}
  generateInvoice(products: Product[], amount: number) {
    console.log(`
Invoice Date: ${new Date().toDateString()}
-------------------------------
Product Name\tPrice
                `);

    products.forEach((product) => {
      console.log(`${product.name}\t\t${product.price}`);
    });
    console.log("-------------------------------");
    console.log(`Total: ${amount}`);
    console.log("-------------------------------");
    console.log("Format : " + this.format.generateInvoice());
  }
}

class MsWord implements IStandardInvoceFormat {
  generateInvoice(): string {
    return "Print Invoce : MS Word Format \t File Name : file.doc";
  }
}

class Pdf implements IStandardInvoceFormat {
  generateInvoice(): string {
    return "Print Invoce : PDF Format \t File Name : file.pdf";
  }
}
class Excel implements IStandardInvoceFormat {
  generateInvoice(): string {
    return "Print Invoce : MS Excel Format \t File Name : file.xls";
  }
}

const printInvoiceInExcel = new Invoice(new Excel());
printInvoiceInExcel.generateInvoice([product1, product2], product1.price + product2.price);

const printInvoiceInPdf = new Invoice(new Pdf());
printInvoiceInPdf.generateInvoice([product1, product2], product1.price + product2.price);

const printInvoiceInWord = new Invoice(new MsWord());
printInvoiceInWord.generateInvoice([product1, product2], product1.price + product2.price);
