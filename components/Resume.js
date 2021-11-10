import { Flex, Image } from '@chakra-ui/react';

function Resume() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Image
        cursor="pointer"
        marginTop="6rem"
        borderRadius="13px"
        h="40rem"
        w="30rem"
        src="https://media-exp1.licdn.com/media/AAYUAgR3AAgAAQAAAAAAACePTWjq1si0Q2yia1PzJTtb3Q.png"
      />
    </Flex>
  );
}

export default Resume;
