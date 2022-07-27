import React from 'react';
import { Center, Text, VStack } from 'native-base';
import ContactItem from '../components/contact_item';

function HomeScreen(props: any) {
  return (
    <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} px={4} flex={1}>
      <VStack w="full" space={5} alignItems="center">
        <ContactItem />
      </VStack>
    </Center>
  )
};

export default HomeScreen;
