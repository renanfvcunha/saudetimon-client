import { FC } from 'react';
import Background from '~/components/site/Background';
import Header from '~/components/site/Header';
import Main from '~/components/site/Main';

import HomeComponent from '~/components/site/Home';

const Home: FC = () => {
  return (
    <Background>
      <Header />
      <Main>
        <HomeComponent />
      </Main>
    </Background>
  );
};

export default Home;
