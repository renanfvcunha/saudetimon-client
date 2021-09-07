import axios, { AxiosResponse } from 'axios';

import { IComorbidity, IGroup } from '~/interfaces';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const groupsReq = async (idCategory?: string): Promise<IGroup[]> => {
  let url = '/groups';

  if (idCategory) url += `?idCategory=${idCategory}`;

  const response: AxiosResponse<IGroup[]> = await api.get(url);

  return response.data;
};

export const comorbiditiesReq = async (): Promise<IComorbidity[]> => {
  const response: AxiosResponse<IComorbidity[]> = await api.get(
    '/comorbidities'
  );

  return response.data;
};
