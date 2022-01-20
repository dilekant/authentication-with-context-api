import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductsListScreen} from '../screens/ProductsListScreen';
import {useTheme} from '@react-navigation/native';

const MainStack = createStackNavigator();

export function MainStackNavigator() {
  const {colors} = useTheme();
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={'ProductsList'}
        component={ProductsListScreen}
        options={{
          headerTitleAlign: 'center',
          title: 'Products List',
          headerStyle: {backgroundColor: colors.background},
        }}
      />
    </MainStack.Navigator>
  );
}
