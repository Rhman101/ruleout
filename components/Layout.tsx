import NavBar from './MainPageHeader/NavBar';
import Footer from './Layout/Footer';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'

const Layout: React.FC<{isLoginPage: boolean}> = ({ isLoginPage, children }) => {

  const Background = styled('div')(({ theme }) => ({
    background: `linear-gradient(-150deg, ${theme.palette.primary.dark} 15%,  ${theme.palette.primary.main} 94%)`,
    transform: 'skewY(12deg)',
    transformOrigin: '100%',
    width: '100%',  
    height: '80%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    display: 'block',
    zIndex: '-100'
  }))

  const DivOne = styled('div')(({ theme }) => ({
    // backgroundColor: `${theme.palette.secondary.main}`,
    background: `linear-gradient(-150deg, ${theme.palette.secondary.main} 15%,  ${theme.palette.primary.dark} 94%)`,
    width: '33%',
    height: '50%',
    zIndex: '-95'
  }))

  const DivTwo = styled('div')(({ theme }) => ({
    background: `${theme.palette.secondary.main}`,
    width: '25%',
    height: '20%',
    marginTop: '180px',
    marginRight: '30px',
    float: 'right',
    zIndex: '-95'
  }))

  return <Grid container spacing={5} id='wholeThing'>
    <Background>
      <DivOne></DivOne>
      <DivTwo></DivTwo>
    </Background>
    <Grid item xs={12}>
      <NavBar isLoginPage={isLoginPage}></NavBar>
    </Grid>
    <Grid item xs={0} md={1} sx={{display: {xs: 'none', md: 'flex'}}}></Grid>
    <Grid item xs={12} md={10}>
      {children}
    </Grid>
    <Grid item xs={0} md={1} sx={{display: {xs: 'none', md: 'flex'}}}></Grid>
    <Grid item xs={12}>
      <Footer></Footer>
    </Grid>
  </Grid>
}

export default Layout;

