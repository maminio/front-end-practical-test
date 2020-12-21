import axios from 'axios';

export const axiosGet = async (url, options) => {
  try {
    const { data } = await axios.get(url, options);
    return data;
  } catch (e) {
    return new Error(`Error fetching ${url}.`, e);
  }
};

export const axiosPost = async (url, body, options) => {
  try {
    const { data } = await axios.post(url, body, options);
    return data;
  } catch (e) {
    return new Error(`Error post ${url}.`, e);
  }
};

export const axiosDelete = async (url, options) => {
  try {
    const { data } = await axios.delete(url, options);
    return data;
  } catch (e) {
    return new Error(`Error delete ${url}.`, e);
  }
};
