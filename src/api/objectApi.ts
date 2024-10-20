import axiosClient from './axiosClient';

const objectApi = {
  getObjects: () => {
    return axiosClient.get('/objects');
  },
};

export default objectApi;