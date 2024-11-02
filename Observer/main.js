//Similar like pub-sub model
// Subject: GroupChat
class GroupChat {
    constructor() {
        this.users = []; // List of users in the chat
    }

    // Method to add a user to the chat
    addUser(user) {
        this.users.push(user);
        user.setGroupChat(this); // Set the group chat for the user
    }

    // Method to remove a user from the chat
    removeUser(user) {
        this.users = this.users.filter(u => u !== user);
    }

    // Method to send a message to the group
    sendMessage(sender, message) {
        console.log(`${sender.name} sent: ${message}`);
        for (const user of this.users) {
            if (user !== sender) {
                user.receiveMessage(sender, message); // Notify other users
            }
        }
    }
}

// Observer: User
class User {
    constructor(name) {
        this.name = name; // User's name
        this.groupChat = null; // Reference to the group chat
    }

    setGroupChat(groupChat) {
        this.groupChat = groupChat; // Set the group chat for this user
    }

    // Method to send a message
    sendMessage(message) {
        if (this.groupChat) {
            this.groupChat.sendMessage(this, message); // Send message through the group chat
        }
    }

    // Method to receive a message
    receiveMessage(sender, message) {
        console.log(`${this.name} received from ${sender.name}: ${message}`);
    }
}

// Client code
const groupChat = new GroupChat(); // Create a GroupChat instance

const user1 = new User("Alice"); // Create users
const user2 = new User("Bob");
const user3 = new User("Charlie");

// Add users to the group chat
groupChat.addUser(user1);
groupChat.addUser(user2);
groupChat.addUser(user3);

// Users send messages
user1.sendMessage("Hello everyone!");
user2.sendMessage("Hi Alice!");
user3.sendMessage("Hey all!");
