export class Transaction {
    constructor(
        public transactionType: "borrow" | "return",
        public memberId
    ) {

    }
}