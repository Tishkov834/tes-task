import axiosInstance from './axiosInstance';

export const getUsers = async (page, count) => {
  try {
    const { data } = await axiosInstance.get('/users', {
      params: {
        page,
        count,
      },
    });

    return data;
  } catch (error) {
    throw new Error();
  }
};
