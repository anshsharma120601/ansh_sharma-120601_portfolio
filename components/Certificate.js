import { Flex, Image } from '@chakra-ui/react';

export default function Certificate() {
  return (
    <Flex flexDirection="column">
      <Flex flexDir={['column', 'row', 'row', 'row']}>
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
          alt="React Ansh Sharma Udemy certificate"
        />

        <Image
          cursor="pointer"
          borderRadius="3xl"
          marginTop={['1rem', '5.5rem', '5.5rem', '5.5rem']}
          marginLeft={['1rem', '2rem', '2rem', '2rem']}
          padding={['1', '2', '2', '2']}
          objectFit="cover"
          h={['15rem', '30rem', '30rem', '30rem']}
          w={['19rem', '37rem', '37rem', '37rem']}
          src="/images/certificate2.png"
          alt="Ansh Sharma python course certificate Coursera"
        />
      </Flex>

      <Image
        cursor="pointer"
        borderRadius="3xl"
        marginTop={['1rem', '2rem', '2rem', '2rem']}
        marginLeft={['1rem', '2rem', '2rem', '2rem']}
        marginBottom={['15rem', '15rem', '15rem', '15rem']}
        padding={['1', '2', '2', '2']}
        objectFit="cover"
        h={['22rem', '35rem', '35rem', '35rem']}
        w={['18rem', '20rem', '20rem', '20rem']}
        src="/images/Certificate3.png"
        alt="Ansh Sharma's letter of recommendation from Eklavya"
      />
    </Flex>
  );
}
