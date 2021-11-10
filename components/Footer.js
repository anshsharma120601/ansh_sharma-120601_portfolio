import { PhoneIcon } from '@chakra-ui/icons';
import { Flex, Image, Link } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex position="fixed" padding="1" fontWeight="900" bottom="0">
        Copyright reserved @Ansh Sharma.
      </Flex>
      <Flex
        fontWeight="900"
        position="fixed"
        bottom="0rem"
        flexDirection="row"
        bgGradient="linear(to-t, blue.200, transparent)"
        padding="1rem"
        width="full"
        h="4rem"
        paddingBottom="3.5rem"
      >
        <Flex padding="1" marginLeft="1rem">
          <PhoneIcon />7011061359
        </Flex>
        <Flex padding="1" marginLeft="1rem">
          <Link
            _hover={{ color: 'blue.600' }}
            href="<https://github.com/anshsharma120601"
          >
            <Image
              h="6"
              borderRadius="6px"
              src="https://e7.pngegg.com/pngimages/914/758/png-clipart-computer-icons-logo-github-github-logo-logo-computer-program-thumbnail.png"
            />
          </Link>
        </Flex>
        <Flex padding="1" marginLeft="1rem">
          <Link
            _hover={{ color: 'blue.600' }}
            href="https://www.instagram.com/anshsharma1206/"
          >
            <Image
              h="6"
              borderRadius="6px"
              src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-app/instagram.jpg?itok=Pyl371sg"
            />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
