import { IObserver } from "../interfaces/IObserver";

export class NotificationService {
    private observers: IObserver[] = [];

    addObserver(observer: IObserver): void {
        this.observers.push(observer);
    }

    removeObserver(observer: IObserver): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(message: string): void {
        for (const observer of this.observers) {
            observer.update(message);
        }
    }
}
