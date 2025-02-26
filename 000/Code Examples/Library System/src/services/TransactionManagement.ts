import { Transaction } from "../models/Transaction";

export class TransactionManagement {
    private transactions: Transaction[] = [];

    recordTransaction(transaction: Transaction): void {
        this.transactions.push(transaction);
    }

    getTransactions(): Transaction[] {
        return this.transactions;
    }
}
