import { PaymentService } from "./services/paymentService";

(async () => {
    const service = new PaymentService();
    console.log(await service.processAllPayments());
})();
