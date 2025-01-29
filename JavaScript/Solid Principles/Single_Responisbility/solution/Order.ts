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
}
