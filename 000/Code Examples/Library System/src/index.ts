import { Library } from "./facades/Library";
import { Book } from "./models/Book";
import { Member } from "./models/Member";

// Creating instances
const library = new Library();

const book1 = new Book("123", "TypeScript Programming", "Author A", 5);
const book2 = new Book("456", "Design Patterns", "Author B", 3);

library.addBook(book1);
library.addBook(book2);

const member = new Member("1", "John Doe");
library.registerMember(member);

// Borrowing and Returning Books
library.issueBook(book1, member, new Date());
library.returnBook(book1, member);

// Notify about availability of a new book
library.addBook(new Book("789", "Advanced TypeScript", "Author C", 2));
