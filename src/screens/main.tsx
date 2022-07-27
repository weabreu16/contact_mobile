import React from 'react';
import { Button, Image, Text } from 'native-base';
import { ImageBackground, StyleSheet } from 'react-native';

function MainScreen(props: any) {
  return (
    <ImageBackground
      source={require('../../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <Image w={320} h={100} mb={8} alt="app logo"
        source={require('../../assets/logo01.png')}
      />
      <Button w="90%" h={50} mb={10} pt={2} pb={2} bg={"red.800"}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text fontWeight="bold" fontSize={15} lineHeight={26} color="white">Log In</Text>
      </Button>
      <Button w="90%" h={50} mb={10} pt={2} pb={2} bg={"red.800"}
        onPress={() => props.navigation.navigate("Signup")}
      >
        <Text fontWeight="bold" fontSize={15} lineHeight={26} color="white">Sign Up</Text>
      </Button>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MainScreen;
