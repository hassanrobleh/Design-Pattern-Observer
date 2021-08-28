import { DisplayConditions } from './observateurs/DisplayConditions';
import { WeatherData } from './WeatherData';


export class RunStation {

    static main() {
        const weatherData: WeatherData = new WeatherData()

        const displayConditions = new DisplayConditions(weatherData);

        weatherData.setMesures(26, 65, 1020);

        return displayConditions.display();

    }


}

