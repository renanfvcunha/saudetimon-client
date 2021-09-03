import Background from '~/components/site/Background';
import Header from '~/components/site/Header';
import Main from '~/components/site/Main';

import HomeComponent from '~/components/site/Home';

export default function Home() {
  return (
    <Background>
      <Header />
      <Main>
        <HomeComponent />
      </Main>
    </Background>
  );
}
