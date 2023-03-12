import React from 'react';
import {Image, StyleSheet} from 'react-native';
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
            <Image style={styles.image} source={require('./assets/list.png')} />
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

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
  },
});

export default App;
