import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {BASE_URL} from '../config';

export function Product({product, style, onPress}) {
  const {colors} = useTheme();
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      <View style={[styles.thumbContainer, {backgroundColor: product.color}]}>
        <Image
          style={styles.thumb}
          resizeMode={'contain'}
          source={{uri: BASE_URL + product.thumb.data.attributes.url}}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={[styles.price, {color: colors.text}]}>
          ${product.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    width: (width - 44) / 2,
    marginRight: 12,
    marginBottom: 20,
  },
  thumbContainer: {
    width: '100%',
    height: 220,
    borderRadius: 15,
    justifyContent: 'center',
  },
  thumb: {
    height: '65%',
  },
  infoContainer: {
    marginTop: 5,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    color: '#9FA5BB',
    fontFamily: 'Sofia-Pro-Medium',
  },
  price: {
    fontSize: 14,
    fontFamily: 'Sofia-Pro-Medium',
  },
});
