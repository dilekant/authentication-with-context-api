import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {Error} from '../components/Error';
import {AuthContainer} from '../components/AuthContainer';
import {AuthContext} from '../contexts/AuthContext';
import {Loading} from '../components/Loading';
import PasswordInput from '../components/PasswordInput';

export function LoginScreen({navigation}) {
  const {colors} = useTheme();
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const signIn = async () => {
    if (email === '' || password === '') {
      setError('Fill in the blanks');
    } else {
      try {
        setLoading(true);
        await login(email, password);
      } catch (e) {
        console.log(e);
        setError(e.message);
        setLoading(false);
      }
    }
  };

  return (
    <AuthContainer>
      <Heading style={styles.title}>Sign In</Heading>
      <Error error={error} />
      <Input
        style={styles.inputContainer}
        styleInput={styles.input}
        placeholder={'E-Mail'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={setEmail}
        title={'E-Mail'}
      />
      <PasswordInput
        placeholder={'Password'}
        secureTextEntry={showPassword}
        value={password}
        onChangeText={setPassword}
        title={'Password'}
        onPress={() => setShowPassword(!showPassword)}
        showPassword={showPassword}
      />
      <FilledButton
        title={'Sign In'}
        style={styles.loginButton}
        onPress={() => signIn()}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.text, {color: colors.singUpText}]}>
          Don’t have an account?{' '}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Registration');
          }}>
          <Text style={styles.textSignUp}> Sign up</Text>
        </TouchableOpacity>
      </View>
      <Loading loading={loading} />
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
  },
  inputContainer: {
    marginBottom: 20,
  },
  loginButton: {
    marginTop: 35,
  },
  textContainer: {
    marginTop: 18,
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    fontFamily: 'Sofia-Pro-Medium',
  },
  textSignUp: {
    color: '#3B83FC',
    fontSize: 15,
    fontFamily: 'Sofia-Pro-Medium',
  },
});
