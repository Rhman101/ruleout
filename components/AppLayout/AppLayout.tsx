import AppNavBar from './AppNavBar';
import Grid from '@mui/material/Grid';
import AppFooter from './AppFooter';

const Layout: React.FC<{}> = ({ children }) => {

  return <Grid container spacing={5}>
    <Grid item xs={12}>
      <AppNavBar></AppNavBar>
    </Grid>
    <Grid item xs={0} md={1} sx={{display: {xs: 'none', md: 'flex'}}}></Grid>
    <Grid item xs={12} md={10}>
      {children}
    </Grid>
    <Grid item xs={0} md={1} sx={{display: {xs: 'none', md: 'flex'}}}></Grid>
    <Grid item xs={12}>
      <AppFooter></AppFooter>
    </Grid>
  </Grid>
}

export default Layout;

