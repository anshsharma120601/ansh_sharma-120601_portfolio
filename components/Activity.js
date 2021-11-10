import { Flex, Link, Image, Heading } from '@chakra-ui/react';

export default function Activity() {
  return (
    <Flex
      fontFamily="sans-serif"
      fontSize="xl"
      padding="1rem"
      marginTop="5rem"
      flexDirection="column"
    >
      <Heading fontFamily="cursive" as="h1" size="4xl">
        Activities
      </Heading>
      <Heading as="h2" size="2xl" fontWeight="thin">
        Working in NGOs
      </Heading>
      <p>
        I have worked in
        <u>
          <Link _hover={{ color: 'blue.600' }} href="http://www.eklavyatrust.org/"> Eklavya NGO school </Link>
        </u>
        as a science and maths teacher for classes 9th, 10th and 11th. I have
        worked in this NGO for 2 months and looking forward to work in many
        more.
      </p>

      <Image
        h="18rem"
        w="20rem"
        cursor="pointer"
        margin="0.5rem"
        borderRadius="13px"
        bgColor="white"
        padding="0.2rem"
        src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/2/7/w1200X800/This_ngo_leads_fight.jpg"
      />

      <Heading as="h2" size="2xl" fontWeight="thin">
        Odyssey of Mind
      </Heading>
      <p>
        I participated in ODM competition which took place in my school. At that
        time I took part in this contest to have a broad view on world and
        competition. My team of 5 students won gold medal in this contest.
      </p>

      <Image
        h="18rem"
        w="40rem"
        cursor="pointer"
        margin="0.5rem"
        borderRadius="13px"
        bgColor="white"
        padding="0.2rem"
        src="https://www.odysseyofthemind.com/wp-content/uploads/2021/06/OM-Full-Logo-1.png"
      />

      <Heading as="h2" size="2xl" fontWeight="thin">
        Amity Cadet Corps
      </Heading>
      <p>
        Since I belonged to family with Army background, I always wanted to see
        what the hype was about and I got a taste of it in ACC. From parades to
        different kinds of activities and living in tents with your friends for
        a week, everything was adventurous and fun.
      </p>
      <Image
        h="18rem"
        w="20rem"
        cursor="pointer"
        margin="0.5rem"
        borderRadius="13px"
        bgColor="white"
        padding="0.2rem"
        src="https://avatars.githubusercontent.com/u/81307379?s=400&u=808940eb4ed826e74fa3382e9b76d6e18900b938&v=4"
      />

      <Heading as="h2" size="2xl" fontWeight="thin">
        Playing Guitar
      </Heading>
      <p>
        I was very passionate about playing guitar since my school days. I have
        also cleared level3 grade guitar test from trinity college of London
        which one of the most toughest and professional guitar exams. I have in
        many small bands and functions also.
      </p>
      <Image
        h="18rem"
        w="20rem"
        cursor="pointer"
        margin="0.5rem"
        borderRadius="13px"
        bgColor="white"
        padding="0.2rem"
        src="https://www.trinitycollege.com/images/news/news_placeholder.png"
      />

      <Heading as="h2" size="2xl" fontWeight="thin">
        Bike Riding
      </Heading>
      <p>
        I fell in love with bikes once I was in college. I formed a small group
        with my friends for bike rides and plans. They say that 4wheels carry
        body and 2wheels carry soul.
      </p>
      <Image
        h="18rem"
        w="20rem"
        cursor="pointer"
        margin="0.5rem"
        borderRadius="13px"
        bgColor="white"
        padding="0.2rem"
        src="https://lh3.googleusercontent.com/a-/AOh14GgjKEwyvRlxVNQjf-qL3INXAMQiRpIpMXuJ6TYvkw=s288-p-rw-no"
      />
    </Flex>
  );
}
