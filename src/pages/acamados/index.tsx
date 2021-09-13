import { useState, useEffect, FC } from 'react';

import Background from '~/components/site/Background';
import Header from '~/components/site/Header';
import Main from '~/components/site/Main';
import Seo from '~/components/Seo';

import RegistrationComponent from '~/components/site/Registration';

import { IComorbidity, IGroup } from '~/interfaces';

import { comorbiditiesReq, groupsReq } from '~/services/api';

import catchHandler, { Err } from '~/utils/catchHandler';

const BedRidden: FC = () => {
  const [groups, setGroups] = useState<IGroup[]>();
  const [comorbidities, setComorbidities] = useState<IComorbidity[]>();

  useEffect(() => {
    const getGroups = async () => {
      try {
        const data = await groupsReq('1');

        setGroups(data);
      } catch (err) {
        catchHandler(
          err as Err,
          'Não foi possível listar os grupos. Tente novamente ou contate o suporte.'
        );
      }
    };

    getGroups();
  }, []);

  useEffect(() => {
    const getComorbidities = async () => {
      try {
        const data = await comorbiditiesReq();

        setComorbidities(data);
      } catch (err) {
        catchHandler(
          err as Err,
          'Não foi possível listar as comorbidades. Tente novamente ou contate o suporte.'
        );
      }
    };

    if (groups) getComorbidities();
  }, [groups]);

  return (
    <>
      <Seo metaTitle="Acamados - Saúde Timon 24h" />
      <Background>
        <Header />
        <Main>
          {groups && comorbidities && (
            <RegistrationComponent
              title="Pacientes Acamados"
              groups={groups}
              comorbidities={comorbidities}
              idCategory="1"
            />
          )}
        </Main>
      </Background>
    </>
  );
};

export default BedRidden;
