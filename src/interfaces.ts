export interface IGroup {
  id: number;
  group: string;
}

export interface IComorbidity {
  id: number;
  comorbidity: string;
}

interface IPatient {
  id: number;
  name: string;
  cpf: string;
  susCard?: string;
  phone: string;
  street: string;
  number: string;
  complement?: string;
  reference: string;
  neighborhood: string;
}

export type PatientRegistration = Omit<IPatient, 'id'> & {
  idDocFront?: File;
  idDocVerse?: File;
  cpfAttachment?: File;
  addressProof?: File;
  medicalReport?: File;
  medicalAuthorization?: File;
  preNatalCard?: File;
  puerperalCard?: File;
  bornAliveDec?: File;
  workContract?: File;
  auxDoc?: File;
  renOncImun: string;
  idCategory: string;
  idGroup: string;
  idComorbidity?: string;
};
