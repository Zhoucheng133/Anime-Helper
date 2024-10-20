import { RecoilEnv, RecoilRoot } from 'recoil';
import '@/styles/_app.css';
import Head from 'next/head';
import { Snacker } from '@/components/snack';
import { extendTheme, ThemeProvider } from '@mui/joy/styles';
import { Providers } from '../components/providers';

const mantineTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#0EA5E9', // 主要背景色
          solidHoverBg: '#0BA0D7', // 悬停背景色
          solidActiveBg: '#0096C7', // 激活背景色
          softColor: '#A1D6E6', // 柔和颜色
          softBg: '#E0F7FF', // 柔和背景色
          softHoverBg: '#B2E1F3', // 柔和悬停背景色
          softActiveBg: '#A0D6E0', // 柔和激活背景色
          outlinedColor: '#0EA5E9', // 轮廓色
          outlinedBorder: '#0EA5E9', // 轮廓边框色
          outlinedHoverBg: 'rgba(14, 165, 233, 0.1)', // 轮廓悬停背景色
          outlinedHoverBorder: '#0BA0D7', // 轮廓悬停边框色
          outlinedActiveBg: 'rgba(14, 165, 233, 0.2)', // 轮廓激活背景色
        },
        success: {
          solidBg: '#22C55E', // 主要背景色
          solidHoverBg: '#1DAA4D', // 悬停背景色
          solidActiveBg: '#1A983E', // 激活背景色
          softColor: '#A6E3B4', // 柔和颜色
          softBg: '#E6F9E5', // 柔和背景色
          softHoverBg: '#C6F0D1', // 柔和悬停背景色
          softActiveBg: '#B2E6B3', // 柔和激活背景色
          outlinedColor: '#22C55E', // 轮廓色
          outlinedBorder: '#22C55E', // 轮廓边框色
          outlinedHoverBg: 'rgba(34, 197, 94, 0.1)', // 轮廓悬停背景色
          outlinedHoverBorder: '#1DAA4D', // 轮廓悬停边框色
          outlinedActiveBg: 'rgba(34, 197, 94, 0.2)', // 轮廓激活背景色
        },      
      },
    },
  },
  fontFamily: {
    body: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  },
  focus: {
    default: {
      outlineWidth: '2px',
      outlineOffset: '2px',
      outlineColor: '#339af0',
    },
  },
});

function MyApp({ Component, pageProps }: any) {
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
  return (
    <RecoilRoot>
      <Head>
        <link rel="icon" href="/icon.svg" />
      </Head>
      {/* <ThemeProvider theme={mantineTheme}>
        
      </ThemeProvider> */}
      <Providers>
        <Component {...pageProps} />
      </Providers>
      <Snacker/>
    </RecoilRoot>
  );
}

export default MyApp;

