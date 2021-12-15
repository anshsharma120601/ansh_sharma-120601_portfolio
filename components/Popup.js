import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
} from '@chakra-ui/react';
import { MdOutlineWavingHand } from 'react-icons/md';

export default function Popup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex flexDir="column" align="flex-end">
      <Button
        background="transparent"
        onClick={onOpen}
        marginTop={['0.2rem', '0.2rem', '0.2rem', '0.2rem']}
        marginRight={['0rem', '0.3rem', '0.3rem', '0.3rem']}
        marginLeft={['-2rem', '0.2rem', '0.2rem', '0.2rem']}
        padding={['0rem', '0.1rem', '0.1rem', '0.1rem']}
      >
        <MdOutlineWavingHand size="50" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hello! Welcome to my portfolio.</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            I am Ansh Sharma, I welcome you to my portfolio and blog!, I
            am a front-end web developer and a machine learning intern who holds a
            B.Tech degree in Electronics and Communication. My area of interest is software development.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
