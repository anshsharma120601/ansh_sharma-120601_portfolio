import { ChakraProvider, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
