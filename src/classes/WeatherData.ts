import { ISubscribers } from '../interfaces/ISubscribers';
import { ISubject } from '../interfaces/ISubject';

export class WeatherData implements ISubject {

    private subscribers: ISubscribers[] = [];
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;

    // constructor(subscribers: ISubscribers[]) {
        // this.subscribers = subscribers
        // this.temperature = temperature
        // this.humidity = humidity;
        // this.pressure = pressure;
    // }

    addSubscriber(o: ISubscribers) {
        this.subscribers.push(o)
    }

    removeSubscriber(o: ISubscribers) {
        const i = this.subscribers.indexOf(o);
        if( i >= 0) {
            this.subscribers.splice(i, 1);
        }
    }

    notifierSubscribers() {
        for (let i = 0; i < this.subscribers.length; i++) {
            const subs: ISubscribers = this.subscribers[i];
            subs.update(this.temperature, this.humidity, this.pressure);
        }
    }

    updateMesures(): void {
        this.notifierSubscribers();
    }

    setMesures(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.updateMesures();
    }
}