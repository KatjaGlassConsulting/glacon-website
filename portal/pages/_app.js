import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/globals.css'
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // Self-referencing canonical. router.asPath excludes the basePath ('/portal'),
  // so we prepend the full deployed origin + base. Paths map to the exported
  // .html files (e.g. /info -> /portal/info.html); '/' is the portal home.
  const path = (router.asPath || '/').split('#')[0].split('?')[0];
  const isErrorPage = router.pathname === '/404' || router.pathname === '/500';
  const canonical =
    path === '/'
      ? 'https://www.glacon.eu/portal/'
      : `https://www.glacon.eu/portal${path}.html`;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!isErrorPage && (
        <Head>
          <link rel="canonical" href={canonical} />
        </Head>
      )}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
