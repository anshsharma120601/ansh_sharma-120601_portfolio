import { Flex, Image } from '@chakra-ui/react';

function Resume() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Image
        cursor="pointer"
        marginTop="6rem"
        marginBottom={['15rem', '5rem', '5rem', '5rem']}
        borderRadius="13px"
        objectFit="cover"
        h={['27rem', '40rem', '40rem', '40rem']}
        w={['18rem', '30rem', '30rem', '30rem']}
        src="https://instagram.fdel27-1.fna.fbcdn.net/v/t51.2885-15/e15/p640x640/265009642_637283417628825_4918984141258313708_n.jpg?_nc_ht=instagram.fdel27-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=pMG72kA66LkAX9n_9mh&edm=ABJHkxYAAAAA&ccb=7-4&oh=5d78d4036da87f274d7a25f25ce453d9&oe=61B8276B&_nc_sid=fa978c&ig_cache_key=MjcyNDI4MzU4ODY1NTUwNDk3NA%3D%3D.2-ccb7-4"
      />
    </Flex>
  );
}

export default Resume;
