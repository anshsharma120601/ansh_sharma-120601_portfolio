import {
  Flex,
  Image,
  Link,
  ListItem,
  UnorderedList,
  Heading,
} from '@chakra-ui/react';

function Details() {
  return (
    <Flex
      marginTop="20"
      flexDirection="column"
      padding="4"
      fontFamily="sans-serif"
    >
      <Heading
        _hover={{
          fontSize: '72px',
          background: '-webkit-linear-gradient(red, yellow)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        fontFamily="cursive"
        cursor="pointer"
      >
        Ansh Sharma Portfolio
      </Heading>
      <Image
        h="30rem"
        w="20rem"
        padding="1rem"
        borderRadius="13px"
        padding="0.2rem"
        bgColor="white"
        cursor="pointer"
        src="https://instagram.fdel27-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/254772852_399379941617650_7105300592827584340_n.jpg?_nc_ht=instagram.fdel27-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=PsNARpSJWWQAX_9h5Su&edm=AI8ESKwBAAAA&ccb=7-4&oh=7ba3380719ab5d3a800381b0113dca75&oe=6192AE32&_nc_sid=195af5&ig_cache_key=MjcwNDAwOTc4NzUwMjA4MDUxMA%3D%3D.2-ccb7-4"
      />
      <Flex
        flexDirection="column"
        marginTop="2"
        alignItems="flex-start"
        fontSize="18"
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
              <ListItem>Python- Intermediate Level</ListItem>
              <ListItem>Javascript- Intermediate Level</ListItem>
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
      </Flex>
    </Flex>
  );
}

export default Details;
