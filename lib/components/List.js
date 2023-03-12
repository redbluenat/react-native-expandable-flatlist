"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ItemList_1 = require("./ItemList");
const AnimatedSectionList = react_1.default.memo((props) => {
    if (props.renderItem === undefined) {
        throw new Error("renderItem must be defined");
    }
    if ((props.sectionList && props.sectionData === undefined) ||
        (!props.sectionList && props.flatData === undefined)) {
        throw new Error("sectionData or flatData must be defined");
    }
    if (props.renderExpandListItem === undefined) {
        throw new Error("renderExpandListItem must be defined");
    }
    if (props.sectionList && props.sectionData) {
        return (react_1.default.createElement(react_native_1.SectionList, Object.assign({}, props, { sections: props.sectionData, renderSectionHeader: (item) => props.renderSectionHeader ? (props.renderSectionHeader(item.section.title)) : (react_1.default.createElement(react_native_1.Text, { style: [styles.itemText, props.sectionListHeaderStyle] }, item.section.title)), renderItem: (item) => (react_1.default.createElement(ItemList_1.ListItem, { item: item, onItemPress: props.onItemPress, defaultItemHeight: props.defaultItemHeight, expandItemHeight: props.expandItemHeight, duration: props.duration, easing: props.easing, renderListItem: props.renderItem, renderExpandListItem: props.renderExpandListItem, itemStyle: props.sectionItemStyle })) })));
    }
    if (!props.sectionList && props.flatData) {
        return (react_1.default.createElement(react_native_1.FlatList, Object.assign({}, props, { data: props.flatData, renderItem: (item) => (react_1.default.createElement(ItemList_1.ListItem, { item: item, defaultItemHeight: props.defaultItemHeight, expandItemHeight: props.expandItemHeight, duration: props.duration, onItemPress: props.onItemPress, itemStyle: props.listItemStyle, easing: props.easing, renderListItem: props.renderItem, renderExpandListItem: props.renderExpandListItem })) })));
    }
    return react_1.default.createElement(react_1.default.Fragment, null);
});
const styles = react_native_1.StyleSheet.create({
    itemText: {
        fontSize: 24,
    },
    touchableOpacity: {
        width: "100%",
        height: "100%",
    },
});
exports.default = AnimatedSectionList;
