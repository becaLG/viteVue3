import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";

export const key: InjectionKey<Store<State>> = Symbol();
export type State = {
    counter: number;
}

export default createStore({
    state: {
        counter:0
    }
})