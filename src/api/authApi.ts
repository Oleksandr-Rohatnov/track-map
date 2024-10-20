import axiosClient from './axiosClient';

const authApi = {
  login: (authKey: string) => {
    return axiosClient.post('/auth', { authKey });
  },
};

export default authApi;