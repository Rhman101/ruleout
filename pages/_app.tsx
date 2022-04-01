import '../styles/globals.css'
import '../styles/mathquill.css'
import type { AppProps } from 'next/app'
import { AppWrapper } from '../context/state';
import SSRProvider from 'react-bootstrap/SSRProvider';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }: AppProps) {
  return <SSRProvider>
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  </SSRProvider>
}

export default MyApp
