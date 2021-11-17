import Resume from '../../components/Resume';
import { RingLoader } from 'react-spinners';
import { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';

function resume() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <Flex margin="20rem">
          <RingLoader color={'#04F8C8'} loading={loading} size={200} />
        </Flex>
      ) : (
        <div>
          <Resume />
        </div>
      )}
    </div>
  );
}

export default resume;
