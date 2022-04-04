import '../styles/globals.css'
import '../styles/mathquill.css'
import type { AppProps } from 'next/app'
import { AppWrapper } from '../context/state';
import SSRProvider from 'react-bootstrap/SSRProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { teal } from '@mui/material/colors';


const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: teal[500]
  //   }
  // }
})

function MyApp({ Component, pageProps }: AppProps) {
  return <SSRProvider>
    <AppWrapper>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppWrapper>
  </SSRProvider>
}

export default MyApp
