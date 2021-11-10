import { PhoneIcon } from '@chakra-ui/icons';
import { Flex, Image, Link} from '@chakra-ui/react';

export default function Footer() {
  return (
    <Flex
      fontWeight="900"
      position="fixed"
      bottom="0rem"
      flexDirection="row"
      bgGradient="linear(to-t, blue.200, transparent)"
      padding="1rem"
      width="full"
      h="4rem"
    >
      <Flex padding="1">Copyright @Ansh Sharma. All rights reserved.</Flex>
      <Flex padding="1">
        <PhoneIcon />
        7011061359
      </Flex>
      <Flex padding="1">
        <Link
          _hover={{ color: 'blue.600' }}
          href="<https://github.com/anshsharma120601"
        >
          <Image
            h="4"
            src="https://e7.pngegg.com/pngimages/914/758/png-clipart-computer-icons-logo-github-github-logo-logo-computer-program-thumbnail.png"
          />
          My Github Account
        </Link>
      </Flex>
      <Flex padding="1">
        <Link
          _hover={{ color: 'blue.600' }}
          href="https://www.instagram.com/anshsharma1206/"
        >
          <Image
            h="4"
            src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-app/instagram.jpg?itok=Pyl371sg"
          />
          My Instagram Account
        </Link>
      </Flex>
      
    </Flex>
  );
}
