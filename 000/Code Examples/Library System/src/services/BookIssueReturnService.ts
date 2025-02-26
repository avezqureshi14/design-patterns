import { Book } from "../models/Book";
import { Member } from "../models/Member";
import { Transaction } from "../models/Transaction";
import { TransactionManagement } from "./TransactionManagement";

export class BookIssueReturnService {
    private transactionManagement: TransactionManagement = new TransactionManagement();

    borrowBook(book: Book, member: Member, dueDate: Date): boolean {
        if (member.borrowBook(book, dueDate)) {
            const transaction = new Transaction("borrow", member.memberId, book.isbn, new Date());
            this.transactionManagement.recordTransaction(transaction);
            return true;
        }
        return false;
    }

    returnBook(book: Book, member: Member): boolean {
        if (member.returnBook(book)) {
            const transaction = new Transaction("return", member.memberId, book.isbn, new Date());
            this.transactionManagement.recordTransaction(transaction);
            return true;
        }
        return false;
    }
}
