import React, { useCallback } from 'react';
import { HStack, IconButton, Image, StatusBar, Text, VStack, useColorModeValue } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

function AppBar(props: any) {
  const navigation = useNavigation<DrawerNavigationProp<{}>>();

  const handlePressMenuButton = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return <>
    <StatusBar barStyle="light-content" />
    <VStack w="full">
      <HStack pl={2} py={0} w="full" justifyContent="space-between" alignContent="center" alignItems="center">
        <IconButton onPress={handlePressMenuButton}
          borderRadius={100}
          _icon={{ as: Feather, name: 'menu', size: 6, color: useColorModeValue('black', 'white') }}
        />

        <Image position="absolute" right={4}
          size={100} alt="logo" resizeMode="contain" source={require('../../assets/logo01.png')}
        />
      </HStack>

      <HStack w="full" bg="#ffa588" p={0} h={45}>
        <HStack position="absolute" left={10} bottom={2}>
          <Image source={props.imgSource} alt="Screen Img" size={25} />

          <Text fontSize={17} pl={2}>{props.screenText}</Text>
        </HStack>
      </HStack>
    </VStack>
  </>
};

export default AppBar;
