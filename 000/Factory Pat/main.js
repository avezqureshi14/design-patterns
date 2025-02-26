// When there is superclass and mulitple subclasses and we want to get object of subclasses based on input and requirement,
// Then we create factory class which takes the responsibility of creating object of class based on input 
// We are not letting know over here which class is being instantiated 

// Step 1: Create a base class or interface for the notifications
class Notification {
    send(message) {
        throw new Error("Method 'send()' must be implemented.");
    }
}

// Step 2: Define specific notification types that extend the base class
//all the below three classes of sms,email, push notification are all concrete classes 
class SMSNotification extends Notification {
    send(message) {
        console.log(`Sending SMS: ${message}`);
    }
}

class EmailNotification extends Notification {
    send(message) {
        console.log(`Sending Email: ${message}`);
    }
}

class PushNotification extends Notification {
    send(message) {
        console.log(`Sending Push Notification: ${message}`);
    }
}

// Step 3: Create the Factory class to generate the appropriate notification type
class NotificationFactory {
    static createNotification(type) {
        switch (type) {
            case "SMS":
                return new SMSNotification();
            case "Email":
                return new EmailNotification();
            case "Push":
                return new PushNotification();
            default:
                throw new Error("Unknown notification type");
        }
    }
}

// Step 4: Using the factory to create objects
function main() {
    const type = "Email"; // This could be dynamic
    const notification = NotificationFactory.createNotification(type);
    notification.send("Hello, Factory Pattern!");
}

main();
