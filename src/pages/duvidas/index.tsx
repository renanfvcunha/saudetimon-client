import { FC, useEffect } from 'react';
import { GetServerSideProps } from 'next';

import Seo from '~/components/Seo';
import Background from '~/components/site/Background';
import Header from '~/components/site/Header';
import Main from '~/components/site/Main';
import FrequentDoubtsComponent from '~/components/site/FrequentDoubts';

import { frequentDoubtsReq } from '~/services/api';
import { IDoubt } from '~/interfaces';
import catchHandler, { Err } from '~/utils/catchHandler';

type Props = {
  frequentDoubts?: IDoubt[];
  err?: string;
};

const FrequentDoubts: FC<Props> = ({ frequentDoubts, err }) => {
  useEffect(() => {
    if (err) {
      catchHandler(
        JSON.parse(err) as Err,
        'Não foi possível listar as dúvidas frequentes. Tente novamente ou contate o suporte.'
      );
    }
  }, [err]);

  return (
    <>
      <Seo metaTitle="Dúvidas Frequentes - Saúde Timon 24h" />
      <Background>
        <Header />
        <Main>
          {frequentDoubts && (
            <FrequentDoubtsComponent frequentDoubts={frequentDoubts} />
          )}
        </Main>
      </Background>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const frequentDoubts = await frequentDoubtsReq();

    return {
      props: { frequentDoubts },
    };
  } catch (err) {
    return {
      props: { err: JSON.stringify(err) },
    };
  }
};

export default FrequentDoubts;
