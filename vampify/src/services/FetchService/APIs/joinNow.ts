import { getAxiosUrl } from 'helpers/baseUrl';
import { axiosGet, axiosPost } from './utils';

export const submitForm = (type: string, body: any, options: any) => {
  console.log(
    '[submitForm]:',
    'type:',
    type,
    'body:',
    body,
    'options:',
    options,
  );
  return axiosPost(`${getAxiosUrl()}/join-form/${type}`, body, options);
};
