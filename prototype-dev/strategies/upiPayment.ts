import { PaymentStrategy } from "./paymentStrategy";

export class UPIPaymentStrategy implements PaymentStrategy {
    async process(amount: number) {
        return {
            status: 'Sucess',
            transactionId: `UPI-${Date.now()}`
        }
    }
}