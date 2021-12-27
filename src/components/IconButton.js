import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from "@react-navigation/native";
import Close from '../icons/Close';

export function IconButton({style, onPress}) {
    const {colors} = useTheme();
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Close stroke={colors.primary} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {},
});
