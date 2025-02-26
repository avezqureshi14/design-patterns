import { GroupingStrategy } from "./grouping.strategy";

export class DivisionStrategy implements GroupingStrategy {
    execute(arr1: number[], arr2: number[]): Record<string, number[]> {
        return this.group(arr1.map((val, i) => (arr2[i] !== 0 ? val / arr2[i] : 0)));
    }
    private group(values: number[]) {
        return {
            lessThanMinus50: values.filter(val => val < -50),
            greaterThanMinus50: values.filter(val => val >= -50)
        };
    }
}