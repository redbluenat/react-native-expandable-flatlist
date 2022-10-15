import React, { FunctionComponent } from "react";
import {
  EasingFunction,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import Animated, {
  EasingFunctionFactory,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

type ListItemProps = {
  item: string;
  expandItemHeight: number;
  defaultItemHeight: number;
  duration: number;
  easing?: EasingFunction | EasingFunctionFactory | undefined;
};

export const ListItem: FunctionComponent<ListItemProps> = (props) => {
  const height = useSharedValue(props.defaultItemHeight);
  const style = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, {
        duration: props.duration,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  function setItemHeight() {
    if (height.value === props.defaultItemHeight) {
      height.value = props.expandItemHeight;
    } else {
      height.value = props.defaultItemHeight;
    }
  }

  return (
    <Animated.View style={[styles.itemContainer, style]}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={setItemHeight}>
        <Text style={styles.itemText}>{props.item}</Text>
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
    backgroundColor: "yellow",
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 18,
  },
  touchableOpacity: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    fontWeight: "700",
  },
});
