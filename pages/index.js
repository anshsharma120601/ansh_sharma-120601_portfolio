import Details from '../components/Details';
import { RingLoader } from 'react-spinners';
import { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';

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
      {loading ? (
        <Flex margin={['5rem', '10rem', '10rem', '10rem']}>
          <RingLoader color={'#04F8C8'} loading={loading} size={100} />
        </Flex>
      ) : (
        <Details />
      )}
    </div>
  );
}
