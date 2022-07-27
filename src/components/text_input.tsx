import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as InputRNP } from 'react-native-paper';
import theme from '../theme';

function TextInput(props: any) {
  return (
    <View style={styles.container}>
      <InputRNP
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {props.description && !props.errorText ? (
        <Text style={styles.description}>{props.description}</Text>
      ) : null}
      {props.errorText ? <Text style={styles.error}>{props.errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginVertical: 12,
  },

  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },

  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});

export default TextInput;
