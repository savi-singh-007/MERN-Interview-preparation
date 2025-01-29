interface IPaymentProcesser {
  processPayment(amount: number): void;
}
class PaymentProcessor {
  processs: IPaymentProcesser;
  constructor(processs: IPaymentProcesser) {
    this.processs = processs;
  }
  processPayment(amount: number) {
    this.processs.processPayment(amount);
  }
}

class PaypalProcessor implements IPaymentProcesser {
  processPayment(amount: number): void {
    console.log(`Paypal: Processing payment of $${amount}`);
  }
}

class PaytmProcessor implements IPaymentProcesser {
  processPayment(amount: number): void {
    console.log(`Paytm: Processing payment of $${amount}`);
  }
}

const paypal = new PaypalProcessor();
const paypalPaymentProcesser = new PaymentProcessor(paypal);
paypalPaymentProcesser.processPayment(100);

const paytmProcessor = new PaytmProcessor();
const paytmPaymentProcesser = new PaymentProcessor(paytmProcessor);
paytmPaymentProcesser.processPayment(500);
