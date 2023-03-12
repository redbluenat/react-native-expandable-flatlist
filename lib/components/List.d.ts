import React from "react";
import { StyleProp, ViewStyle, SectionListRenderItemInfo, ListRenderItemInfo, SectionListProps, FlatListProps } from "react-native";
export declare type SectionItem = SectionListRenderItemInfo<any, {
    title: string;
    data: any[];
}>;
declare type SectionListType = Omit<SectionListProps<any, any>, "sections">;
declare type FlatListType = Omit<FlatListProps<any>, "data">;
declare type ListItemProps = {
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
    easing?: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    };
    onItemPress?: (isExpand: boolean) => void;
    renderItem?: (item: ListRenderItemInfo<any> | SectionItem) => JSX.Element;
    renderExpandListItem?: (item: ListRenderItemInfo<any>) => JSX.Element;
    renderSectionHeader?: (title: string) => JSX.Element;
} & SectionListType & FlatListType;
declare const AnimatedSectionList: React.NamedExoticComponent<ListItemProps>;
export default AnimatedSectionList;
