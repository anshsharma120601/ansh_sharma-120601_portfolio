import {
  Flex,
  Image,
  Link,
  ListItem,
  UnorderedList,
  Heading,
} from '@chakra-ui/react';

import { DiPython, DiJavascript1 } from 'react-icons/di';

function Details() {
  return (
    <Flex
      padding={['0.5rem', '1rem', '1rem', '1rem']}
      marginTop={['3rem', '4rem', '4rem', '4rem']}
      flexDirection="column"
      fontFamily="sans-serif"
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
          borderRadius={['40px', '13px', '13px', '13px']}
          src="https://scontent.fdel27-3.fna.fbcdn.net/v/t1.6435-9/34809123_1898037376926116_2863706299722366976_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=M-DvgoKZmlgAX_cBcuk&_nc_ht=scontent.fdel27-3.fna&oh=21c4e808f795885c6b33d05b8cc71d1d&oe=61B05ADB"
        />
      </Flex>
      <Flex
        flexDirection="column"
        marginTop="2"
        alignItems="flex-start"
        fontSize={['17', '23', '23', '23']}
        paddingBottom="10rem"
      >
        <h3>
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
            <b>Graduation (2019-2024):</b> Netaji Subhash University of
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
          <p>
            <b>Hardware I use:</b>
          </p>
        </h3>
      </Flex>
    </Flex>
  );
}

export default Details;
