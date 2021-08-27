import { Observable } from './../interfaces/Observable';
import { Observer } from './../interfaces/Observer';
import { ObservableImpl } from './ObservableImpl';

export class ObserverImpl1 implements Observer {

    update(obs: Observable) {
        
        const state = <ObservableImpl> obs;
        let state1 = state.getState();
        const res = state1 * state1 + 9;

        console.log("****** ObserverImpl1 ********");
        console.log("La nouvelle mise à jour: state = " + state1);
        console.log("Le result de calcul : " + res);
        console.log("*************************")
    }
}