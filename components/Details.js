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
          cursor="pointer"
          bgColor="white"
          padding="0.2rem"
          h={['18rem', '28rem', '28rem', '28rem']}
          w={['12rem', '20rem', '20rem', '20rem']}
          objectFit="cover"
          borderRadius={['40px', '13px', '13px', '13px']}
          src="https://scontent.cdninstagram.com/v/t51.39111-15/p526x296/252579930_4473469059433976_1180141849341548555_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=5a057b&_nc_ohc=tybO7DjQEqQAX8XPfBo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=02_ARqtOtm96fhUSxTzlD8DRvxyNn4e5UbFlPCc0EKnwlKPJw&oe=61BD6D75"
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
          <p>
            Electronics and Communication Engineer from
            <Image
              cursor="pointer"
              objectFit="cover"
              borderRadius="13px"
              src="https://lh3.googleusercontent.com/proxy/6F0ifO4hik_EzW300yUm5zhrecUG4lsSPPBUIqkUGvMB6SN65frckd7Dj01mGOgDnA8EWdjt9GnwrWrVje3nLO_dR3zIKTr2a5dqXaWM6PumVeg"
            ></Image>
          </p>

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
              src="https://www.cnet.com/a/img/resize/7019215e6c091895a69f0a82ce56ed30645e49a4/hub/2013/06/13/3bc35600-053a-11e3-bf02-d4ae52e62bcc/Apple_MacBook_Air_13-inch_35781451_06.jpg?auto=webp&width=1092"
            ></Image>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Details;
