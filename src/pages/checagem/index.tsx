import { FC } from 'react';
import Seo from '~/components/Seo';
import Background from '~/components/site/Background';
import Header from '~/components/site/Header';
import Main from '~/components/site/Main';

import StatusCheckComponent from '~/components/site/StatusCheck';

const StatusCheck: FC = () => {
  return (
    <>
      <Seo metaTitle="Checagem - Saúde Timon 24h" />
      <Background>
        <Header />
        <Main>
          <StatusCheckComponent />
        </Main>
      </Background>
    </>
  );
};

export default StatusCheck;
