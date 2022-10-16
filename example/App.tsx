import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text,
  Image,
  View,
} from 'react-native';

import ExpandableList from 'react-native-expandable-flatlist';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{backgroundColor: '#EFF0F4'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ExpandableList
        sectionList={false}
        flatData={['Item list 1', 'Item list 2', 'Item list 3']}
        expandItemHeight={200}
        renderExpandListItem={({item}) => {
          return (
            <View
              style={{
                marginLeft: 24,
                marginTop: 24,
                marginBottom: 12,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {item} expanded
              </Text>
            </View>
          );
        }}
        duration={500}
        defaultItemHeight={70}
        listItemStyle={{
          backgroundColor: 'white',
          borderRadius: 12,
          marginVertical: 8,
          marginHorizontal: 16,
        }}
        renderListItem={({item}) => (
          <View
            style={{
              justifyContent: 'center',
              marginLeft: 24,
              flexDirection: 'row',
              marginTop: 24,
              marginBottom: 12,
            }}>
            <View style={{flex: 0.9}}>
              <Text style={{fontWeight: '600'}}>{item}</Text>
            </View>
            <View style={{flex: 0.1}}>
              <Image
                source={require('./assets/chevron.png')}
                style={{width: 20, height: 20}}
              />
            </View>
          </View>
        )}
      />

      <ExpandableList
        sectionList={true}
        sectionData={[
          {data: ['Item list 1', 'Item list 2', 'Item list 3'], title: 'Hey'},
        ]}
        expandItemHeight={200}
        duration={500}
        renderExpandListItem={({item}) => {
          return (
            <View
              style={{
                marginLeft: 24,
                marginTop: 24,
                marginBottom: 12,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {item} expanded
              </Text>
            </View>
          );
        }}
        defaultItemHeight={70}
        sectionItemStyle={{
          backgroundColor: 'white',
          borderRadius: 12,
          marginVertical: 8,
          marginHorizontal: 16,
        }}
        listItemStyle={{
          backgroundColor: 'white',
          borderRadius: 12,
          marginVertical: 8,
          marginHorizontal: 16,
        }}
        renderSectionItem={item => {
          return (
            <View
              style={{
                justifyContent: 'center',
                marginLeft: 24,
                flexDirection: 'row',
                marginTop: 24,
                marginBottom: 12,
              }}>
              <View style={{flex: 0.9}}>
                <Text style={{fontWeight: '600'}}>{item.item}</Text>
              </View>
              <View style={{flex: 0.1}}>
                <Image
                  source={require('./assets/chevron.png')}
                  style={{width: 20, height: 20}}
                />
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default App;
