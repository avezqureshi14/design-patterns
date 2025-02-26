import { Controller, Get } from '@nestjs/common';
import { InvoiceService } from './services/invoice.service';

@Controller('invoice')
export class InvoiceController {
    constructor(private readonly groupingService: InvoiceService) { }
    @Get()
    execute(): any {
        const arr = [100, -5, 8, -60, -6, 12, -7, 3];
        return this.groupingService.groupData(arr);
    }

}
