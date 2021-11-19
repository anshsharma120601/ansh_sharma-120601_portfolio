import { Flex, Image } from '@chakra-ui/react';

function Resume() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Image
        cursor="pointer"
        marginTop="6rem"
        borderRadius="13px"
        objectFit="cover"
        h={['27rem', '40rem', '40rem', '40rem']}
        w={['18rem', '30rem', '30rem', '30rem']}
        src="https://media-exp1.licdn.com/media/AAYUAQR3AAgAAQAAAAAAAC4MMq2F3EzESwOKdLG4z-m2jQ.png"
      />
    </Flex>
  );
}

export default Resume;
