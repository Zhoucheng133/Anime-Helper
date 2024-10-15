import { RecoilRoot } from 'recoil';
import '@/styles/_app.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
