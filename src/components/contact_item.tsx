import React from 'react';
import {
  Avatar,
  Box,
  HStack,
  Icon,
  useTheme,
  themeTools,
  useColorModeValue
} from 'native-base';
import SwipableView from './swipable_view';
import { Feather } from '@expo/vector-icons';
import AnimatedContactName from './animated_contact_name';
import { PanGestureHandlerProps } from 'react-native-gesture-handler';

interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  onRemove?: () => void
}

function ContactItem(props: any) {
  const theme = useTheme();
  const activeTextColor = themeTools.getColor(theme, useColorModeValue('darkText', 'lightText'));

  return (
    <SwipableView simultaneousHandlers={props.simultaneousHandlers}
      onSwipeLeft={props.onRemove}
      backView={
        <Box w="full" h="full" bg="red.500" alignItems="flex-end" justifyContent="center" pr={4}>
          <Icon color="white" as={<Feather name="trash-2" />} size="sm" />
        </Box>
      }
    >
      <HStack alignItems="center" w="full" px={4} py={2}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
      >
        <Avatar size="md"
          borderRadius={100}
          borderColor="red.200"
          borderWidth={3}
          source={require('../../assets/1.jpg')}
        />
        <AnimatedContactName>
          Task Item
        </AnimatedContactName>
      </HStack>
    </SwipableView>
  )
};

export default ContactItem;
