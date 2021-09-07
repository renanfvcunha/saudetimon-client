import axios, { AxiosResponse } from 'axios';

import { IGroup } from '~/interfaces';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// eslint-disable-next-line import/prefer-default-export
export const groupsReq = async (): Promise<IGroup[]> => {
  const response: AxiosResponse<IGroup[]> = await api.get('/groups');

  return response.data;
};
