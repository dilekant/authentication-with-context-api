import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Logout from '../icons/Logout';

export function HeaderIconButton({style, onPress}) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Logout stroke={'purple'} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 16,
    },
});
