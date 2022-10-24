import React from 'react';
import {SafeAreaView, Text, View, Image, StyleSheet} from 'react-native';

import ExpandableList from 'react-native-expandable-flatlist';

const LIST_ITEMS = 100;

const FlatListDemo = () => {
  function generateData() {
    let data = [];
    for (let i = 0; i < LIST_ITEMS; i++) {
      data.push('Item list ' + i);
    }
    return data;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ExpandableList
        sectionList={false}
        flatData={generateData()}
        expandItemHeight={200}
        initialNumToRender={10}
        renderExpandListItem={({item}) => (
          <View style={styles.expandItemStyle}>
            <Text style={styles.expandText}>{item} expanded</Text>
          </View>
        )}
        duration={500}
        defaultItemHeight={70}
        listItemStyle={styles.itemList}
        renderItem={({item}) => (
          <View style={styles.itemListContainer}>
            <View style={styles.leftItemSection}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
            <View style={styles.rightItemSection}>
              <Image
                source={require('../assets/chevron.png')}
                style={styles.icon}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default FlatListDemo;

const styles = StyleSheet.create({
  container: {backgroundColor: '#EFF0F4', flex: 1},
  scrollView: {
    height: '100%',
  },
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
  expandItemStyle: {
    marginLeft: 24,
    marginTop: 24,
    marginBottom: 12,
  },
  expandText: {fontSize: 20, fontWeight: 'bold'},
});
