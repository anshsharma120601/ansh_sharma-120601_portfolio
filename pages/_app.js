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
      <footer>
        <Copyright />
      </footer>
    </div>
  );
}

export default MyApp;
