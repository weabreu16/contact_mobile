import React, { useCallback, useRef } from 'react';
import { AnimatePresence, View } from 'moti';
import { PanGestureHandlerProps, ScrollView } from 'react-native-gesture-handler';
import ContactItem from './contact_item';
import { makeStyledComponent } from '../utils/styled';
import Contact from '../models/contact';

const StyledView = makeStyledComponent(View);
const StyledScrollView = makeStyledComponent(ScrollView);

interface ContactListProps {
  data: Array<Contact>
  onPressItem: (contact: Contact) => void
  onRemoveItem: (contact: Contact) => void
};

interface ContactItemProps extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  data: Contact
  onPress: (contact: Contact) => void
  onRemove: (contact: Contact) => void
};

export function AnimatedContactItem(props: ContactItemProps) {
  const handlePress = useCallback(() => {
    props.onPress(props.data);
  }, [props.data, props.onPress]);

  const handleRemove = useCallback(() => {
    props.onRemove(props.data);
  }, [props.data, props.onPress]);

  return (
    <StyledView w="full"
      from={{ opacity: 0, scale: 0.5, marginBottom: -46 }}
      animate={{ opacity: 1, scale: 1, marginBottom: 0 }}
      exit={{ opacity: 0, scale: 0.5, marginBottom: -46 }}
    >
      <ContactItem name={props.data.name}
        image={props.data.image ? { uri: `data:image/png;base64,${props.data.image}` }
          : require('../../assets/1.jpg')
        }
        onPress={handlePress}
        onRemove={handleRemove}
      />
    </StyledView>
  )
};

function ContactList(props: ContactListProps) {
  const refScrollView = useRef(null);

  return (
    <StyledScrollView ref={refScrollView} w="full">
      <AnimatePresence>
        {props.data.map(item => (
          <AnimatedContactItem key={item._id} data={item}
            simultaneousHandlers={refScrollView}
            onPress={props.onPressItem}
            onRemove={props.onRemoveItem}
          />
        ))}
      </AnimatePresence>
    </StyledScrollView>
  )
};

export default ContactList;
