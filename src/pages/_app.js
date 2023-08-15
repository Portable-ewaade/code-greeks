import { Footer} from '@/components/common';
import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
