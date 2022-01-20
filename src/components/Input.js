import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function Input({style, styleInput, title, ...props}) {
  const {colors} = useTheme();
  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        {...props}
        style={[
          styles.input,
          styleInput,
          {borderColor: colors.inputBorder, color: colors.inputColor},
        ]}
        placeholderTextColor={'#9FA5BB'}
      />
      <Text
        style={[
          styles.inputText,
          {backgroundColor: colors.background, color: colors.inputTextColor},
        ]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    overflow: 'scroll',
  },
  inputText: {
    marginLeft: 25,
    position: 'absolute',
    paddingLeft: 3,
    paddingRight: 7,
    fontSize: 12,
    top: -8,
    fontFamily: 'Sofia-Pro-Medium',
  },
  input: {
    width: '100%',
    padding: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 2,
  },
});
