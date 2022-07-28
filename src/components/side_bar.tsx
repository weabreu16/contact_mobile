import React, { useCallback, useEffect, useState } from 'react';
import {
  HStack,
  VStack,
  Center,
  Avatar,
  Heading,
  IconButton,
  Pressable,
  useColorModeValue
} from 'native-base';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import AnimatedColorBox from './animated-color-box';
import ThemeToggle from './theme_toggle';
import { Feather } from '@expo/vector-icons';
import MenuButton from './menu_button';
import * as ImagePicker from 'expo-image-picker';
import { logout, getUserData } from '../services/user.service';

function Sidebar(props: DrawerContentComponentProps) {
  const currentRoute = props.state.routeNames[props.state.index];
  const [username, setUsername] = useState('');
  const [image, setImage] = useState('');

  const handlePressBackButton = useCallback(() => {
    props.navigation.closeDrawer();
  }, [props.navigation]);

  const handlePressMenuHome = useCallback(() => {
    props.navigation.navigate('HomeNav');
  }, [props.navigation]);

  const handlePressMenuAbout = useCallback(() => {
    props.navigation.navigate('About');
  }, [props.navigation]);

  const handlePressMenuLogout = async () => {
    await logout();
    props.navigation.navigate('Main');
  };

  const pickImage = useCallback(async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });

    if (!result.cancelled) {
      setImage(result.base64!);
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUserData();

      setUsername(userData.username);
    }

    fetchUserData(); 
  }, []);

  return (
    <AnimatedColorBox safeArea flex={1} p={7}
      bg={useColorModeValue('blue.50', 'darkBlue.800')}
    >
      <VStack flex={1} space={2}>
        <HStack justifyContent="flex-end">
          <IconButton onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('blue.300', 'darkBlue.700')}
            _icon={{
              as: Feather, name: 'chevron-left', size: 6,
              color: useColorModeValue('blue.800', 'darkBlue.700')
            }}
          />
        </HStack>

        <Pressable onPress={pickImage}>
          <Avatar size="xl" mb={6}
            borderRadius={100}
            borderColor="red.400"
            borderWidth={3}
            source={image ? { uri: `data:image/png;base64,${image}` }
              : require('../../assets/1.jpg')
            }
          />
        </Pressable>

        <Heading mb={4} size="xl">{username}</Heading>

        <MenuButton icon="inbox"
          active={currentRoute === 'HomeNav'}
          onPress={handlePressMenuHome}
        >
          Home
        </MenuButton>

        <MenuButton icon="info"
          active={currentRoute === 'About'}
          onPress={handlePressMenuAbout}
        >
          About
        </MenuButton>

        <MenuButton icon="log-out"
          active={false}
          onPress={() => handlePressMenuLogout()}
        >
          Logout
        </MenuButton>
      </VStack>
      <Center>
        <ThemeToggle />
      </Center>
    </AnimatedColorBox>
  )
}

export default Sidebar;
