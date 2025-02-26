import { NumberStrategy } from "./number.strategy";

export class NegativeNumberStrategy implements NumberStrategy {
    filterNumbers(numbers: number[]): number[] {
        return numbers.filter(num => num < 0);
    }
}
