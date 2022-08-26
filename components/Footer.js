import {StyleSheet} from 'react-native';
import React from 'react';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  HStack,
  Center,
  Pressable,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FooterData} from './FooterData';

const Footer = () => {
  const [selected, setSelected] = React.useState(1);

  return (
    <NativeBaseProvider>
      <Box flex={1} bg='#fff1' safeAreaTop width="100%" alignSelf="center">
        <Center flex={1}></Center>

        <HStack height="10" bg="white" alignItems="center" safeAreaBottom shadow={2}>
          {FooterData.map((item, index) => {
            const IconType = item.iconType
            return (
              <Pressable
                cursor="pointer"
                opacity={selected === index ? 1 : 0.5}
                py="2"
                flex={1}
                onPress={() => setSelected(index)}
                key={item.title}>
                <Center>
                  <Icon
                    mb="1"
                    as={
                      <IconType
                        name={selected === index ? item.iconSelected : item.iconUnselect}
                      />
                    }
                    color="#6d28d9"
                    size="6"
                  />
                
                </Center>
              </Pressable>
            );
          })}
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default Footer;

const styles = StyleSheet.create({});
