import { AdditionStrategy } from "../strategies/addition.strategy";
import { DivisionStrategy } from "../strategies/division.strategy";
import { GroupingStrategy } from "../strategies/grouping.strategy";
import { MultiplicationStrategy } from "../strategies/multiplication.strategy";
import { SubtractionStrategy } from "../strategies/subtraction.strategy";

export class CompositeGrouping implements GroupingStrategy {
    private strategies: { name: string; strategy: GroupingStrategy }[] = [];

    constructor() {
        // Initialize with default strategies
        this.strategies = [
            { name: "Addition", strategy: new AdditionStrategy() },
            { name: "Subtraction", strategy: new SubtractionStrategy() },
            { name: "Multiplication", strategy: new MultiplicationStrategy() },
            { name: "Division", strategy: new DivisionStrategy() }
        ];
    }

    addStrategy(name: string, strategy: GroupingStrategy) {
        this.strategies.push({ name, strategy });
    }

    execute(arr1: number[], arr2: number[]): Record<string, any> {
        return this.strategies.reduce((acc, { name, strategy }) => {
            acc[name] = strategy.execute(arr1, arr2);
            return acc;
        }, {} as Record<string, any>);
    }
}
