import { IObserver } from "../interfaces/IObserver";
import { Book } from "./Book";

export class Member implements IObserver {
    public borrowedBooks: Map<string, Date> = new Map();

    constructor(public memberId: string, public name: string) { }

    borrowBook(book: Book, dueDate: Date): boolean {
        if (book.issueCopy()) {
            this.borrowedBooks.set(book.isbn, dueDate);
            return true;
        }
        return false;
    }

    returnBook(book: Book): boolean {
        if (this.borrowedBooks.has(book.isbn)) {
            book.returnCopy();
            this.borrowedBooks.delete(book.isbn);
            return true;
        }
        return false;
    }

    hasOverdueBooks(): boolean {
        const today = new Date();
        return Array.from(this.borrowedBooks.values()).some(
            (dueDate) => dueDate < today
        );
    }

    update(message: string): void {
        console.log(`Member ${this.name} received notification: ${message}`);
    }
}
