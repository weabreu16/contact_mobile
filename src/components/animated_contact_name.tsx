import React, { memo, useEffect } from 'react';
import { HStack, Text } from 'native-base';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence
} from 'react-native-reanimated';

interface Props {
  children?: React.ReactNode
};

const AnimatedHStack = Animated.createAnimatedComponent(HStack);

const AnimatedContactName = memo((props: Props) => {
  const hstackOffset = useSharedValue(0);
  const hstackAnimatedStyles = useAnimatedStyle(
    () => ({
      transform: [{ translateX: hstackOffset.value }]
    }),
    []
  );

  useEffect(() => {
    const easing = Easing.out(Easing.quad);

    hstackOffset.value = withSequence(
      withTiming(4, { duration: 200, easing }),
      withTiming(0, { duration: 200, easing })
    )
  });

  return (
    <AnimatedHStack alignItems="center" style={[hstackAnimatedStyles]}>
      <Text fontSize={20} noOfLines={1} isTruncated px={5}>
        {props.children}
      </Text>
    </AnimatedHStack>
  );
});

export default AnimatedContactName;
