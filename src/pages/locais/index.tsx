import { useEffect, useState } from 'react';

import Seo from '~/components/Seo';
import Background from '~/components/site/Background';
import Header from '~/components/site/Header';
import Main from '~/components/site/Main';
import VaccineLocationsComponent from '~/components/site/VaccineLocations';

import { IVaccineLocation } from '~/interfaces';

import { vaccineLocationsReq } from '~/services/api';

import catchHandler, { Err } from '~/utils/catchHandler';

export default function VaccineLocations() {
  const [vaccineLocations, setVaccineLocations] = useState<
    IVaccineLocation[]
  >();

  useEffect(() => {
    const getVaccineLocations = async () => {
      try {
        const data = await vaccineLocationsReq();

        setVaccineLocations(data);
      } catch (err) {
        catchHandler(
          err as Err,
          'Não foi possível listar os locais de vacinação. Tente novamente ou contate o suporte.'
        );
      }
    };

    getVaccineLocations();
  }, []);

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
