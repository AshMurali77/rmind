import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Tag = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemId}>ID: {props.id}</Text>
        <Text style={styles.itemName}>{props.name}</Text>
        <Text style={styles.itemDistance}>
          Max Distance: {props.distance} Feet
        </Text>
      </View>
      <View style={styles.location}>
        <Image source={require("../assets/favicon.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
    width: 343,
    height: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  itemId: { fontStyle: "italic" },
  location: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: "thick",
    borderLeftColor: "#000",
  },
  locationText: {
    fontWeight: "bold",
    fontSize: "18",
  },
});

export default Tag;
