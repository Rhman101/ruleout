import NavBar from './Header/NavBar';

const Layout: React.FC<{}> = ({ children }) => {

  return <>
    <NavBar></NavBar>
    {children}
  </>

}

export default Layout;

