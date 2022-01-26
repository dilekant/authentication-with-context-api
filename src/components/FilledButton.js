import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Arrow from '../assets/icons/Arrow';

export function FilledButton({title, style, onPress}) {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, {backgroundColor: colors.primary}, style]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.arrowContainer}>
        <Arrow />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
    fontFamily: 'Sofia-Pro-SemiBold',
  },
  arrowContainer: {
    right: 12,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
