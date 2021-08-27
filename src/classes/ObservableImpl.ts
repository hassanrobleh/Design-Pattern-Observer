import { Observer } from './../interfaces/Observer';
import { Observable } from './../interfaces/Observable';
export class ObservableImpl implements Observable {

    private state: number = 10;

    private observers: Observer[] = [];

    // constructor(observers: Observer[]) {
    //     this.observers = observers
    // }

    subscriber(o: Observer) {
        this.observers.push(o);
    };

    unsubscriber(o: Observer) {
        const i = this.observers.indexOf(o);

        if(i >= 0) {
            this.observers.splice(i, 1);
        }
    };

    notifyObservers() {
        console.log(this.observers)
        for (const obs of this.observers) {
            obs.update(this);
        }
    };

    getState() {
        return this.state;
    }

    setState(state: number) {
        this.state = state;
        this.notifyObservers();
    }

    
}