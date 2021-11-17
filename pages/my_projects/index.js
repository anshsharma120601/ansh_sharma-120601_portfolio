import Project from '../../components/Project';
import { RingLoader } from 'react-spinners';
import { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';

export default function Projects() {
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
        <Flex margin="20rem">
          <RingLoader color={'#04F8C8'} loading={loading} size={200} />
        </Flex>
      ) : (
        <div>
          <Project />{' '}
        </div>
      )}
    </div>
  );
}
