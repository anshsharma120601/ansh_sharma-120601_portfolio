import { ChakraProvider, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { RingLoader } from 'react-spinners';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
      {loading ? (
        <Flex margin={['5rem', '10rem', '10rem', '10rem']}>
          <RingLoader color={'#04F8C8'} loading={loading} size={100} />
        </Flex>
      ) : (
        <ChakraProvider>
          <Navbar />
          <Footer />
          <Component {...pageProps} />
        </ChakraProvider>
      )}
    </div>
  );
}

export default MyApp;
