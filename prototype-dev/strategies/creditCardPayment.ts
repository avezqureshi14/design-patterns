import { PaymentStrategy } from "./paymentStrategy";

export class CreditCardPayment implements PaymentStrategy {
    async process(amount: number) {
        return {
            status: "Sucess",
            transactionId: `CC-${Date.now()}`
        }
    }
}