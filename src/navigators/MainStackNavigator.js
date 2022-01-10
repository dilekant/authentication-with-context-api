import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductsListScreen} from '../screens/ProductsListScreen';

const MainStack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={'ProductsList'}
        component={ProductsListScreen}
        options={{
          headerTitleAlign: 'center',
          title: 'Products List',
        }}
      />
    </MainStack.Navigator>
  );
}
