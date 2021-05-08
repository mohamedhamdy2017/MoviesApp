import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Movies, MovieDetails} from '../Screens';

const Stacks = createStackNavigator();

const StacksNavigator: React.FC = () => {
  return (
    <Stacks.Navigator headerMode="none">
      <Stacks.Screen name={'Movies'} component={Movies}/>
      <Stacks.Screen name={'MovieDetails'} component={MovieDetails} />
    </Stacks.Navigator>
  );
};

export default StacksNavigator;
