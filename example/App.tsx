import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FlatListDemo from './screens/FlatList';
import SectionListDemo from './screens/SectionList';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarIcon: () => (
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={require('./assets/list.png')}
            />
          ),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'black',
        })}>
        <Tab.Screen name="FlatListDemo" component={FlatListDemo} />
        <Tab.Screen name="SectionListDemo" component={SectionListDemo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
