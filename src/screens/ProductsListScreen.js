import React, {useContext, useLayoutEffect} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {HeaderIconButton} from "../components/HeaderIconButton";
import {AuthContext} from "../contexts/AuthContext";
import {ThemeContext} from "../contexts/ThemeContext";
import {Product} from "../components/Product";
import {useGet} from "../hooks/useGet";
import Sun from "../icons/Sun";
import {HeaderIconsContainer} from "../components/HeaderIconsContainer";
import {useTheme} from "@react-navigation/native";

export function ProductsListScreen({navigation}) {
    const {colors} = useTheme();
    const {logout} = useContext(AuthContext);
    const switchTheme = useContext(ThemeContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderIconsContainer>
                    <TouchableOpacity style={styles.themeButton} onPress={() => {switchTheme()}}>
                        <Sun stroke={colors.primary} />
                    </TouchableOpacity>
                    <HeaderIconButton onPress={() => {logout()}} />
                </HeaderIconsContainer>
            ),
        })
    }, [navigation, logout, switchTheme]);

    const products = useGet('/api/products?populate=thumb');

    function renderProduct ({item: product}) {
        return <Product product={product.attributes} />
    }

    return (
        <FlatList
            contentContainerStyle={styles.productsListContainer}
            data={products}
            renderItem={renderProduct}
            keyExtractor={product => `${product.id}`}
        />
    )
}

const styles = StyleSheet.create({
    productsListContainer: {
        paddingVertical: 8,
        marginHorizontal: 8,
    },
    themeButton: {
        marginRight: 16,
    },
});
