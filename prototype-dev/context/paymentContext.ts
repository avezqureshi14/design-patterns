import { PaymentStrategy } from "../strategies/paymentStrategy";

export class PaymentContext {
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    async executePayment(amount: number) {
        return this.strategy.process(amount);
    }
}
