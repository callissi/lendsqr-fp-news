// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsList from '../screens/NewsList';
import NewsDetails from '../screens/NewsDetails';
import Signup from '../screens/signup';
import GoogleSignup from '../screens/Googlesignup';
import Login from '../screens/login';

const Stack = createStackNavigator();

const Setupnagivation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="NewsList" component={NewsList} />
        <Stack.Screen name="NewsDetails" component={NewsDetails} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="GoogleSignup" component={GoogleSignup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Setupnagivation;
