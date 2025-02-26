export class Book {
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
            this.copies = this.copies - 1;
            return true;
        }
        return false;
    }

    returnCopy(): void {
        this.copies += 1;
    }
}