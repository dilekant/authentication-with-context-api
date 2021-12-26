import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Heading} from "../components/Heading";
import {Input} from "../components/Input";
import {FilledButton} from "../components/FilledButton";
import {TextButton} from "../components/TextButton";
import {Error} from "../components/Error";

export function LoginScreen() {
    return (
        <View style={styles.container}>
            <Heading style={styles.title}>LOGIN</Heading>
            <Error error={''} />
            <Input style={styles.input} placeholder={'Email'} keyboardType={'email-address'} />
            <Input style={styles.input} placeholder={'Password'} secureTextEntry />
            <FilledButton title={'Login'} style={styles.loginButton} onPress={() => {}} />
            <TextButton title={'Have u an account? Create one'} onPress={() => {}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
        paddingTop: 120,
        alignItems: 'center',
    },
    title: {
        marginBottom: 48,
    },
    input: {
        marginVertical: 8,
    },
    loginButton: {
        marginVertical: 32,
    },
});
