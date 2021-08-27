import { Observer } from './Observer';

export interface Observable {

    subscriber(o: Observer): any;
    unsubscriber(o: Observer): any;
    notifyObservers(): any;
}