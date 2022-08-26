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
  Stagger
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  // 2. Use at the root of your app
  const {isOpen, onOpen, onClose,onToggle} = useDisclose();
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
          <IconButton
            icon={
              <Icon as={Ionicons} name="reorder-three-outline" color="white" />
            }
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={Ionicons} name="home" color="white" />} />
          <IconButton
            icon={<Icon as={Ionicons} name="search" color="white" />}
          />
          <IconButton
            icon={
              <Icon
                as={Ionicons}
                name="ellipsis-vertical-outline"
                color="white"
              />
            }
          />
        </HStack>
      </HStack>

      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
        <Center>
          {/* <Modal isOpen={isOpen} onClose={onClose}>
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
          </Modal> */}
          <Button onPress={onOpen}>Open Modal</Button>
        </Center>
        
      </Box>
      <Center>

      <Box>
      
      <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 0,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring',
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}>
          <IconButton
            mb="4"
            variant="solid"
            bg="indigo.500"
            colorScheme="indigo"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                size="6"
                name="location-pin"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="yellow.400"
            colorScheme="yellow"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                _dark={{
                  color: 'warmGray.50',
                }}
                size="6"
                name="location-pin"
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="teal.400"
            colorScheme="teal"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                _dark={{
                  color: 'warmGray.50',
                }}
                size="6"
                name="location-pin"
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="red.500"
            colorScheme="red"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                size="6"
                name="photo-library"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="warmGray.50"
              />
            }
          />
        </Stagger>
        <HStack justifyContent="center">
          <IconButton
            variant="solid"
            borderRadius="full"
            size="lg"
            onPress={onToggle}
            bg="cyan.400"
            icon={
              <Icon
                as={MaterialIcons}
                size="6"
                name="photo-library"
                color="warmGray.50"
                _dark={{
                  color: 'warmGray.50',
                }}
              />
            }
          />
        </HStack>
          
        </Box>
        </Center>

    </NativeBaseProvider>
  );
}
