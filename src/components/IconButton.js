import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Close from '../icons/Close';

export function IconButton({style, onPress}) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Close stroke={'purple'} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {},
});
