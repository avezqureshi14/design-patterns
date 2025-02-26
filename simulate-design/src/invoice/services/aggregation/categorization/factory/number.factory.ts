import { NegativeNumberStrategy } from "../strategies/negative.strategy";
import { NumberStrategy } from "../strategies/number.strategy";
import { PositiveNumberStrategy } from "../strategies/positive.strategy";

export class NumberStrategyFactory {
    static getStrategy(type: 'positive' | 'negative'): NumberStrategy {
        if (type === 'positive') {
            return new PositiveNumberStrategy();
        } else {
            return new NegativeNumberStrategy();
        }
    }
}
