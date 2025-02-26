import { GroupingResponseBuilder } from "./builder/grouping-response.builder";
import { CompositeGrouping } from "./composite/composite-grouping";

export class CalculationService {
    private readonly compositeGrouping: CompositeGrouping;

    constructor() {
        this.compositeGrouping = new CompositeGrouping();
    }

    calculate(arr1: number[], arr2: number[]) {
        const responses = this.compositeGrouping.execute(arr1, arr2);
        const builder = new GroupingResponseBuilder();
        console.log(responses);

        Object.entries(responses).forEach(([strategyName, strategyResponse]) => {
            builder.addResponse(strategyName, strategyResponse);
        });

        return builder.build();
    }
}

