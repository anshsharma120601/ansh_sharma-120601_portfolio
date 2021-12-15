import { useState } from 'react';
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Grid,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, EmailIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Popup from './Popup';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [display, changeDisplay] = useState('none');
  return (
    <Flex>
      <Flex
        bg="yellow.300"
        position="fixed"
        top="0rem"
        align="center"
        width="full"
        borderRadius="13px"
      >
        {/* Desktop */}
        <Switch
          padding="1rem"
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
        />

        <Flex width="full" display={['none', 'none', 'flex', 'flex']}>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </NextLink>

          <NextLink href="/resume" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              Resume
            </Button>
          </NextLink>

          <NextLink href="/certificates" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Certificates
            </Button>
          </NextLink>

          <NextLink
            href="https://medium.com/@anshsharma120601/python-for-beginners-by-ansh-sharma-35a9ffbdb1d2"
            passHref
          >
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              My Blog
            </Button>
          </NextLink>

          <NextLink href="/activities" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Co-curricular Activities
            </Button>
          </NextLink>

          <NextLink href="mailto:anshsharma120601@gmail.com" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              <EmailIcon />
              Email me
            </Button>
          </NextLink>
        </Flex>

        {/* Mobile */}
        <Grid templateColumns="repeat(2, 1fr)" gap={['225', '0', '0', '0']}>
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            onClick={() => changeDisplay('flex')}
            display={['flex', 'flex', 'none', 'none']}
          />
          <Popup />
        </Grid>
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="full"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        zIndex={20}
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            color="black"
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <NextLink href="/" passHref>
            <Button
              color="black"
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Home
            </Button>
          </NextLink>

          <NextLink href="/resume" passHref>
            <Button
              color="black"
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Resume
            </Button>
          </NextLink>

          <NextLink href="/certificates" passHref>
            <Button
              color="black"
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Certificates
            </Button>
          </NextLink>

          <NextLink
            href="https://medium.com/@anshsharma120601/python-for-beginners-by-ansh-sharma-35a9ffbdb1d2"
            passHref
          >
            <Button
              color="black"
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              My Blog
            </Button>
          </NextLink>

          <NextLink href="/activities" passHref>
            <Button
              color="black"
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Co Curricular Activities
            </Button>
          </NextLink>

          <NextLink href="mailto:anshsharma120601@gmail.com" passHref>
            <Button
              color="black"
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              <EmailIcon />
              Email Me
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
}
