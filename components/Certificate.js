import { Flex, Image } from '@chakra-ui/react';

export default function Certificate() {
  return (
    <Flex flexDirection={['column', 'row', 'row', 'row']}>
      <Image
        cursor="pointer"
        borderRadius="3xl"
        marginTop={['4rem', '5.5rem', '5.5rem', '5.5rem']}
        marginLeft={['1rem', '2rem', '2rem', '2rem']}
        padding="2"
        objectFit="cover"
        h={['15rem', '30rem', '30rem', '30rem']}
        w={['19rem', '37rem', '37rem', '37rem']}
        src="/images/certificate1.png"
      />

      <Image
        cursor="pointer"
        borderRadius="3xl"
        marginTop={['1rem', '5.5rem', '5.5rem', '5.5rem']}
        marginLeft={['1rem', '2rem', '2rem', '2rem']}
        marginBottom={['15rem', '15rem', '15rem', '15rem']}
        padding={['1', '2', '2', '2']}
        objectFit="cover"
        h={['15rem', '30rem', '30rem', '30rem']}
        w={['19rem', '37rem', '37rem', '37rem']}
        src="/images/certificate2.png"
      />
    </Flex>
  );
}
