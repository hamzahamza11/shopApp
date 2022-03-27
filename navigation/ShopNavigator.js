import React from "react"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import ProductDeatils from "../screens/shop/ProductDetailScreen";

const Stack = createNativeStackNavigator();

function ProductsNavigator() {
  const defaultHeaderStyle = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductOverview"
          component={ProductsOverviewScreen}
          options={{ title: 'My home' , headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
            
            
          }, headerTitleStyle: {
            fontFamily: 'open-sans-bold'
          },
          headerBackTitleStyle: {
            fontFamily: 'open-sans'
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDeatils}
          options={{ title: 'Details' , headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
            
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const ProductsNavigator =  createNativeStackNavigator(
//   {
//     ProductsOverview: ProductsOverviewScreen
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
//       },
//       headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
//     }
//   }
// );

export default  ProductsNavigator;
