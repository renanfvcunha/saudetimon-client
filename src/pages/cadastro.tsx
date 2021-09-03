import Background from '~/components/site/Background';
import Header from '~/components/site/Header';
import Main from '~/components/site/Main';
import Seo from '~/components/Seo';

import RegistrationComponent from '~/components/site/Registration';

export default function Registration() {
  return (
    <>
      <Seo metaTitle="Cadastro - Saúde Timon 24h" />
      <Background>
        <Header />
        <Main>
          <RegistrationComponent />
        </Main>
      </Background>
    </>
  );
}
