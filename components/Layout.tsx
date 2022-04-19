import NavBar from './Header/NavBar';
import Footer from './Layout/Footer';

const Layout: React.FC<{}> = ({ children }) => {

  return <div style={{marginTop: '160px'}}>
    <NavBar></NavBar>
    {children}
    <Footer></Footer>
  </div>

}

export default Layout;

