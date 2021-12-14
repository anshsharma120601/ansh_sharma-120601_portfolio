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
          <Flex flexDir="row">
            Electronics and Communication Engineer from
            <Image
              cursor="pointer"
              objectFit="cover"
              borderRadius="13px"
              height={['4rem', '7rem', '7rem', '7rem']}
              width={['4rem', '7rem', '7rem', '7rem']}
              src="data:image/png;base64,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"
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
              src="https://www.cnet.com/a/img/resize/7019215e6c091895a69f0a82ce56ed30645e49a4/hub/2013/06/13/3bc35600-053a-11e3-bf02-d4ae52e62bcc/Apple_MacBook_Air_13-inch_35781451_06.jpg?auto=webp&width=1092"
            ></Image>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Details;
