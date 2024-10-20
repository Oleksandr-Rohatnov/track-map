import {makeAutoObservable} from "mobx";

class Auth {
  authKey: undefined | string;

  constructor() {
    makeAutoObservable(this);
    this.authKey = undefined;
  }

  setAuthKey(key: string) {
    this.authKey = key;
  }

}

export  default new Auth();
