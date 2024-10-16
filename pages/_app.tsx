import { RecoilRoot } from 'recoil';
import '@/styles/_app.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: any) {
  return (
    <RecoilRoot>
      <Head>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
