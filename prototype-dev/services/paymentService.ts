import { PaymentContext } from "../context/paymentContext";
import { CreditCardPayment } from "../strategies/creditCardPayment";
import { PayPalPayment } from "../strategies/paypalPayment";
import { PaymentResponseBuilder } from "../builders/paymentResponseBuilder";
import { UPIPaymentStrategy } from "../strategies/upiPayment";

export class PaymentService {
    private context: PaymentContext;

    constructor() {
        this.context = new PaymentContext(new CreditCardPayment()); // Default Strategy
    }

    async processAllPayments() {
        const payments = [
            { method: new CreditCardPayment(), amount: 100 },
            { method: new PayPalPayment(), amount: 200 },
            { method: new UPIPaymentStrategy(), amount: 300 },
        ];

        const results = [];

        for (const payment of payments) {
            this.context.setStrategy(payment.method);
            const response = await this.context.executePayment(payment.amount);

            // Build response using Builder Pattern
            const builtResponse = new PaymentResponseBuilder()
                .setAmount(payment.amount)
                .setStatus(response.status)
                .setTransactionId(response.transactionId)
                .build();

            results.push(builtResponse);
        }

        return results;
    }
}
