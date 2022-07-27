import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Button, Image, Text } from 'native-base';
import TextInput from '../components/text_input';

function SignupScreen(props: any) {
  const [user, setUser] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  return (
    <ImageBackground
      source={require('../../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <Image w={320} h={100} mb={8} alt="app logo"
        source={require('../../assets/logo01.png')}
      />
      <TextInput
        label="User"
        returnKeyType="next"
        value={user.value}
        onChangeText={(text: string) => setUser({ value: text, error: '' })}
        error={!!user.error}
        errorText={user.error}
        autoCapitalize="none"
        autoCompleteType="username"
        textContentType="username"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: string) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button w="90%" h={50} mt={10} mb={10} pt={2} pb={2} bg={"red.800"}>
        <Text fontWeight="bold" fontSize={15} lineHeight={26} color="white">Sign Up</Text>
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <Text fontWeight="bold" color="blue.900">Log In</Text>
      </View>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    marginTop: 4
  }
});

export default SignupScreen;
