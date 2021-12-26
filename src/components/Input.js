import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export function Input({style, placeholder, props}) {
    return <TextInput placeholder={placeholder} {...props} style={[styles.input, style, ]} />
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#e8e8e8',
        width: '100%',
        padding: 20,
        borderRadius: 8,
    }
});
