import React, {useContext, useLayoutEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {HeaderIconButton} from "../components/HeaderIconButton";
import {AuthContext} from "../contexts/AuthContext";
import {Product} from "../components/Product";
import {UserContext} from "../contexts/UserContext";
import {useGet} from "../hooks/useGet";

export function ProductsListScreen({navigation}) {
    const {logout} = useContext(AuthContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <HeaderIconButton onPress={() => {logout()}} />
        })
    }, [navigation, logout]);

    const products = useGet('/api/products');

    function renderProduct ({item: product}) {
        return <Product product={product} />
    }

    return (
        <FlatList
            style={styles.productsList}
            contentContainerStyle={styles.productsListContainer}
            data={products}
            renderItem={renderProduct}
            keyExtractor={product => `${product.id}`}
        />
    )
}

const styles = StyleSheet.create({
    productsList: {

    },
    productsListContainer: {

    },
});
