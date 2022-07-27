import React, { useCallback, useState } from 'react';
import { Center, Text, VStack } from 'native-base';
import ContactList from '../components/contact_list';
import Contact from '../models/contact';

const initialData = [
  {
    _id: "1",
    name: "Pablo"
  },
  {
    _id: "2",
    name: "Juan"
  }
]

function HomeScreen(props: any) {
  const [data, setData] = useState(initialData);

  const handlePressItem = useCallback((item: Contact) => {
    console.log(item);
  }, []);

  const handleRemoveItem = useCallback((item: Contact) => {
    setData((prevData: any) => {
      const newData = prevData.filter((i: Contact) => i !== item);
      return newData;
    });
  }, []);

  return (
    <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} px={4} flex={1}>
      <VStack w="full" space={5} alignItems="center">
        <ContactList data={data}
          onPressItem={handlePressItem}
          onRemoveItem={handleRemoveItem}
        />
      </VStack>
    </Center>
  )
};

export default HomeScreen;
