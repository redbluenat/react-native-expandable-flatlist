import React, { FunctionComponent } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

type ListItemProps = {
  item: string;
  expandItemHeight: number;
  defaultItemHeight: number;
  duration?: number;
  itemStyle?: StyleProp<ViewStyle>;
  easing?: {x1: number; y1: number; x2: number; y2: number};
  children: JSX.Element;
};

export const ListItem: FunctionComponent<ListItemProps> = (props) => {
  const height = useSharedValue(props.defaultItemHeight);
  const style = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, {
        duration: props.duration ?? 500,
        easing: Easing.bezier(
            props.easing?.x1 ?? 0.25,
            props.easing?.y1 ?? 0.1,
            props.easing?.x2 ?? 0.25,
            props.easing?.y2 ?? 1),
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
    <Animated.View style={[props.itemStyle, style]}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={setItemHeight}>
        {props.children}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    width: "100%",
    height: "100%",
  },
});
