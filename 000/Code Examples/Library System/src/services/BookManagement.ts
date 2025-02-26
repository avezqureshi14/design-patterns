import { Book } from "../models/Book";

export class BookManagement {
    private books: Map<string, Book> = new Map();

    addBook(book: Book): void {
        if (this.books.has(book.isbn)) {
            this.books.get(book.isbn)!.copies += book.copies;
        } else {
            this.books.set(book.isbn, book);
        }
    }

    removeBook(isbn: string): void {
        this.books.delete(isbn);
    }

    getBook(isbn: string): Book | undefined {
        return this.books.get(isbn);
    }
}
