import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StacksNavigator from './Stack';

const RootStack = createStackNavigator();

const RootNavigation: React.FC = () => {
  return (
    <RootStack.Navigator initialRouteName="Main" headerMode="none">
      <RootStack.Screen name={'Main'} component={StacksNavigator} />
    </RootStack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
);
