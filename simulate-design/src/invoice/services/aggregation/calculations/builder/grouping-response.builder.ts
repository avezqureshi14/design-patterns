export class GroupingResponseBuilder {
    private response: Record<string, any> = {};

    addResponse(strategyName: string, strategyResponse: any) {
        this.response[strategyName] = strategyResponse;
    }

    build() {
        return this.response;
    }
}
