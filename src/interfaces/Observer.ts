import { Observable } from './Observable';
export interface Observer {

    update(ob: Observable): void;
}