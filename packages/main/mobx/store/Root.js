// @flow
import {makeAutoObservable} from "mobx";

class RootStore {
    testNum: number = 0;
    auth: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.testNum++
    }
    updateAuth(auth: boolean) {
        this.auth = auth
    }
}

const store: RootStore = new RootStore()

export default store;
