import AuthProvider from '@/components/authProvider/AuthProvider';
import Layout from '../layout/Layout';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </div>
  );
}

export default MyApp;
