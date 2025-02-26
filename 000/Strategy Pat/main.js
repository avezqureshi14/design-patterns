// The Strategy Design Pattern is a behavioral design pattern that enables selecting an algorithm at runtime.Instead of implementing a single algorithm directly, the code receives different algorithms(or "strategies") as input, making it easier to modify, extend, and reuse different parts independently.

// Concrete Strategies
class CreditCardPayment {
    constructor(cardNumber, cardHolderName) {
        this.cardNumber = cardNumber;
        this.cardHolderName = cardHolderName;
    }

    pay(amount) {
        console.log(`Paying ${amount} using Credit Card.`);
        // Logic for processing credit card payment
    }
}

class PayPalPayment {
    constructor(email) {
        this.email = email;
    }

    pay(amount) {
        console.log(`Paying ${amount} using PayPal.`);
        // Logic for processing PayPal payment
    }
}

class BitcoinPayment {
    constructor(walletAddress) {
        this.walletAddress = walletAddress;
    }

    pay(amount) {
        console.log(`Paying ${amount} using Bitcoin.`);
        // Logic for processing Bitcoin payment
    }
}

// PaymentContext Class
class PaymentContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executePayment(amount) {
        this.strategy.pay(amount);
    }
}

// Example Usage
const creditCardPayment = new CreditCardPayment("1234-5678-8765-4321", "John Doe");
const payPalPayment = new PayPalPayment("john.doe@example.com");
const bitcoinPayment = new BitcoinPayment("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa");

const paymentContext = new PaymentContext(creditCardPayment);
paymentContext.executePayment(100);  // Output: Paying 100 using Credit Card.

paymentContext.setStrategy(payPalPayment);
paymentContext.executePayment(200);  // Output: Paying 200 using PayPal.

paymentContext.setStrategy(bitcoinPayment);
paymentContext.executePayment(300);  // Output: Paying 300 using Bitcoin.
