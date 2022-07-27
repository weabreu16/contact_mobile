import React, { useCallback, useState } from 'react';
import { Fab, Icon, VStack } from 'native-base';
import { Feather } from '@expo/vector-icons';
import ContactList from '../components/contact_list';
import Contact from '../models/contact';
import AnimatedColorBox from '../components/animated-color-box';
import AppBar from '../components/app_bar';

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
    <AnimatedColorBox flex={1} w="full">
      <AppBar imgSource={require('../../assets/user.png')}
        screenText="Contacts"
      />
      <VStack w="full" space={5} alignItems="center">
        <ContactList data={data}
          onPressItem={handlePressItem}
          onRemoveItem={handleRemoveItem}
        />
      </VStack>
      <Fab position="absolute" renderInPortal={false} size="lg"
        icon={<Icon color="white" as={<Feather name="plus" />} size="lg" />}
        bg="red.800"
        onPress={() => props.navigation.navigate("ContactForm")}
      />
    </AnimatedColorBox>
  )
};

export default HomeScreen;
