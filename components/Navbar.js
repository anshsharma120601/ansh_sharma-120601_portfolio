import { useState } from 'react';
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, EmailIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none');
  return (
    <Flex>
      <Flex
        bgGradient="linear(to-r, blue.400, pink.400, yellow.400)"
        position="fixed"
        top="0rem"
        align="center"
        width="full"
      >
        {/* Desktop */}
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

          <NextLink href="/my_projects" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              My Projects
            </Button>
          </NextLink>

          <NextLink href="/activities" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Co-curricular Activities
            </Button>
          </NextLink>

          <NextLink href="mailto:anshsharma120601@gmail.com" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              <EmailIcon />Email me
            </Button>
          </NextLink>
          <Switch
          padding="1rem"
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
        />
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="50vh"
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
            <Button color="black" as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </NextLink>

          <NextLink href="/resume" passHref>
            <Button color="black" as="a" variant="ghost" aria-label="About" my={5} w="100%">
              Resume
            </Button>
          </NextLink>

          <NextLink href="/certificates" passHref>
            <Button color="black" as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Certificates
            </Button>
          </NextLink>

          <NextLink href="/my_projects" passHref>
            <Button color="black" as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              My Projects
            </Button>
          </NextLink>

          <NextLink href="/activities" passHref>
            <Button color="black" as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Co Curricular Activities
            </Button>
          </NextLink>

          <NextLink href="mailto:anshsharma120601@gmail.com" passHref>
            <Button color="black" as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              <EmailIcon />Email Me
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
}
