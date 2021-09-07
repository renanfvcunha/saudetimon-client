import { AxiosResponse } from 'axios';

import Alert from './alert';

export type Err = Error & {
  response?: AxiosResponse<{ msg: string }>;
};

const catchHandler = (err: Err, errMsg: string) => {
  if (err.message === 'Network Error') {
    Alert(
      'error',
      'Erro',
      'Não foi possível conectar ao servidor. Tente novamente ou contate o suporte.'
    );
  } else if (err.response) {
    Alert('error', 'Erro', err.response.data.msg);
  } else {
    Alert('error', 'Erro', errMsg);
  }
};

export default catchHandler;
