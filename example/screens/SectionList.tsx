import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import ExpandableList from '@redbluenat/react-native-expandable-flatlist';

const SectionListDemo = () => {
  return (
    <ExpandableList
      sectionList={true}
      sectionData={[
        {
          data: ['Item list 1', 'Item list 2', 'Item list 3'],
          title: 'Section 1',
        },
        {
          data: ['Item list 1', 'Item list 2', 'Item list 3'],
          title: 'Section 2',
        },
        {
          data: ['Item list 1', 'Item list 2', 'Item list 3'],
          title: 'Section 3',
        },
      ]}
      expandItemHeight={200}
      duration={500}
      renderExpandListItem={({item}) => (
        <View style={styles.expandItemStyle}>
          <Text style={styles.expandText}>{item} expanded</Text>
        </View>
      )}
      renderSectionHeader={title => (
        <View style={styles.sectionListConfiner}>
          <View style={styles.leftItemSection}>
            <Text style={styles.itemText}>{title}</Text>
          </View>
        </View>
      )}
      sectionListHeaderStyle={styles.sectionListConfiner}
      defaultItemHeight={70}
      sectionItemStyle={styles.itemList}
      listItemStyle={styles.itemList}
      renderItem={item => {
        return (
          <View style={styles.sectionListConfiner}>
            <View style={styles.leftItemSection}>
              <Text style={styles.itemText}>{item.item}</Text>
            </View>
            <View style={styles.rightItemSection}>
              <Image
                source={require('../assets/chevron.png')}
                style={styles.icon}
              />
            </View>
          </View>
        );
      }}
    />
  );
};

export default SectionListDemo;

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
