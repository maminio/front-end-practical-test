import { getAxiosUrl } from 'helpers/baseUrl';
import { axiosGet, axiosPost } from './utils';

export const getHealth = (config = null) => {
  return axiosGet(`${getAxiosUrl()}/health`, config);
};
