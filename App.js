import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Keyboard,
  Modal,
} from "react-native";
import Tag from "./components/Tag";

export default function App() {
  const [tag, setTag] = useState({ name: "", id: "", distance: "" });
  const [tagItems, setTagItems] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleShowAddForm = () => {
    setShowAddForm(true);
  };

  const handleAddTag = () => {
    Keyboard.dismiss();
    setTagItems([...tagItems, tag]);
    setTag((prevState) => ({
      ...prevState,
      name: "",
      id: "",
      distance: "",
    }));
    setShowAddForm(!showAddForm);
  };

  const removeTag = (index) => {
    let itemsCopy = [...tagItems];
    itemsCopy.splice(index, 1);
    setTagItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Active Tags */}
      <View style={styles.tagWrapper}>
        <Text style={styles.sectionTitle}>Active Rmind Tags</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {tagItems.map((item, index) => {
            return (
              <Pressable key={index} onPress={() => removeTag(index)}>
                <Tag name={item.name} id={item.id} distance={item.distance} />
              </Pressable>
            );
          })}
        </View>
      </View>
      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showAddForm}
        onRequestClose={() => {
          setShowAddForm(!showAddForm);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="Item Name"
              style={styles.formFields}
              onChangeText={(text) =>
                setTag((prevState) => ({
                  ...prevState,
                  name: text,
                }))
              }
              value={tag.name}
            />
            <TextInput
              placeholder="Tag ID"
              style={styles.formFields}
              onChangeText={(text) =>
                setTag((prevState) => ({
                  ...prevState,
                  id: text,
                }))
              }
              value={tag.id}
            />
            <TextInput
              style={styles.formFields}
              placeholder="Max Distance (in feet)"
              keyboardType="numeric"
              onChangeText={(text) =>
                setTag((prevState) => ({
                  ...prevState,
                  distance: text,
                }))
              }
              value={tag.distance}
            />

            <Pressable
              style={styles.formSubmit}
              onPress={() => handleAddTag()}
              onLongPress={() => setShowAddForm(!showAddForm)}
            >
              <Text style={styles.textStyle}>Rmind Me!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/*       <TextInput
        style={styles.input}
        title={"Add Task"}
        value={tag}
        onChangeText={(text) => setTag(text)}
      /> */}
      <TouchableOpacity
        style={styles.input}
        onPress={() => handleShowAddForm()}
      >
        <Text style={styles.inputText}>Add Tag</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  tagWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 343,
    height: 68,
    left: 18,
    backgroundColor: "#99FED5",
    borderRadius: 29,
  },
  inputText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 17,
  },
  formSubmit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0C79FE",
    borderRadius: 29,
    marginTop: 10,
    width: 250,
    height: 50,
  },
  formFields: {
    height: 40,
    width: 343,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textStyle: {
    color: "#000",
  },
});
