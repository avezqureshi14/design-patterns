import { PaymentStrategy } from "./paymentStrategy";

export class PayPalPayment implements PaymentStrategy {
    async process(amount: number) {
        return {
            status: 'Sucess',
            transactionId: `PP-${Date.now()}`
        }
    }
}