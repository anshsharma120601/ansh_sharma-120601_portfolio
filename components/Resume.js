import {
  Flex,
  Image,
  
  PopoverBody,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@chakra-ui/react';

function Resume() {
  return (
    <Flex flexDirection="column">
      <Popover placement="right">
        <PopoverTrigger>
          
            <Image 
              _hover={{ cursor: "pointer" }}
              marginTop="6rem"
              h="30rem"
              w="20rem"
              src="https://media-exp1.licdn.com/media/AAYUAgR3AAgAAQAAAAAAACePTWjq1si0Q2yia1PzJTtb3Q.png"
            />
          
        </PopoverTrigger>
        <PopoverContent h="full" w="full">
          <PopoverBody h="full" w="full">
            <Image src="https://media-exp1.licdn.com/media/AAYUAgR3AAgAAQAAAAAAACePTWjq1si0Q2yia1PzJTtb3Q.png" />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}

export default Resume;
