import React, { useState } from 'react';
import { uploadFile } from '../services/file.service';
import * as ImagePicker from 'expo-image-picker';
import { Avatar, Box, Button, Pressable } from 'native-base';
import http from '../services/http.client';
import constants from '../../config';

function TestScreen(props: any) {
  const [image, setImage] = useState('');
  const [type, setType] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setType(result.type!);
    }
  }

  const uploadImage = async () => {
    const result = await uploadFile({ uri: image, type: type, name: image });
    console.log(result);
  }

  const getHello = async () => {
    const result = await http.get(`${constants.apiUrl}`);
    console.log(result);
  }

  return (
    <Box>
      <Pressable onPress={() => pickImage()}>
        <Avatar size="xl"
          borderRadius={100}
          borderWidth={3}
          borderColor="red.800"
          source={image ? {uri: image} : require('../../assets/1.jpg')}
        />
      </Pressable>
      <Button borderRadius={20} bg="red.800" onPress={() => uploadImage()}>
        Upload
      </Button>
      <Button bg="red.800" onPress={() => getHello()}>
        Get Hello
      </Button>
    </Box>
  )
};

export default TestScreen
