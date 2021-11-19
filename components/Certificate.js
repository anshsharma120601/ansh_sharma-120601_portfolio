import { Flex, Image } from '@chakra-ui/react';

export default function Certificate() {
  return (
    <Flex flexDirection={['column', 'row', 'row', 'row']}>
      <Image
        cursor="pointer"
        borderRadius="3xl"
        marginTop={['4rem', '5.5rem', '5.5rem', '5.5rem']}
        marginLeft={['1rem', '2rem', '2rem', '2rem']}
        padding="2"
        objectFit="cover"
        h={['15rem', '30rem', '30rem', '30rem']}
        w={['19rem', '37rem', '37rem', '37rem']}
        src="https://udemy-certificate.s3.amazonaws.com/image/UC-54a716d2-3066-4ad9-b816-9256a5958aea.jpg?v=1634911035000"
      />

      <Image
        cursor="pointer"
        borderRadius="3xl"
        marginTop={['1rem', '5.5rem', '5.5rem', '5.5rem']}
        marginLeft={['1rem', '2rem', '2rem', '2rem']}
        padding={['1', '2', '2', '2']}
        objectFit="cover"
        h={['15rem', '30rem', '30rem', '30rem']}
        w={['19rem', '37rem', '37rem', '37rem']}
        src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~FVY2TG7MWP39/CERTIFICATE_LANDING_PAGE~FVY2TG7MWP39.jpeg"
      />
    </Flex>
  );
}
