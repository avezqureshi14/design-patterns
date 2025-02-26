// The Composite Design Pattern is a structural pattern that allows you to treat individual objects and compositions of objects uniformly.This pattern is particularly useful for building tree - like structures, where individual items and groups of items need to be handled in the same way.

// Component Interface
class FileSystemItem {
    getSize() { }
    display(indentation = '') { }
}

// Leaf: File
class File extends FileSystemItem {
    constructor(name, size) {
        super();
        this.name = name;
        this.size = size;
    }

    getSize() {
        return this.size;
    }

    display(indentation = '') {
        console.log(`${indentation}- File: ${this.name} (${this.size} KB)`);
    }
}

// Composite: Folder
class Folder extends FileSystemItem {
    constructor(name) {
        super();
        this.name = name;
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    getSize() {
        return this.items.reduce((total, item) => total + item.getSize(), 0);
    }

    display(indentation = '') {
        console.log(`${indentation}+ Folder: ${this.name}`);
        this.items.forEach(item => item.display(indentation + '  '));
    }
}

// Client code
const rootFolder = new Folder("Root");
const file1 = new File("File1.txt", 10);
const file2 = new File("File2.txt", 20);

const subFolder = new Folder("SubFolder");
const file3 = new File("File3.txt", 5);

subFolder.add(file3);
rootFolder.add(file1);
rootFolder.add(file2);
rootFolder.add(subFolder);

console.log("Total size:", rootFolder.getSize(), "KB");
rootFolder.display();
