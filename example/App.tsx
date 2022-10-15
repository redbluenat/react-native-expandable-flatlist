import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import ExpandableList from 'react-native-expandable-flatlist';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ExpandableList sectionList={false} />
    </SafeAreaView>
  );
};

export default App;
