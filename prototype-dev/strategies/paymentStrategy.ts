export interface PaymentStrategy {
    process(amount: number): Promise<{ status: string; transactionId: string }>;
}