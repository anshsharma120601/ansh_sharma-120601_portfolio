import { Flex, Heading } from '@chakra-ui/react';

export default function Project() {
  return (
    <Flex>
      <Heading
        background="-webkit-linear-gradient(white, blue)"
        bgClip="text"
        textColor="transparent"
        marginTop="8rem"
        textAlign="center"
        letterSpacing="2px"
        w="full"
        fontFamily="cursive"
      >
        The projects will be updated soon!
      </Heading>
    </Flex>
  );
}
