export class Transaction {
    constructor(
        public transactionType: "borrow" | "return",
        public memberId: string,
        public bookIsbn: string,
        public transactionDate: Date
    ) { }
}
