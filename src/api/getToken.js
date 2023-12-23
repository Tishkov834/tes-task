import axiosInstance from './axiosInstance';

export const getTokens = async () => {
  try {
    const { data } = await axiosInstance.get('/token');

    return data.token;
  } catch (error) {
    throw new Error();
  }
};
