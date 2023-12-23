import axiosInstance from './axiosInstance';

export const getPositions = async () => {
  try {
    const { data } = await axiosInstance.get('/positions');

    return data.positions;
  } catch (error) {
    throw new Error();
  }
};
