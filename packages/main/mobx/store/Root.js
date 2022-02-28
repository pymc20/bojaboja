// @flow
import {makeAutoObservable} from "mobx";

class RootStore {
    test: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    get test() {
        this.test
    }

    increment() {
        this.test++
    }
}

const store = new RootStore()

export default store;
