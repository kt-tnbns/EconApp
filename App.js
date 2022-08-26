import React from 'react';
// 1. import `NativeBaseProvider` component
import {Fab} from 'native-base';
import {
  NativeBaseProvider,
  Text,
  Box,
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Center,
  StatusBar,
  useDisclose,
  Modal,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  // 2. Use at the root of your app
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <NativeBaseProvider>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack
        bg="#013"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center">
          <IconButton icon={<Icon as={Ionicons} name="reorder-three-outline"  color="white" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={Ionicons} name="home"  color="white" />} />
          <IconButton icon={<Icon as={Ionicons} name="search"  color="white" />} />
          <IconButton icon={<Icon as={Ionicons} name="ellipsis-vertical-outline"  color="white" />} />
        </HStack>
      </HStack>


      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
        <Center>
          <Modal isOpen={isOpen} onClose={onClose}>
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header fontSize="4xl" fontWeight="bold">
                Delete Customer
              </Modal.Header>
              <Modal.Body>
                This will remove all data relating to Alex. This action cannot
                be reversed. Deleted data can not be recovered.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="unstyled" mr="1" onPress={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="error" onPress={onClose}>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
          <Button onPress={onOpen}>Open Modal</Button>
        </Center>
        <Fab renderInPortal={false} shadow={2} size="sm" icon={<Icon as={Ionicons} name="add-outline"  color="white" size="30px" />} />
      </Box>
    </NativeBaseProvider>
  );
}
