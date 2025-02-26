import { Injectable } from '@nestjs/common';
import { CalculationService } from './aggregation/calculations/calculations.service';
import { CategorizationService } from './aggregation/categorization/categorization.service';
@Injectable()
export class InvoiceService {
    private readonly categorizationService: CategorizationService;
    private readonly calculationService: CalculationService;

    constructor() {
        this.categorizationService = new CategorizationService();
        this.calculationService = new CalculationService();
    }

    groupData(numbers: any[]) {
        const { positives, negatives } = this.categorizationService.separateNumbers(numbers)
        return this.calculationService.calculate(positives, negatives);
    }
}

