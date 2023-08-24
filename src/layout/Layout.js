import { Footer, Navbar } from '../components/common';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
