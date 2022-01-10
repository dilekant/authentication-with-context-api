import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Logout from '../icons/Logout';
import {useTheme} from '@react-navigation/native';

export function HeaderIconButton({style, onPress}) {
  const {colors} = useTheme();

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Logout stroke={colors.primary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
});
