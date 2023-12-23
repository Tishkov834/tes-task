import { useToast } from 'vue-toastification';

import { getTokens } from './getToken';
import axiosInstance from './axiosInstance';

export const createUser = async (user) => {
  const toast = useToast();

  try {
    const token = await getTokens();

    const { data } = await axiosInstance.post('/users', user, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Token: token,
      },
    });

    return data;
  } catch (error) {
    return toast.error(error.response?.data?.message || 'Something went wrong, please check your connection');
  }
};
