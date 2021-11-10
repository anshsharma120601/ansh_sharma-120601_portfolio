import { Flex, Image } from '@chakra-ui/react';

export default function Certificate() {
  return (
    <Flex bgColor="blue.900" textColor="white" paddingBottom="500">
      <Image
        _hover={{ h: '35rem', w: '45rem' }}
        cursor="pointer"
        borderRadius="3xl"
        marginTop="7rem"
        padding="3"
        h="25rem"
        w="30rem"
        src="https://udemy-certificate.s3.amazonaws.com/image/UC-54a716d2-3066-4ad9-b816-9256a5958aea.jpg?v=1634911035000"
      />
      <Image
        _hover={{ h: '35rem', w: '45rem' }}
        cursor="pointer"
        borderRadius="3xl"
        marginTop="7rem"
        padding="3"
        h="25rem"
        w="30rem"
        src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~FVY2TG7MWP39/CERTIFICATE_LANDING_PAGE~FVY2TG7MWP39.jpeg"
      />
    </Flex>
  );
}
