import '../styles/globals.css';
import Copyright from '../components/Copyright';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <Copyright />
      </footer>
    </div>
  );
}

export default MyApp;
