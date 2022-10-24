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
  SectionListProps,
  FlatListProps,
} from "react-native";
import { ListItem } from "./ItemList";

export type SectionItem = SectionListRenderItemInfo<
  any,
  {
    title: string;
    data: any[];
  }
>;

type SectionListType = Omit<SectionListProps<any, any>, "sections">;
type FlatListType = Omit<FlatListProps<any>, "data">;

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
  renderItem?: (item: ListRenderItemInfo<any> | SectionItem) => JSX.Element;
  renderExpandListItem?: (item: ListRenderItemInfo<any>) => JSX.Element;
  renderSectionHeader?: (title: string) => JSX.Element;
} & SectionListType &
  FlatListType;

const AnimatedSectionList = React.memo<ListItemProps>((props) => {
  if (props.renderItem === undefined) {
    throw new Error("renderItem must be defined");
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

  if (props.sectionList && props.sectionData) {
    return (
      <SectionList
        {...props}
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
            defaultItemHeight={props.defaultItemHeight}
            expandItemHeight={props.expandItemHeight}
            duration={props.duration}
            easing={props.easing}
            renderListItem={props.renderItem}
            renderExpandListItem={props.renderExpandListItem}
            itemStyle={props.sectionItemStyle}
          ></ListItem>
        )}
      />
    );
  }

  if (!props.sectionList && props.flatData) {
    return (
      <FlatList
        {...props}
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
            renderListItem={props.renderItem}
            renderExpandListItem={props.renderExpandListItem}
          ></ListItem>
        )}
      />
    );
  }

  return <></>;
});

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
