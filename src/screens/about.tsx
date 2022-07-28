import React from 'react';
import AppBar from '../components/app_bar';
import Masthead from '../components/masthead';
import AnimatedColorBox from '../components/animated-color-box';
import { Avatar, Box, Icon, ScrollView, Text, VStack, useColorModeValue } from 'native-base';
import LinkButton from '../components/link_button';
import { Feather } from '@expo/vector-icons';

function AboutScreen(props: any) {
  return (
    <AnimatedColorBox flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
    >
      <Masthead title="About the app"
        image={require('../../assets/about-masthead.jpg')}
      >
        <AppBar
        />
      </Masthead>
      <ScrollView mt="-20px" pt="30px" p={4}
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Avatar w={120} h={120}
              source={require('../../assets/devaslife.jpg')}
              borderRadius={100}
              borderWidth={3}
              borderColor="red.800"
              resizeMode="cover"
              alt="devaslife image"
            />
            <Text pb={4} fontSize="md" w="full">
              An interactive contact app based on ToDo List App of DevAsLife.
            </Text>
            <LinkButton size="lg"
              borderRadius="full"
              colorScheme="red"
              href="https://www.youtube.com/devaslife"
              leftIcon={<Icon as={Feather} name="youtube" color="white" size="sm" opacity={0.5} />}
            >
              DevAsLife Channel
            </LinkButton>
          </Box>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen;
