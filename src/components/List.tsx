import React, { FunctionComponent } from "react";
import { SectionList, Text, StyleSheet, FlatList } from "react-native";
import { ListItem } from "./ItemList";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

const FLAT_DATA = ["French Fries", "Onion Rings", "Fried Shrimps"];

type ListItemProps = {
  sectionList: boolean;
};

const AnimatedSectionList: FunctionComponent<ListItemProps> = (props) => {
  return (
    <>
      {props.sectionList ? (
        <SectionList
          sections={DATA}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.itemText}>{title}</Text>
          )}
          renderItem={(item) => (
            <ListItem
              item={item.item}
              defaultItemHeight={100}
              expandItemHeight={200}
              duration={500}
            />
          )}
        />
      ) : (
        <FlatList
          data={FLAT_DATA}
          renderItem={(item) => (
            <ListItem
              item={item.item}
              defaultItemHeight={100}
              expandItemHeight={200}
              duration={500}
            />
          )}
        />
      )}
    </>
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
export default AnimatedSectionList;
