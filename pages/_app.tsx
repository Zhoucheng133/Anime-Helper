import { RecoilEnv, RecoilRoot } from 'recoil';
import '@/styles/_app.css';
import Head from 'next/head';
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }: any) {
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
  return (
    <RecoilRoot>
      <Head>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </RecoilRoot>
  );
}

export default MyApp;

