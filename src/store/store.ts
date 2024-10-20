import {makeAutoObservable} from "mobx";
import {removeAuthKeyFromLocalStorage, setAuthKeyToLocalStorage} from "../helpers/localStorage";
import authApi from "../api/authApi";
import objectApi from "../api/objectApi";

class store {
  authKey?: string;
  objects?: any[];

  constructor() {
    makeAutoObservable(this);
    this.authKey = '';
    this.objects = undefined;
  }

  async getObjects() {
    try {
      const response = await objectApi.getObjects();
      if (response) {
        this.objects = response.data;
      }
    } catch (error) {
      this.objects = undefined;
    }
  }

  //Authorization

  setAuthKey(key: string) {
    this.authKey = key;
    setAuthKeyToLocalStorage(key);
  }

  async login(key: string) {
    try {
      await authApi.login(key);
      this.setAuthKey(key);
      return true;
    } catch {
      return false;
    }
  }

  logout() {
    removeAuthKeyFromLocalStorage();
    this.authKey = undefined;
  }

}

export default new store();
