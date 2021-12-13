import {
  Box,
  Flex,
  Grid,
  Text,
  useDisclosure,
  Link,
  useColorMode,
  useColorModeValue,
  Avatar,
  Image,
  GridItem,
} from '@chakra-ui/react';
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillPhone,
  AiFillGithub,
  AiFillLinkedin,
  AiFillBook,
} from 'react-icons/ai';
import { EmailIcon } from '@chakra-ui/icons';

export default function Footer() {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue('black', 'white');
  const color = useColorModeValue('black', 'black');
  const colorr = useColorModeValue('white', 'black');
  return (
    <Flex flexDirection={['row', 'column', 'column', 'column']}>
      <Box
        bg={bg}
        color={color}
        height={['40rem', '30rem', '30rem', '30rem']}
        width={['full', 'full', 'full', 'full']}
        fontSize="18"
        p={['2px', '40px', '40px', '40px']}
        mt={['70', '4', '4', '4']}
        shadow="md"
        alignContent="flex-end"
      >
        <Grid
          margin={['0.5rem', '', '', '']}
          h={['400px', '300px', '300px', '300px']}
          templateRows={[
            'repeat(3, 1fr)',
            'repeat(3, 1fr)',
            'repeat(3, 1fr)',
            'repeat(3, 1fr)',
          ]}
          templateColumns={[
            'repeat(7, 1fr)',
            'repeat(7, 1fr)',
            'repeat(7, 1fr)',
            'repeat(7, 1fr)',
          ]}
          gap={[2, 4, 4, 4]}
        >
          <GridItem
            color="white"
            borderRadius="13"
            rowSpan={[1, 3, 3, 3]}
            colSpan={[6, 1, 1, 1]}
            w={['full', 'full', 'full', 'full']}
            h={['5rem', 'full', 'full', 'full']}
            paddingLeft={['1rem', '', '', '']}
            bg="black"
          >
            <Flex
              marginTop={['1.5rem', '8rem', '8rem', '8rem']}
              marginLeft={['6rem', '1rem', '1rem', '1rem']}
            >
              7011061359
              <AiFillPhone />
            </Flex>
          </GridItem>
          <GridItem
            w={['7rem', 'full', 'full', 'full']}
            h={['5rem', 'full', 'full', 'full']}
            borderRadius="13"
            rowSpan={1}
            colSpan={2}
            bg="gray.200"
          >
            <Flex
              marginLeft={['1rem', '10rem', '10rem', '10rem']}
              marginTop={['0.3rem', '1.5rem', '1.5rem', '1.5rem']}
            >
              <Link
                _hover={{ color: 'green.500' }}
                href="https://github.com/anshsharma120601"
              >
                My Github
                <AiFillGithub />
              </Link>
            </Flex>
          </GridItem>
          <GridItem
            w={['7rem', 'full', 'full', 'full']}
            h={['5rem', 'full', 'full', 'full']}
            borderRadius="13"
            rowSpan={1}
            colSpan={2}
            bg="gray.200"
          >
            <Flex
              marginLeft={['1rem', '10rem', '10rem', '10rem']}
              marginTop={['0.3rem', '1.5rem', '1.5rem', '1.5rem']}
            >
              <Link
                _hover={{ color: 'pink.500' }}
                href="https://www.instagram.com/anshsharma1206/"
              >
                Instagram
                <AiFillInstagram />
              </Link>
            </Flex>
          </GridItem>
          <GridItem
            w={['7rem', 'full', 'full', 'full']}
            h={['5rem', 'full', 'full', 'full']}
            borderRadius="13"
            rowSpan={1}
            colSpan={2}
            bg="gray.200"
          >
            <Flex
              marginLeft={['1rem', '10rem', '10rem', '10rem']}
              marginTop={['0.3rem', '1.5rem', '1.5rem', '1.5rem']}
            >
              <Link
                _hover={{ color: 'blue.600' }}
                href="https://www.facebook.com/profile.php?id=100001596154001"
              >
                Facebook
                <AiFillFacebook />
              </Link>
            </Flex>
          </GridItem>
          <GridItem
            w={['7rem', 'full', 'full', 'full']}
            h={['5rem', 'full', 'full', 'full']}
            borderRadius="13"
            rowSpan={1}
            colSpan={2}
            bg="gray.200"
          >
            <Flex
              marginLeft={['1rem', '10rem', '10rem', '10rem']}
              marginTop={['1rem', '1.5rem', '1.5rem', '1.5rem']}
            >
              <Link
                _hover={{ color: 'blue.600' }}
                href="https://www.linkedin.com/in/ansh-sharma-96635120a/"
              >
                Linkedin
                <AiFillLinkedin />
              </Link>
            </Flex>
          </GridItem>
          <GridItem
            w={['7rem', 'full', 'full', 'full']}
            h={['5rem', 'full', 'full', 'full']}
            borderRadius="13"
            rowSpan={1}
            colSpan={2}
            bg="gray.200"
          >
            <Flex
              marginLeft={['0.8rem', '9rem', '9rem', '9rem']}
              marginTop={['1rem', '1.5rem', '1.5rem', '1.5rem']}
            >
              <Link
                _hover={{ color: 'red.500' }}
                href="mailto:anshsharma120601@gmail.com"
              >
                <EmailIcon />
                Email me
              </Link>
            </Flex>
          </GridItem>
          <GridItem
            w={['7rem', 'full', 'full', 'full']}
            h={['5rem', 'full', 'full', 'full']}
            borderRadius="13"
            rowSpan={1}
            colSpan={2}
            bg="gray.200"
          >
            <Flex
              marginLeft={['1rem', '10rem', '10rem', '10rem']}
              marginTop={['1rem', '1.5rem', '1.5rem', '1.5rem']}
            >
              <Link _hover={{ color: 'purple.500' }} href="">
                My Blog
              </Link>
            </Flex>
          </GridItem>
          <GridItem
            w={['7rem', 'full', 'full', 'full']}
            h={['5rem', 'full', 'full', 'full']}
            borderRadius="13"
            rowSpan={1}
            colSpan={2}
            bg="gray.200"
          >
            <Flex
              marginLeft={['1rem', '10rem', '10rem', '10rem']}
              marginTop={['1rem', '1.5rem', '1.5rem', '1.5rem']}
            >
              <Link _hover={{ color: 'green.500' }} href="http://aiactr.ac.in/">
                NSUT
                <AiFillBook />
              </Link>
            </Flex>
          </GridItem>
          <GridItem
            w={['7rem', 'full', 'full', 'full']}
            h={['5rem', 'full', 'full', 'full']}
            borderRadius="13"
            rowSpan={1}
            colSpan={2}
            bg="gray.200"
          ></GridItem>
          <GridItem
            w={['7rem', 'full', 'full', 'full']}
            h={['5rem', 'full', 'full', 'full']}
            borderRadius="13"
            rowSpan={1}
            colSpan={2}
            bg="gray.200"
          ></GridItem>
        </Grid>

        <Text margin="3" align="center" fontWeight="light" fontSize="25">
          <Flex flexDir="column" align="center">
            <Text color={colorr} marginTop={['4rem', '0', '0', '0']}>
              Rights reserved @ Ansh Sharma.
              <Image
                borderRadius="full"
                marginLeft="0rem"
                height="50px"
                width="50px"
                objectFit="cover"
                src="https://scontent.cdninstagram.com/v/t51.39111-15/p526x296/255334296_1040360150143642_8414471458213095484_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=5a057b&_nc_ohc=8VX33L7kxMAAX8GjnrZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=f808922a51414d280a4f9b924fbdaece&oe=61B594EB"
              />
            </Text>
          </Flex>
        </Text>
      </Box>
    </Flex>
  );
}
