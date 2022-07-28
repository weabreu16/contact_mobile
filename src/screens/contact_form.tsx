import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Fab, HStack, Icon, Pressable, VStack } from 'native-base';
import ContactFormInput from '../components/contact_form_input';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import AppBar from '../components/app_bar';
import AnimatedColorBox from '../components/animated-color-box';
import * as ImagePicker from 'expo-image-picker';
import { addContact, updateContact } from '../services/contact.service';

class ContactFormScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      contact: {
        name: '',
        lastname: '',
        nickname: '',
        phone: '',
        mobile: '',
        email: '',
        image: ''
      },
      editMode: false
    }
  }

  componentDidMount() {
    if (this.props.route.params && this.props.route.params.contact) {
      this.setState({
        ...this.state,
        contact: {
          ...this.state.contact,
          ...this.props.route.params.contact
        }
      });
    }

    if (!this.props.route.params || this.props.editMode) {
      this.setState({
        ...this.state,
        editMode: true
      });
    }
  }

  applyInputChanges(name: string, value: string) {
    this.setState({
      ...this.state,
      contact: {
        ...this.state.contact,
        [name]: value
      }
    });
  }

  validateContact() {
    if (!this.state.contact.name) return false;

    return this.state.contact.phone || this.state.contact.mobile;
  }

  toggleEditMode() {
    this.setState({
      ...this.state,
      editMode: !this.state.editMode
    });
  }

  async handleAddContact() {
    await addContact(this.state.contact);

    this.props.navigation.navigate("Home");
  }

  async handleUpdateContact() {
    console.log("Update")
  }

  async handlePressedFloatingButton() {
    if (!this.state.contact._id) {
      if (!this.validateContact()) return;

      await this.handleAddContact();
      return;
    }

    if (this.state.editMode === false) {
      this.toggleEditMode();
      return;
    }

    if (!this.validateContact()) return;

    await this.handleUpdateContact();

    this.toggleEditMode();
  }

  async pickImage() {
    if (!this.state.editMode) return;

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });

    if (!result.cancelled) {
      this.setState({
        ...this.state,
        contact: {
          ...this.state.contact,
          image: result.base64
        }
      });
    }
  }

  render() {
    return (
      <AnimatedColorBox flex={1} w="full">
        <AppBar imgSource={!this.state.contact._id
          ? require('../../assets/add-user.png')
          : require('../../assets/edit-user.png')}
          screenText={!this.state.contact._id
            ? 'Add Contact'
            : 'Edit Contact'}
        />
        <VStack w="full">
          <HStack alignItems="center" pl={2}>
            <Pressable onPress={() => this.pickImage()}>
              <Avatar size="2xl"
                borderRadius={100}
                borderColor="red.800"
                borderWidth={4}
                source={!this.state.contact.image ? require('../../assets/1.jpg')
                  : { uri: `data:image/png;base64,${this.state.contact.image}` }
                }
              />
            </Pressable>
            <VStack w="67%" px={3}>
              <ContactFormInput label="Name"
                value={this.state.contact.name}
                onChangeText={value => this.applyInputChanges('name', value)}
                isDisabled={!this.state.editMode}
              />
              <ContactFormInput label="Lastname"
                value={this.state.contact.lastname}
                onChangeText={value => this.applyInputChanges('lastname', value)}
                isDisabled={!this.state.editMode}
              />
              <ContactFormInput label="Nickname"
                value={this.state.contact.nickname}
                onChangeText={value => this.applyInputChanges('nickname', value)}
                isDisabled={!this.state.editMode}
              />
            </VStack>
          </HStack>
          <VStack w="full" px={2} pt={5}>
            <ContactFormInput
              label="Mobile Number"
              element={<Icon as={MaterialIcons} color="white" name="phone" size="xl" />}
              elementColor="red.800"
              value={this.state.contact.mobile}
              onChangeText={value => this.applyInputChanges('mobile', value)}
              isDisabled={!this.state.editMode}
            />
            <ContactFormInput
              label="Phone Number"
              element={<Icon as={MaterialIcons} color="white" name="phone-in-talk" size="xl" />}
              elementColor="red.800"
              value={this.state.contact.phone}
              onChangeText={value => this.applyInputChanges('phone', value)}
              isDisabled={!this.state.editMode}
            />
            <ContactFormInput
              label="Email"
              element={<Icon as={MaterialIcons} color="white" name="email" size="xl" />}
              elementColor="red.800"
              value={this.state.contact.email}
              onChangeText={value => this.applyInputChanges('email', value)}
              isDisabled={!this.state.editMode}
            />
          </VStack>
        </VStack>
        <Fab position="absolute" renderInPortal={false} size="lg"
          icon={<Icon color="white"
            as={<Feather name={this.state.contact._id ? 'edit-2' : 'save'} />}
            size="lg"
          />}
          bg="red.800"
          onPress={() => this.handlePressedFloatingButton()}
        />
      </AnimatedColorBox>
    )
  }
};

const styles = StyleSheet.create({
  topFormContainer: {
    position: "absolute"
  }
});

export default ContactFormScreen;
