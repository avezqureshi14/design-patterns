import { BookManagement } from "../services/BookManagement";
import { MemberManagement } from "../services/MemberManagement";
import { TransactionManagement } from "../services/TransactionManagement";
import { NotificationService } from "../services/NotificationService";
import { BookIssueReturnService } from "../services/BookIssueReturnService";
import { Book } from "../models/Book";
import { Member } from "../models/Member";

export class Library {
    private bookManagement: BookManagement = new BookManagement();
    private memberManagement: MemberManagement = new MemberManagement();
    private transactionManagement: TransactionManagement = new TransactionManagement();
    private notificationService: NotificationService = new NotificationService();
    private bookIssueReturnService: BookIssueReturnService = new BookIssueReturnService();

    addBook(book: Book): void {
        this.bookManagement.addBook(book);
        this.notificationService.notifyObservers(`${book.title} is now available in the library.`);
    }

    removeBook(isbn: string): void {
        this.bookManagement.removeBook(isbn);
    }

    registerMember(member: Member): void {
        this.memberManagement.registerMember(member);
        this.notificationService.addObserver(member);
    }

    issueBook(book: Book, member: Member, dueDate: Date): boolean {
        return this.bookIssueReturnService.borrowBook(book, member, dueDate);
    }

    returnBook(book: Book, member: Member): boolean {
        return this.bookIssueReturnService.returnBook(book, member);
    }

    notifyAvailability(book: Book): void {
        this.notificationService.notifyObservers(`${book.title} is available now!`);
    }
}
