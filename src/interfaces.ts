export interface IGroup {
  id: number;
  group: string;
}

export interface IComorbidity {
  id: number;
  comorbidity: string;
}

interface ICategory {
  id: number;
  category: string;
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

interface IStatus {
  id: number;
  status: string;
  message: string;
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

export type StatusCheck = {
  patient: {
    id: number;
    cpf: string;
    category: ICategory;
    group: IGroup;
    patientStatus: {
      message: string | null;
      status: IStatus;
    };
  };
};

export type PatientSelf = IPatient & {
  susCard: string | null;
  complement: string | null;
  renOncImun: boolean;
  idGroup: number;
  idComorbidity: number | null;
  status: string;
};

export interface IVaccineLocation {
  id: number;
  name: string;
  helperText: string;
  picture: string;
  url: string;
}

export interface IDoubt {
  id: number;
  question: string;
  answer: string;
}
