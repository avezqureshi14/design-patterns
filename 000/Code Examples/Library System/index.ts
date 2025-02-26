// Observer Interface
//Member and Librarian are the concrete classes of the observer
interface Observer {
    update(message: string): void;
}

// NotificationService (Publisher)
class NotificationService {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(message: string): void {
        for (const observer of this.observers) {
            observer.update(message);
        }
    }
}

// Book Class
class Book {
    constructor(
        public isbn: string,
        public title: string,
        public author: string,
        public copies: number
    ) { }

    isAvailable(): boolean {
        return this.copies > 0;
    }

    issueCopy(): boolean {
        if (this.isAvailable()) {
            this.copies -= 1;
            return true;
        }
        return false;
    }

    returnCopy(): void {
        this.copies += 1;
    }
}

// Member Class (Observer)
class Member implements Observer {
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

// Librarian Class
class Librarian {
    constructor(public name: string) { }

    addBook(library: Library, book: Book): void {
        library.addBook(book);
    }

    removeBook(library: Library, isbn: string): void {
        library.removeBook(isbn);
    }

    issueBook(library: Library, member: Member, isbn: string): boolean {
        return library.issueBook(member, isbn);
    }

    returnBook(library: Library, member: Member, isbn: string): boolean {
        return library.returnBook(member, isbn);
    }
}

// Library Class (Subject)
class Library {
    private books: Map<string, Book> = new Map();
    private members: Map<string, Member> = new Map();
    private notificationService: NotificationService = new NotificationService();

    constructor(public name: string) { }

    addBook(book: Book): void {
        if (this.books.has(book.isbn)) {
            this.books.get(book.isbn)!.copies += book.copies;
        } else {
            this.books.set(book.isbn, book);
        }
        this.notificationService.notifyObservers(`${book.title} is now available in the library.`);
    }

    removeBook(isbn: string): void {
        this.books.delete(isbn);
    }

    registerMember(member: Member): void {
        this.members.set(member.memberId, member);
        this.notificationService.addObserver(member);
    }

    issueBook(member: Member, isbn: string): boolean {
        if (this.books.has(isbn) && this.members.has(member.memberId)) {
            const book = this.books.get(isbn)!;
            const dueDate = new Date();
            dueDate.setDate(dueDate.getDate() + 14); // 2 weeks
            return member.borrowBook(book, dueDate);
        }
        return false;
    }

    returnBook(member: Member, isbn: string): boolean {
        if (this.books.has(isbn) && this.members.has(member.memberId)) {
            const book = this.books.get(isbn)!;
            return member.returnBook(book);
        }
        return false;
    }

    notifyAvailability(isbn: string): void {
        if (this.books.has(isbn)) {
            this.notificationService.notifyObservers(`${this.books.get(isbn)!.title} is available now!`);
        }
    }
}

// Transaction Class for Record Keeping
class Transaction {
    constructor(
        public transactionType: "borrow" | "return",
        public memberId: string,
        public bookIsbn: string,
        public transactionDate: Date
    ) { }
}

// Sample Usage
const library = new Library("City Library");
const librarian = new Librarian("Sarah");

const book1 = new Book("123", "TypeScript Programming", "Author A", 5);
const book2 = new Book("456", "Design Patterns", "Author B", 3);

librarian.addBook(library, book1);
librarian.addBook(library, book2);

const member = new Member("1", "John Doe");
library.registerMember(member);

librarian.issueBook(library, member, "123");  // Issue a book
librarian.returnBook(library, member, "123"); // Return the book

// Notify a member about a new book addition
librarian.addBook(library, new Book("789", "Advanced TypeScript", "Author C", 2));
