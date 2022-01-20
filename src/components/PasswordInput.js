import {Input} from './Input';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Eye from '../assets/icons/Eye';
import EyeOff from '../assets/icons/EyeOff';
import React from 'react';

const PasswordInput = ({title, style, showPassword, onPress, ...props}) => {
  return (
    <View style={[styles.passwordContainer, style]}>
      <Input title={title} {...props} />
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.eyeContainer}>
        {showPassword ? (
          <Eye stroke={'#9FA5BB'} />
        ) : (
          <EyeOff stroke={'#9FA5BB'} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordContainer: {
    width: '100%',
  },
  eyeContainer: {
    right: 20,
    position: 'absolute',
    height: '100%',
    justifyContent: 'center',
  },
});

export default PasswordInput;
