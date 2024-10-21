import { makeAutoObservable } from 'mobx';
import { authStore, AuthStore } from './authStore';
import { objectStore, ObjectStore } from './objectStore';

class Store {
  authStore: AuthStore;
  objectStore: ObjectStore;

  constructor() {
    this.authStore = authStore;
    this.objectStore = objectStore;

    makeAutoObservable(this);
  }
}

export const store = new Store();