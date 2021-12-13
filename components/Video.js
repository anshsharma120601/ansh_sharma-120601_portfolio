import React from 'react';
import ReactPlayer from 'react-player';
import { Flex } from '@chakra-ui/react';

function VideoApp() {
  return (
    <Flex
      marginTop="1rem"
      bg="red"
      height={['12rem', '20rem', '20rem', '20rem']}
      width={['21rem', '35rem', '35rem', '35rem']}
    >
      <ReactPlayer
        width="100%"
        height="100%"
        url="https://youtu.be/87J5HkpFbfo"
      />
    </Flex>
  );
}

export default VideoApp;
