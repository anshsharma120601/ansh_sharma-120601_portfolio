import {
  Button,
  Slide,
  Box,
  Flex,
  Avatar,
  Text,
  useDisclosure,
  Link,
  color,
} from '@chakra-ui/react';
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillPhone,
  AiFillGithub,
} from 'react-icons/ai';

export default function Footer() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex flexDirection="column" align="flex-end">
        <Button
          pos="fixed"
          marginTop={['0.1rem', '3rem', '3rem', '3rem']}
          marginRight={['1rem', '1rem', '1rem', '1rem']}
          width={['3rem', '4rem', '4rem', '4rem']}
          height={['3rem', '4rem', '4rem', '4rem']}
          onClick={onToggle}
          borderRadius="full"
        >
          <Avatar
            height="3rem"
            width="3rem"
            src="https://instagram.fdel1-1.fna.fbcdn.net/v/t51.2885-15/e35/p480x480/257784472_881861415719601_1613884494209547938_n.jpg?_nc_ht=instagram.fdel1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=eMxqzgUWTk8AX_QaZCA&edm=ABJHkxYAAAAA&ccb=7-4&oh=2dcc6a3dc061d12433c6ebd1a4bfa698&oe=619BB6A3&_nc_sid=fa978c&ig_cache_key=MjcwODg5NzY4NzQ5MDQzNTc4MA%3D%3D.2-ccb7-4"
          />
        </Button>
      </Flex>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="#7DF9FF"
          rounded="md"
          shadow="md"
        >
          <Flex flexDirection="column" align="center">
            <Flex flexDirection="row">
              7011061359
              <AiFillPhone />
            </Flex>
            <Link
              _hover={{ color: 'blue.600' }}
              href="https://github.com/anshsharma120601"
            >
              <Flex flexDirection="row">
                Github
                <AiFillGithub />
              </Flex>
            </Link>
            <Link
              _hover={{ color: 'blue.600' }}
              href="https://www.instagram.com/anshsharma1206/"
            >
              <Flex flexDirection="row">
                Instagram
                <AiFillInstagram />
              </Flex>
            </Link>
            <Link
              _hover={{ color: 'blue.600' }}
              href="https://www.facebook.com/profile.php?id=100001596154001"
            >
              <Flex flexDirection="row">
                Facebook
                <AiFillFacebook />
              </Flex>
            </Link>
            <Text fontWeight="bold" fontSize="20">
              Copyright @ Ansh Sharma.
            </Text>
          </Flex>
        </Box>
      </Slide>
    </>
  );
}
