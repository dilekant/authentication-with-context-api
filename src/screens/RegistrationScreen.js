import React, {useContext, useState} from 'react';
import { StyleSheet } from 'react-native';
import {Heading} from "../components/Heading";
import {Input} from "../components/Input";
import {FilledButton} from "../components/FilledButton";
import {Error} from "../components/Error";
import {IconButton} from "../components/IconButton";
import {AuthContainer} from "../components/AuthContainer";
import {AuthContext} from "../contexts/AuthContext";
import {Loading} from "../components/Loading";

export function RegistrationScreen({navigation}) {
    const {register} = useContext(AuthContext);
    const [name, setName] = useState('bithovendev');
    const [email, setEmail] = useState('bithovendev@gmail.com');
    const [password, setPassword] = useState('abc');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    return (
        <AuthContainer>
            <IconButton name={'close-outline'} style={styles.closeIcon} onPress={() => {navigation.pop();}} />
            <Heading style={styles.title}>REGISTRATION</Heading>
            <Error error={error} />
            <Input style={styles.input} placeholder={'Username'} value={name} onChangeText={setName} />
            <Input style={styles.input} placeholder={'Email'} keyboardType={'email-address'} value={email} onChangeText={setEmail} />
            <Input style={styles.input} placeholder={'Password'} secureTextEntry value={password} onChangeText={setPassword} />
            <FilledButton
                title={'Register'}
                style={styles.registerButton}
                onPress={async () => {
                    try {
                        setLoading(true);
                        await register(email, password);
                        navigation.pop();
                    } catch (e) {
                        console.log(e);
                        setError(e.message);
                        setLoading(false);
                    }
                }}
            />
            <Loading loading={loading} />
        </AuthContainer>
    )
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 48,
    },
    input: {
        marginVertical: 8,
    },
    registerButton: {
        marginVertical: 32,
    },
    closeIcon: {
        position: 'absolute',
        top: 60,
        right: 16,
    },
});
