import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderIconButton} from "../components/HeaderIconButton";
import {AuthContext} from "../contexts/AuthContext";

export function ProductsListScreen({navigation}) {
    const {logout} = useContext(AuthContext);
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <HeaderIconButton onPress={() => {logout()}} />
        })
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text>Welcome to the products list</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
