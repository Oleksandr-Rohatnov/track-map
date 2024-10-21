import { makeAutoObservable } from 'mobx';
import objectApi from '../api/objectApi';

export class ObjectStore {
  objects?: any[];

  constructor() {
    makeAutoObservable(this);
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
}

export const objectStore = new ObjectStore();