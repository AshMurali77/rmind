import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Tag = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemDistance}>
          Max Distance: {props.distance} Feet
        </Text>

        <Text style={styles.itemName}>{props.name}</Text>
        <Text style={styles.itemId}>{props.id}</Text>
      </View>
      <Text style={styles.location}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#6B83F3",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
    width: 343,
    height: 70,
  },
  itemLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 0,
    gap: 2,
  },
  itemName: { alignItems: "center", fontWeight: "bold", fontSize: "18" },
  location: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "18",
  },
});

export default Tag;
