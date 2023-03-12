import React from "react";
import { StyleProp, ViewStyle, ListRenderItemInfo } from "react-native";
import { SectionItem } from "./List";
declare type ListItemProps = {
    item: ListRenderItemInfo<any> | SectionItem;
    expandItemHeight: number;
    defaultItemHeight: number;
    duration?: number;
    itemStyle?: StyleProp<ViewStyle>;
    easing?: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    };
    onItemPress?: (isExpand: boolean) => void;
    renderListItem?: (item: ListRenderItemInfo<any> | SectionItem) => JSX.Element;
    renderExpandListItem?: (item: ListRenderItemInfo<any>) => JSX.Element;
};
export declare const ListItem: React.NamedExoticComponent<ListItemProps>;
export {};
