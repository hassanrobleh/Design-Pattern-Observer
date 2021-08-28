import { ISubject } from './../../interfaces/ISubject';
import { IDisplay } from './../../interfaces/IDisplay';
import { ISubscribers } from '../../interfaces/ISubscribers';

export class DisplayStats implements ISubscribers, IDisplay {

    private weatherData: ISubject;
    private temperature: number = 0;
    // private humidity: number = 0;
    // private pressure: number = 0;


    constructor(weatherData: ISubject) {
        this.weatherData = weatherData;
        weatherData.addSubscriber(this);
    }

    update(t:number /*, h: number, p: number */) {
        this.temperature = t;
        // this.humidity = h;
        // this.pressure = p;
        this.display();
    }

    display() {
        return `Température Moy/Max/Min ${this.temperature}`;
    }

    

    

}