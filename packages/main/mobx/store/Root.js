// @flow
import {makeAutoObservable} from "mobx";

class RootStore {
    testNum: number = 0;
    token: string = "";

    constructor() {
        if(typeof window !== "undefined")
            this.token = localStorage.getItem("token")
        makeAutoObservable(this);
    }

    increment() {
        this.testNum++
    }
}

const store: RootStore = new RootStore()

export default store;
