import { Product } from "./Order";

export class CalculatePricing {
  calculatePricing(products: Product[]) {
    const total = products.reduce((total, item) => {
      total += item.price;
      return total;
    }, 0);
    console.log("fetching latest exchange rates...", total);
  }
}
