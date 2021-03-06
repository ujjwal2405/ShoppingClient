import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import ProductBasic from './src/Components/prodBasics'
import Camera from './src/Components/camera'
import Category from './src/Components/Category'
import Feature from './src/Components/Feature'
import Variant from './src/Components/Variant'
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
    >
      <Stack.Screen options={{headerShown: false}}  name="Product Basic" component={ProductBasic} />
      <Stack.Screen  name="Product Image" component={Camera} />
      <Stack.Screen  name="Category" component={Category} />
      <Stack.Screen  name="Feature" component={Feature} />
      <Stack.Screen  name="Variant" component={Variant} />
    </Stack.Navigator>
  );
};  

const App = () => {
  return (
   
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    
  );
};

export default App;