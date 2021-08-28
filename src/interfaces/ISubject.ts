import { ISubscribers } from './ISubscribers';

export interface ISubject {
    addSubscriber(o: ISubscribers): void;
    removeSubscriber(o: ISubscribers): void;
    notifierSubscribers(): void;
}