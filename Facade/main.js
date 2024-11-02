
// The Facade Design Pattern is a structural design pattern that provides a simplified interface to a complex subsystem, making it easier for clients to interact with it.The idea is to "hide" the complexities of the system and provide a cleaner, more straightforward API or interface for the client

// Subsystem 1: Seat Inventory
class SeatInventory {
    checkAvailability(seatNumber) {
        console.log(`Checking availability for seat ${seatNumber}`);
        // Here, just simulating availability
        return true;
    }

    reserveSeat(seatNumber) {
        console.log(`Reserving seat ${seatNumber}`);
    }
}

// Subsystem 2: Payment Processor
class PaymentProcessor {
    processPayment(paymentMethod, amount) {
        console.log(`Processing ${paymentMethod} payment of $${amount}`);
        // Simulate successful payment
        return true;
    }
}

// Subsystem 3: Booking Service
class BookingService {
    bookTicket(seatNumber) {
        console.log(`Booking ticket for seat ${seatNumber}`);
    }
}

// Subsystem 4: Notification Service
class NotificationService {
    sendConfirmation(customerName) {
        console.log(`Sending booking confirmation to ${customerName}`);
    }
}

// Facade: Ticket Booking Facade
class TicketBookingFacade {
    constructor() {
        this.seatInventory = new SeatInventory();
        this.paymentProcessor = new PaymentProcessor();
        this.bookingService = new BookingService();
        this.notificationService = new NotificationService();
    }

    bookTicket(customerName, seatNumber, paymentMethod, amount) {
        // Check seat availability
        if (!this.seatInventory.checkAvailability(seatNumber)) {
            console.log(`Seat ${seatNumber} is not available.`);
            return;
        }
        // Process payment
        if (!this.paymentProcessor.processPayment(paymentMethod, amount)) {
            console.log("Payment failed.");
            return;
        }
        // Book the ticket
        this.seatInventory.reserveSeat(seatNumber);
        this.bookingService.bookTicket(seatNumber);
        // Send confirmation
        this.notificationService.sendConfirmation(customerName);

        console.log(`Ticket booking completed for ${customerName}`);
    }
}

// Client code
const ticketBookingFacade = new TicketBookingFacade();
ticketBookingFacade.bookTicket("Alice", 42, "Credit Card", 15.0);
