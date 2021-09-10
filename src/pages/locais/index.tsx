import { useEffect } from 'react';
import { GetServerSideProps } from 'next';

import Seo from '~/components/Seo';
import Background from '~/components/site/Background';
import Header from '~/components/site/Header';
import Main from '~/components/site/Main';
import VaccineLocationsComponent from '~/components/site/VaccineLocations';

import { IVaccineLocation } from '~/interfaces';

import { vaccineLocationsReq } from '~/services/api';

import catchHandler, { Err } from '~/utils/catchHandler';

type Props = {
  vaccineLocations: IVaccineLocation[];
  err: string;
};

export default function VaccineLocations({ vaccineLocations, err }: Props) {
  useEffect(() => {
    if (err) {
      catchHandler(
        JSON.parse(err) as Err,
        'Não foi possível listar os locais de vacinação. Tente novamente ou contate o suporte.'
      );
    }
  }, [err]);

  return (
    <>
      <Seo metaTitle="Locais de Vacinação - Saúde Timon 24h" />
      <Background>
        <Header />
        <Main>
          {vaccineLocations && (
            <VaccineLocationsComponent vaccineLocations={vaccineLocations} />
          )}
        </Main>
      </Background>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const vaccineLocations = await vaccineLocationsReq();

    return {
      props: { vaccineLocations },
    };
  } catch (err) {
    return {
      props: { err: JSON.stringify(err) },
    };
  }
};
