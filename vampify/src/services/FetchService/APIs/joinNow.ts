import { getAxiosUrl } from 'helpers/baseUrl';
import { axiosGet, axiosPost } from './utils';

export const submitForm = (type: string, body: any, options: any) => {
  return axiosPost(`${getAxiosUrl()}/join-form/${type}`, body, options);
};
