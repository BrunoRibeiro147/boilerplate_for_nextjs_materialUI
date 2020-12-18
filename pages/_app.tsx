import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
