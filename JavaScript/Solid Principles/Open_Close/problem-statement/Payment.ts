class Payment {
  paymentProcessor(amount: number, paymentMethod: string) {
    if (paymentMethod === "card") {
      console.log(`Payment of ${amount} is done using method Credit Card`);
    } else if (paymentMethod === "bank") {
      console.log(`Payment of ${amount} is done using method Bank Transfer`);
    } else if (paymentMethod === "stripe") {
      console.log(`Payment of ${amount} is done using method Stripe`);
    } else {
      console.log("Invalid payment method");
    }
  }
}

const payment  = new Payment();
payment.paymentProcessor(1000, "paypal")