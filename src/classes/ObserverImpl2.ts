import { Observable } from './../interfaces/Observable';
import { Observer } from './../interfaces/Observer';
import { ObservableImpl } from './ObservableImpl';

export class ObserverImpl2 implements Observer {

    private counter: number = 0;

    update(obs: Observable) {
        
        const state = <ObservableImpl> obs;
        let state1 = state.getState();
        // const res = state1 % 2 === 0 ? "paire" : "impaire"
        if(state1 % 2 === 0) {
            this.counter += this.counter;
        } 
        console.log("****** ObserverImpl1 ********");
        console.log("La nouvelle mise à jour: state = " + state1);
        console.log(`Le result de calcul : ${state1 % 2 === 0 ? "paire" : "impaire"}`);
        console.log("Le compteur : " + this.counter);   
        console.log("*************************")
    }
}