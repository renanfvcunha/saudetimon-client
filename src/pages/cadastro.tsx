import { useState, useEffect } from 'react';

import Background from '~/components/site/Background';
import Header from '~/components/site/Header';
import Main from '~/components/site/Main';
import Seo from '~/components/Seo';

import RegistrationComponent from '~/components/site/Registration';
import { IGroup } from '~/interfaces';
import { groupsReq } from '~/services/api';
import catchHandler, { Err } from '~/utils/catchHandler';

export default function Registration() {
  const [groups, setGroups] = useState<IGroup[]>();

  useEffect(() => {
    const getGroups = async () => {
      try {
        const data = await groupsReq();

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

  return (
    <>
      <Seo metaTitle="Cadastro - Saúde Timon 24h" />
      <Background>
        <Header />
        <Main>{groups && <RegistrationComponent groups={groups} />}</Main>
      </Background>
    </>
  );
}
