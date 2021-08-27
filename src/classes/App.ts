import { Observable } from './../interfaces/Observable';
import { Observer } from './../interfaces/Observer';
import { ObserverImpl2 } from './ObserverImpl2';
import { ObserverImpl1 } from './ObserverImpl1';
import { ObservableImpl } from './ObservableImpl';

export class App {

    static main() {
        const observable = new ObservableImpl();

        const obser1 = new ObserverImpl1();
        // const obser2 = new ObserverImpl2();
        // const obser3 = new ObserverImpl1();

        observable.subscriber(obser1);
        // observable.subscriber(obser2);
        // observable.subscriber(obser3);

        observable.setState(55);
        // observable.setState(30);
        observable.unsubscriber(obser1);

        observable.subscriber(<Observer> {
            update() {
                return "ok";
            }
        });

        // observable.setState(33);

        // console.log(obser1.update(observable));

        // console.log("ok")

        
    }
}

// const app = new App();
// app.main();