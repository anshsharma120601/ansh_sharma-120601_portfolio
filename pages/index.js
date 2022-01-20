import Details from '../components/Details';
import { RingLoader } from 'react-spinners';
import { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
      <Head>
        <meta
          name="google-site-verification"
          content="SRI9DJZi4wNpKQCq5Vx1-UKk2ihv1nu8iTSNvfo-QCw"
        />
      </Head>
      {loading ? (
        <Flex
          padding={['8.5rem', '0rem', '0rem', '0rem']}
          margin={['0.1rem', '25rem', '25rem', '25rem']}
        >
          <RingLoader color={'#04F8C8'} loading={loading} size={100} />
        </Flex>
      ) : (
        <Details />
      )}
    </div>
  );
}
