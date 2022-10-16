import React, { FunctionComponent } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ListRenderItemInfo,
  SectionListRenderItemInfo,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { SectionItem } from "./List";

type ListItemProps = {
  item: ListRenderItemInfo<any> | SectionItem;
  expandItemHeight: number;
  defaultItemHeight: number;
  duration?: number;
  itemStyle?: StyleProp<ViewStyle>;
  easing?: { x1: number; y1: number; x2: number; y2: number };
  onItemPress?: (isExpand: boolean) => void;
  renderListItem?: (item: ListRenderItemInfo<any>) => JSX.Element;
  renderExpandListItem?: (item: ListRenderItemInfo<any>) => JSX.Element;
  renderSectionItem?: (item: SectionItem) => JSX.Element;
};

export const ListItem: FunctionComponent<ListItemProps> = (
  props: ListItemProps
) => {
  const height = useSharedValue(props.defaultItemHeight);
  const [expanded, setExpanded] = React.useState(false);

  const style = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, {
        duration: props.duration ?? 500,
        easing: Easing.bezier(
          props.easing?.x1 ?? 0.25,
          props.easing?.y1 ?? 0.1,
          props.easing?.x2 ?? 0.25,
          props.easing?.y2 ?? 1
        ),
      }),
    };
  });

  function setItemHeight() {
    if (height.value === props.defaultItemHeight) {
      setExpanded(true);
      height.value = props.expandItemHeight;
      if (props.onItemPress) {
        props.onItemPress(true);
      }
    } else {
      setExpanded(false);
      height.value = props.defaultItemHeight;

      if (props.onItemPress) {
        props.onItemPress(false);
      }
    }
  }

  return (
    <Animated.View style={[props.itemStyle, style]}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={setItemHeight}>
        {props.renderListItem && props.renderListItem(props.item)}
        {props.renderSectionItem &&
          props.renderSectionItem(props.item as SectionItem)}
        {props.renderExpandListItem &&
          expanded &&
          props.renderExpandListItem(props.item)}
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
