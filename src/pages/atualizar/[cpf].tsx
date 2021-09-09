import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { IComorbidity, IGroup, PatientSelf } from '~/interfaces';

import { comorbiditiesReq, groupsReq, patientSelfReq } from '~/services/api';
import catchHandler, { Err } from '~/utils/catchHandler';

import Seo from '~/components/Seo';
import Background from '~/components/site/Background';
import Header from '~/components/site/Header';
import Main from '~/components/site/Main';
import DenyUser from '~/components/site/UpdateRegistration/DenyUser';
import Registration from '~/components/site/Registration';

export default function UpdateRegistration() {
  const router = useRouter();
  const { cpf } = router.query;

  const [patient, setPatient] = useState<PatientSelf>();
  const [groups, setGroups] = useState<IGroup[]>();
  const [comorbidities, setComorbidities] = useState<IComorbidity[]>();

  const [showRoute, setShowRoute] = useState(false);

  useEffect(() => {
    if (cpf) {
      const getPatient = async () => {
        try {
          const data = await patientSelfReq(cpf as string);

          setPatient(data);

          if (data.status === 'Negado') {
            setShowRoute(true);
          }
        } catch (err) {
          catchHandler(
            err as Err,
            'Não foi possível obter suas informações. Tente novamente ou contate o suporte.'
          );
        }
      };

      getPatient();
    }
  }, [cpf]);

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
      <Seo metaTitle="Atualizar Cadastro - Saúde Timon 24h" />
      <Background>
        <Header />
        <Main>
          {!showRoute ? (
            <DenyUser />
          ) : (
            comorbidities &&
            groups && (
              <Registration
                title="Atualizar Cadastro"
                comorbidities={comorbidities}
                groups={groups}
                patientData={patient}
              />
            )
          )}
        </Main>
      </Background>
    </>
  );
}
