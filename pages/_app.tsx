// import '../styles/globals.css'
import '../styles/mathquill.css'
import type { AppProps } from 'next/app'
import SSRProvider from 'react-bootstrap/SSRProvider';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider} from '@mui/material/styles';
// import { purple } from '@mui/material/colors';
// import { teal } from '@mui/material/colors';
import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
import { createContext, useEffect, useState } from 'react';
// config.autoAddCss = false
import data from './../data/data';

// Change to Firebase
import { FirebaseAppProvider} from 'reactfire';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2870d1',
    },
    secondary: {
      main: '#143867',
    },
    background: {
      paper: '#ffffff',
      default: '#e3e3e3',
    },
  },
  typography: {
    fontFamily: 'Poppins'
  }
})

function MyApp({ Component, pageProps }: AppProps) {

  return <SSRProvider>
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
  </SSRProvider>
}

export default MyApp
