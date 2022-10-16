import React, { FunctionComponent } from "react";
import {
  SectionList,
  Text,
  StyleSheet,
  FlatList,
  StyleProp,
  ViewStyle,
  SectionListRenderItemInfo,
  ListRenderItemInfo,
  SectionListData,
} from "react-native";
import { ListItem } from "./ItemList";

export type SectionItem = SectionListRenderItemInfo<
  any,
  {
    title: string;
    data: any[];
  }
>;

type ListItemProps = {
  sectionList: boolean;
  sectionData?: {
    title: string;
    data: any[];
  }[];
  flatData?: any[];
  sectionItemStyle?: StyleProp<ViewStyle>;
  listItemStyle?: StyleProp<ViewStyle>;
  sectionListHeaderStyle?: StyleProp<ViewStyle>;
  expandItemHeight: number;
  defaultItemHeight: number;
  duration?: number;
  easing?: { x1: number; y1: number; x2: number; y2: number };
  onItemPress?: (isExpand: boolean) => void;
  renderSectionItem?: (item: SectionItem) => JSX.Element;
  renderListItem?: (item: ListRenderItemInfo<any>) => JSX.Element;
  renderExpandListItem?: (item: ListRenderItemInfo<any>) => JSX.Element;
  renderSectionHeader?: (title: string) => JSX.Element;
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

  if (props.renderExpandListItem === undefined) {
    throw new Error("renderExpandListItem must be defined");
  }

  if (
    props.sectionList &&
    props.sectionData &&
    props.renderSectionItem !== undefined
  ) {
    return (
      <SectionList
        sections={props.sectionData}
        renderSectionHeader={(item) =>
          props.renderSectionHeader ? (
            props.renderSectionHeader(item.section.title)
          ) : (
            <Text style={[styles.itemText, props.sectionListHeaderStyle]}>
              {item.section.title}
            </Text>
          )
        }
        renderItem={(item) => (
          <ListItem
            item={item}
            onItemPress={props.onItemPress}
            renderSectionItem={props.renderSectionItem}
            defaultItemHeight={props.defaultItemHeight}
            expandItemHeight={props.expandItemHeight}
            duration={props.duration}
            easing={props.easing}
            renderListItem={props.renderListItem}
            renderExpandListItem={props.renderExpandListItem}
            itemStyle={props.sectionItemStyle}
          ></ListItem>
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
            item={item}
            defaultItemHeight={props.defaultItemHeight}
            expandItemHeight={props.expandItemHeight}
            duration={props.duration}
            onItemPress={props.onItemPress}
            itemStyle={props.listItemStyle}
            easing={props.easing}
            renderListItem={props.renderListItem}
            renderExpandListItem={props.renderExpandListItem}
          ></ListItem>
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
