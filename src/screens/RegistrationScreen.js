import React, {useContext, useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {Error} from '../components/Error';
import {IconButton} from '../components/IconButton';
import {AuthContainer} from '../components/AuthContainer';
import {AuthContext} from '../contexts/AuthContext';
import {Loading} from '../components/Loading';
import PasswordInput from '../components/PasswordInput';

export function RegistrationScreen({navigation}) {
  const {register} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [passwordAgain, setPasswordAgain] = useState('');
  const [showPasswordAgain, setShowPasswordAgain] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const signUp = async () => {
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      passwordAgain === ''
    ) {
      setError('Fill in the blanks');
    } else {
      if (password === passwordAgain) {
        try {
          setLoading(true);
          await register(name, email, password);
          navigation.pop();
        } catch (e) {
          console.log(e);
          setError(e.message);
          setLoading(false);
        }
      } else {
        setError('Passwords do not match');
      }
    }
  };

  return (
    <AuthContainer>
      <IconButton
        name={'close-outline'}
        style={styles.closeIcon}
        onPress={() => {
          navigation.pop();
        }}
      />
      <Heading style={styles.title}>Sign Up</Heading>
      <Error error={error} />
      <Input
        style={styles.inputContainer}
        placeholder={'Name'}
        value={name}
        onChangeText={setName}
        title={'Name'}
      />
      <Input
        style={styles.inputContainer}
        placeholder={'E-Mail'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={setEmail}
        title={'E-Mail'}
      />
      <PasswordInput
        style={styles.inputContainer}
        placeholder={'Password'}
        secureTextEntry={showPassword}
        value={password}
        onChangeText={setPassword}
        title={'Password'}
        onPress={() => setShowPassword(!showPassword)}
        showPassword={showPassword}
      />
      <PasswordInput
        placeholder={'Retype Password'}
        secureTextEntry={showPasswordAgain}
        value={passwordAgain}
        onChangeText={setPasswordAgain}
        title={'Retype Password'}
        onPress={() => setShowPasswordAgain(!showPasswordAgain)}
        showPassword={showPasswordAgain}
      />
      <FilledButton
        title={'Sign Up'}
        style={styles.registerButton}
        onPress={() => signUp()}
      />
      <Loading loading={loading} />
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 48,
  },
  inputContainer: {
    marginBottom: 20,
  },
  passwordContainer: {
    width: '100%',
  },
  eyeContainer: {
    right: 20,
    position: 'absolute',
    height: '100%',
    justifyContent: 'center',
  },
  registerButton: {
    marginVertical: 35,
  },
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 16,
  },
});
