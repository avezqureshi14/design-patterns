export interface GroupingStrategy {
    execute(arr1: number[], arr2: number[]): Record<string, number[]>;
}