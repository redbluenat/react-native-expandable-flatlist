import React, {FunctionComponent} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList
        data={['1', '2']}
        renderItem={item => <ListItem item={item.item} />}
      />
    </SafeAreaView>
  );
};

type ListItemProps = {
  item: string;
};

const ListItem: FunctionComponent<ListItemProps> = ({item}) => {
  const height = useSharedValue(100);

  const style = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  return (
    <Animated.View style={[styles.itemContainer, style]}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => (height.value = 200)}>
        <Text style={styles.itemText}>{item}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  itemText: {
    marginTop: 32,
    paddingHorizontal: 24,
    fontSize: 24,
  },
  itemContainer: {
    backgroundColor: 'yellow',
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 18,
  },
  touchableOpacity: {
    width: '100%',
    height: '100%',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
