import { ISubject } from '../../interfaces/ISubject';
import { IDisplay } from '../../interfaces/IDisplay';
import { ISubscribers } from '../../interfaces/ISubscribers';

export class DisplayConditions implements ISubscribers, IDisplay {

    public temperature: number = 0;
    public humidity: number = 0;
    public pressure: number = 0;
    public weatherData: ISubject;

    constructor(weatherData: ISubject /*, temperature: number, humidite: number */) {
        this.weatherData = weatherData;
        weatherData.addSubscriber(this);
        // this.temperature = temperature;
        // this.humidite = humidite;
    }

    update(temperature: number, humidity: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }

    display() {
        return `Conditions actuelles ${this.temperature} degrés C et ${this.humidity} % d'humidité`;
    }


}