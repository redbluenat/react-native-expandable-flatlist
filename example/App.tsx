import React from 'react';
import {
  Easing,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text,
  View,
} from 'react-native';

import ExpandableList from 'react-native-expandable-flatlist';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ExpandableList
        sectionList={false}
        flatData={['a', 'b', 'c']}
        expandItemHeight={200}
        duration={500}
        defaultItemHeight={50}
        listItemStyle={{backgroundColor: 'red', marginTop: 10}}
        renderListItem={({item}) => (
          <View style={{}}>
            <Text>{item}</Text>
          </View>
        )}
      />

      <ExpandableList
        sectionList={true}
        sectionData={[{data: ['a', 'b', 'c'], title: 'Hey'}]}
        expandItemHeight={200}
        duration={500}
        defaultItemHeight={50}
        sectionItemStyle={{backgroundColor: 'blue', marginTop: 10}}
        listItemStyle={{backgroundColor: 'red', marginTop: 10}}
        renderSectionItem={({item}) => (
          <View style={{}}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;
