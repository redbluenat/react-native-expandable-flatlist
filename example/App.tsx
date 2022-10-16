import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text,
  Image,
  View,
  StyleSheet,
} from 'react-native';

import ExpandableList from 'react-native-expandable-flatlist';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
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
        listItemStyle={styles.itemList}
        renderListItem={({item}) => (
          <View style={styles.itemListContainer}>
            <View style={styles.leftItemSection}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
            <View style={styles.rightItemSection}>
              <Image
                source={require('./assets/chevron.png')}
                style={styles.icon}
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
        sectionItemStyle={styles.itemList}
        listItemStyle={styles.itemList}
        renderSectionItem={item => {
          return (
            <View style={styles.sectionListConfiner}>
              <View style={styles.leftItemSection}>
                <Text style={styles.itemText}>{item.item}</Text>
              </View>
              <View style={styles.rightItemSection}>
                <Image
                  source={require('./assets/chevron.png')}
                  style={styles.icon}
                />
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#EFF0F4'},
  itemList: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  sectionListConfiner: {
    justifyContent: 'center',
    marginLeft: 24,
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 12,
  },
  itemListContainer: {
    justifyContent: 'center',
    marginLeft: 24,
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 12,
  },
  leftItemSection: {flex: 0.9},
  rightItemSection: {flex: 0.1},
  icon: {width: 20, height: 20},
  itemText: {fontWeight: '600'},
});

export default App;
