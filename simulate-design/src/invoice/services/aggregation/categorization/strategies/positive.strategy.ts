import { NumberStrategy } from "./number.strategy";

export class PositiveNumberStrategy implements NumberStrategy {
    filterNumbers(numbers: number[]): number[] {
        return numbers.filter(num => num >= 0);
    }
}

