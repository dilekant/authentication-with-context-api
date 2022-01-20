import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function Heading({children, style, props}) {
  const {colors} = useTheme();
  return (
    <Text {...props} style={[styles.text, {color: colors.text}, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    color: '#2E3748',
    fontFamily: 'Sofia-Pro-SemiBold',
  },
});
