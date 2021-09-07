import { useState, useEffect } from 'react';

import Background from '~/components/site/Background';
import Header from '~/components/site/Header';
import Main from '~/components/site/Main';
import Seo from '~/components/Seo';

import RegistrationComponent from '~/components/site/Registration';

import { IComorbidity, IGroup } from '~/interfaces';

import { comorbiditiesReq, groupsReq } from '~/services/api';

import catchHandler, { Err } from '~/utils/catchHandler';

export default function Registration() {
  const [groups, setGroups] = useState<IGroup[]>();
  const [comorbidities, setComorbidities] = useState<IComorbidity[]>();

  useEffect(() => {
    const getGroups = async () => {
      try {
        const data = await groupsReq('3');

        setGroups(data);
      } catch (err) {
        catchHandler(
          err as Err,
          'Não foi possível listar os grupos. Tente novamente ou contate o suporte.'
        );
      }
    };

    const getComorbidities = async () => {
      try {
        const data = await comorbiditiesReq();

        setComorbidities(data);
      } catch (err) {
        catchHandler(
          err as Err,
          'Não foi possível listar os grupos. Tente novamente ou contate o suporte.'
        );
      }
    };

    getGroups();
    getComorbidities();
  }, []);

  return (
    <>
      <Seo metaTitle="Cadastro - Saúde Timon 24h" />
      <Background>
        <Header />
        <Main>
          {groups && comorbidities && (
            <RegistrationComponent
              groups={groups}
              comorbidities={comorbidities}
            />
          )}
        </Main>
      </Background>
    </>
  );
}
