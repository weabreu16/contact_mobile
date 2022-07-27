import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Input,
  IInputProps,
  Text
} from 'native-base';

interface Props extends IInputProps {
  label: string
  element?: React.ReactNode
  elementColor?: string
}

function ContactFormInput(props: Props) {
  return (
    <HStack w="full" alignItems="center" pt={2}>
      {props.element && (
        <Box>
          <Box h={45} w={45}
            borderRadius={100}
            alignItems="center"
            justifyContent="center"
            bg={props.elementColor ? props.elementColor : "transparent"}
          >
            {props.element}
          </Box>
        </Box>
      )}
      <VStack w={props.element ? "88%" : "full"}
        pl={props.element ? 3 : 0}
      >
        <Text fontSize={12} pb={-5}>{props.label}</Text>
        <Input variant="underlined"
          borderColor="red.800"
          fontSize={15}
          py={-10}
          _disabled={{ opacity: 1 }}
          {...props}
        />
      </VStack>
    </HStack>
  );
};

export default ContactFormInput;
