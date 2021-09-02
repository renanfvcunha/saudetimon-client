import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';

import Seo from '../components/Seo';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Seo
        metaTitle="NextJS With TS and Material UI"
        metaDescription="NextJS Template With Typescript and Material-UI"
      />
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
