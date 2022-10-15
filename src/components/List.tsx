import React, { FunctionComponent } from "react";
import {
  SectionList,
  Text,
  StyleSheet,
  FlatList,
  EasingFunction,
  StyleProp,
  ViewStyle,
  SectionListRenderItemInfo,
  ListRenderItemInfo,
} from "react-native";
import { EasingFunctionFactory } from "react-native-reanimated";
import { ListItem } from "./ItemList";

type ListItemProps = {
  sectionList: boolean;
  sectionListHeaderStyle?: StyleProp<ViewStyle>;
  sectionData?: {
    title: string;
    data: any[];
  }[];
  flatData?: any[];
  listItemStyle?: StyleProp<ViewStyle>;
  expandItemHeight: number;
  defaultItemHeight: number;
  duration?: number;
  sectionItemStyle?: StyleProp<ViewStyle>;
  easing?: {x1: number; y1: number; x2: number; y2: number};
  renderSectionItem?: (
    item: SectionListRenderItemInfo<
      any,
      {
        title: string;
        data: any[];
      }
    >
  ) => JSX.Element;
  renderListItem?: (item: ListRenderItemInfo<any>) => JSX.Element;
};

const AnimatedSectionList: FunctionComponent<ListItemProps> = (props) => {
  if (
    (props.sectionList && props.renderSectionItem === undefined) ||
    (!props.sectionList && props.renderListItem === undefined)
  ) {
    throw new Error("renderSectionItem or renderListItem must be defined");
  }

  if (
    (props.sectionList && props.sectionData === undefined) ||
    (!props.sectionList && props.flatData === undefined)
  ) {
    throw new Error("sectionData or flatData must be defined");
  }

  if (
    props.sectionList &&
    props.sectionData &&
    props.renderSectionItem !== undefined
  ) {
    return (
      <SectionList
        sections={props.sectionData}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={[styles.itemText, props.sectionListHeaderStyle]}>
            {title}
          </Text>
        )}
        renderItem={(item) => (
          <ListItem
            item={item.item}
            defaultItemHeight={props.defaultItemHeight}
            expandItemHeight={props.expandItemHeight}
            duration={props.duration}
            easing={props.easing}
            itemStyle={props.sectionItemStyle}
          >
            {props.renderSectionItem(item)}
          </ListItem>
        )}
      />
    );
  }

  if (
    !props.sectionList &&
    props.flatData &&
    props.renderListItem !== undefined
  ) {
    return (
      <FlatList
        data={props.flatData}
        renderItem={(item) => (
          <ListItem
            item={item.item}
            defaultItemHeight={props.defaultItemHeight}
            expandItemHeight={props.expandItemHeight}
            duration={props.duration}
            itemStyle={props.listItemStyle}
            easing={props.easing}
          >
            {props.renderListItem(item)}
          </ListItem>
        )}
      />
    );
  }

  return <> </>;
};

const styles = StyleSheet.create({
  itemText: {
    fontSize: 24,
  },
  touchableOpacity: {
    width: "100%",
    height: "100%",
  },
});
export default AnimatedSectionList;
