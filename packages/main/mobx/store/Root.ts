// @flow
import {makeAutoObservable} from "mobx";

class RootStore {
    testNum: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.testNum++
    }
}

const store: RootStore = new RootStore()

export default store;
