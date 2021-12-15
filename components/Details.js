import React from 'react';
import {
  Flex,
  Image,
  Link,
  ListItem,
  UnorderedList,
  Heading,
  Text,
} from '@chakra-ui/react';

import { DiPython, DiJavascript1 } from 'react-icons/di';
import VideoApp from './Video';

function Details() {
  function myFunction() {
    return alert(
      'Hello! Welcome to my portfolio. I am Ansh Sharma, I welcome you to my portfolio and blog!, I am a front-end web developer and a machine learning intern who holds a B.Tech degree in Electronics and Communication. My area of interest is software.'
    );
  }
  return (
    <Flex
      marginTop={['4rem', '5.5rem', '5.5rem', '5.5rem']}
      padding="2"
      marginRight={['1rem', '1rem', '1rem', '1rem']}
      marginLeft={['1rem', '1rem', '1rem', '1rem']}
      paddingRight={['0rem', '0rem', '0rem', '0rem']}
      paddingLeft={['0rem', '0rem', '0rem', '0rem']}
      marginBottom="-100"
      flexDirection="column"
      fontFamily="font-family: 'Inter', sans-serif"
    >
      <Heading
        fontSize={['28px', '64px', '64px', '64px']}
        fontFamily="cursive"
        background="-webkit-linear-gradient(red, gold)"
        bgClip="text"
        textColor="transparent"
      >
        Ansh Sharma Portfolio
      </Heading>
      <Flex>
        <Image
          onLoad={myFunction}
          cursor="pointer"
          bgColor="white"
          padding="0.2rem"
          h={['18rem', '28rem', '28rem', '28rem']}
          w={['12rem', '20rem', '20rem', '20rem']}
          objectFit="cover"
          borderRadius={['40px', '13px', '13px', '13px']}
          src="/images/yes.png"
          alt=""
        />
      </Flex>
      <Flex
        flexDirection="column"
        marginTop="2"
        alignItems="flex-start"
        fontSize={['14', '23', '23', '23']}
        paddingBottom="10rem"
      >
        <h3>
          <Flex flexDir="row">
            Electronics and Communication Engineer from
            <Image
              cursor="pointer"
              objectFit="cover"
              borderRadius="13px"
              height={['4rem', '7rem', '7rem', '7rem']}
              width={['4rem', '7rem', '7rem', '7rem']}
              src="/images/logo.png"
            />
          </Flex>

          <p>
            I have completed (2019)my Schooling / Undergraduation in science and
            maths (PCM) from
            <Link
              _hover={{ color: 'blue.600' }}
              href="https://www.amity.edu/ais/pushpvihar/"
            >
              <u>Amity International School</u>
            </Link>
            Pushp Vihar, Delhi, India.
          </p>
          <p>
            <b>Graduation (2019-2023):</b> Netaji Subhash University of
            Technology
            <Link _hover={{ color: 'blue.600' }} href="http://aiactr.ac.in/">
              <u>(NSUT), East Campus</u>
            </Link>
            , New Delhi with specialization in Electronics and Communication.
          </p>
          <p>
            <b>Coding Languages :</b>
            <UnorderedList>
              <ListItem>
                <Flex flexDirection="row">
                  Python- Intermediate Level
                  <DiPython />
                </Flex>
              </ListItem>
              <ListItem>
                <Flex flexDirection="row">
                  Javascript- Intermediate Level
                  <DiJavascript1 />
                </Flex>
              </ListItem>
              <ListItem>Html- Expert Level</ListItem>
              <ListItem>CSS- Expert Level</ListItem>
              <ListItem>Reactjs- Intermediate Level</ListItem>
              <ListItem>Nextjs- Intermediate Level</ListItem>
              <ListItem>Matlab- Beginner Level</ListItem>
              <ListItem>Django- Novice/Learning</ListItem>
            </UnorderedList>
          </p>
          <p>
            I live in Gurugram, Haryana, India and am fluent in English & Hindi.
          </p>
          <p>
            <b>Area Of Interest:</b> Software Programming / Coding & Business
            Analytics. Looking forward to working as a software engineer and web
            based development programming with an IT company of repute. I am an
            expert in creating codes for automated tests.
          </p>
          <p>
            <b>Further Interests:</b> Looking forward to also learn AI , ML and
            subsequently explore possibilities in research and data science
            based analytics and programming.
          </p>
          <p>
            Finally also would learn about the other side of the net which is
            Database Management Systems (DBMS). Thus learning on the Backend Arm
            of the IT Structure post perfecting my Frontend Skills.
          </p>
          <p>
            <b>Projects:</b> Currently working on developing my personal
            portfolio based on NextJS.
          </p>
        </h3>
        <VideoApp />
        <Flex flexDirection="column">
          <Text fontWeight="bold" fontSize="30">
            Hardware I use
          </Text>
          <Text color="red">
            Apple MacBook Air MQD32HN/A Ultrabook (13.3 Inch | Core i5 5th Gen |
            8 GB | macOS Sierra | 128 GB SSD)
            <Image
              objectFit="cover"
              marginTop="1rem"
              marginBottom="0.1rem"
              height="13rem"
              width="20rem"
              src="/images/mac.png"
              alt=""
            />
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Details;
