import '../styles/globals.css';
import Copyright from '../components/Copyright';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
      <div id="footer">
        <Copyright />
      </div>
    </div>
  );
}

export default MyApp;
