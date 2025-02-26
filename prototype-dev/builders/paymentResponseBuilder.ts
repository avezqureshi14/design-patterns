export class PaymentResponseBuilder {
    private response: any = {};

    setAmount(amount: number) {
        this.response.amount = amount;
        return this;
    }

    setStatus(status: string) {
        this.response.status = status;
        return this;
    }

    setTransactionId(transactionId: string) {
        this.response.transactionId = transactionId;
        return this;
    }

    build() {
        return this.response;
    }
}
