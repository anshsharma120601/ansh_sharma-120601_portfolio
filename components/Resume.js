import { Flex, Image } from '@chakra-ui/react';

function Resume() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Image
        cursor="pointer"
        marginTop="6rem"
        marginBottom={['15rem', '5rem', '5rem', '5rem']}
        borderRadius="13px"
        objectFit="cover"
        h={['27rem', '40rem', '40rem', '40rem']}
        w={['18rem', '30rem', '30rem', '30rem']}
        src="/images/resume.jpeg"
        alt=""
      />
    </Flex>
  );
}

export default Resume;
