import { NumberStrategyFactory } from "./factory/number.factory";

export class CategorizationService {
    separateNumbers(numbers: number[]): { positives: number[], negatives: number[] } {
        const positiveStrategy = NumberStrategyFactory.getStrategy('positive');
        const negativeStrategy = NumberStrategyFactory.getStrategy('negative');

        return {
            positives: positiveStrategy.filterNumbers(numbers),
            negatives: negativeStrategy.filterNumbers(numbers),
        };
    }
}
