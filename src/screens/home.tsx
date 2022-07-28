import React, { useCallback, useEffect, useState } from 'react';
import { Fab, Icon, VStack } from 'native-base';
import { Feather } from '@expo/vector-icons';
import ContactList from '../components/contact_list';
import Contact from '../models/contact';
import AnimatedColorBox from '../components/animated-color-box';
import AppBar from '../components/app_bar';
import { getContacts, removeContact } from '../services/contact.service';

function HomeScreen(props: any) {
  const [data, setData] = useState([]);

  const handlePressItem = useCallback((item: Contact) => {
    props.navigation.navigate("ContactForm", { contact: item });
  }, []);

  const handleRemoveItem = useCallback(async (item: Contact) => {
    await removeContact(item._id!);

    setData((prevData: any) => {
      const newData = prevData.filter((i: Contact) => i !== item);
      return newData;
    });
  }, []);

  useEffect(() => {

    const fetchContactsData = async () => {
      const contactData = await getContacts();

      setData(contactData);
    }

    fetchContactsData();

  }, [data, getContacts]);

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
