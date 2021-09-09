import axios, { AxiosResponse } from 'axios';

import {
  IComorbidity,
  IGroup,
  PatientRegistration,
  PatientSelf,
  StatusCheck,
} from '~/interfaces';

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

export const createPatientReq = async (
  patient: PatientRegistration,
  onUploadProgress: (e: ProgressEvent) => void
): Promise<string> => {
  const data = new FormData();

  data.append('name', patient.name);
  data.append('cpf', patient.cpf);
  if (patient.susCard) data.append('susCard', patient.susCard);
  data.append('phone', patient.phone);
  data.append('street', patient.street);
  data.append('number', patient.number);
  if (patient.complement) data.append('complement', patient.complement);
  data.append('reference', patient.reference);
  data.append('neighborhood', patient.neighborhood);

  data.append('idCategory', patient.idCategory);
  data.append('idGroup', patient.idGroup);
  data.append('renOncImun', patient.renOncImun);
  if (patient.idComorbidity)
    data.append('idComorbidity', patient.idComorbidity);

  if (patient.idDocFront) data.append('idDocFront', patient.idDocFront);
  if (patient.idDocVerse) data.append('idDocVerse', patient.idDocVerse);
  if (patient.cpfAttachment) data.append('cpf', patient.cpfAttachment);
  if (patient.addressProof) data.append('addressProof', patient.addressProof);
  if (patient.medicalReport)
    data.append('medicalReport', patient.medicalReport);
  if (patient.medicalAuthorization)
    data.append('medicalAuthorization', patient.medicalAuthorization);
  if (patient.workContract) data.append('workContract', patient.workContract);
  if (patient.preNatalCard) data.append('preNatalCard', patient.preNatalCard);
  if (patient.puerperalCard)
    data.append('puerperalCard', patient.puerperalCard);
  if (patient.bornAliveDec) data.append('bornAliveDec', patient.bornAliveDec);
  if (patient.auxDoc) data.append('auxDoc', patient.auxDoc);

  const response: AxiosResponse<{ msg: string }> = await api.post(
    '/patients',
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    }
  );

  return response.data.msg;
};

export const statusCheckReq = async (cpf: string): Promise<StatusCheck> => {
  const response: AxiosResponse<StatusCheck> = await api.get(
    `/patients/status/${cpf}`
  );

  return response.data;
};

export const patientSelfReq = async (cpf: string): Promise<PatientSelf> => {
  const response: AxiosResponse<PatientSelf> = await api.get(
    `/patients/me/${cpf}`
  );

  return response.data;
};

export const updatePatientReq = async (
  id: string,
  patient: PatientRegistration,
  onUploadProgress: (e: ProgressEvent) => void
): Promise<string> => {
  const data = new FormData();

  data.append('name', patient.name);
  data.append('cpf', patient.cpf);
  if (patient.susCard) data.append('susCard', patient.susCard);
  data.append('phone', patient.phone);
  data.append('street', patient.street);
  data.append('number', patient.number);
  if (patient.complement) data.append('complement', patient.complement);
  data.append('reference', patient.reference);
  data.append('neighborhood', patient.neighborhood);

  if (patient.idDocFront) data.append('idDocFront', patient.idDocFront);
  if (patient.idDocVerse) data.append('idDocVerse', patient.idDocVerse);
  if (patient.cpfAttachment) data.append('cpf', patient.cpfAttachment);
  if (patient.addressProof) data.append('addressProof', patient.addressProof);
  if (patient.medicalReport)
    data.append('medicalReport', patient.medicalReport);
  if (patient.medicalAuthorization)
    data.append('medicalAuthorization', patient.medicalAuthorization);
  if (patient.workContract) data.append('workContract', patient.workContract);
  if (patient.preNatalCard) data.append('preNatalCard', patient.preNatalCard);
  if (patient.puerperalCard)
    data.append('puerperalCard', patient.puerperalCard);
  if (patient.bornAliveDec) data.append('bornAliveDec', patient.bornAliveDec);
  if (patient.auxDoc) data.append('auxDoc', patient.auxDoc);

  const response: AxiosResponse<{ msg: string }> = await api.put(
    `/patients/${id}`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    }
  );

  return response.data.msg;
};
