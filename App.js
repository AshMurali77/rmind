import React, { useState } from "react";
import {
  Image,
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
  const [showWarning, setShowWarning] = useState(false);
  const [current, setCurrent] = useState(0);
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
    if (index == current) {
      setShowWarning(false);
    }
    let itemsCopy = [...tagItems];
    itemsCopy.splice(index, 1);
    setTagItems(itemsCopy);
  };

  const handleWarning = (index) => {
    setShowWarning(!showWarning);
    setCurrent(index);
  };

  return (
    <View style={styles.container}>
      {/* Active Tags */}
      <View style={styles.tagWrapper}>
        <Text style={styles.sectionTitle}>Active Rmind Tags</Text>
        {showWarning && (
          <View style={styles.warning}>
            <Image source={require("./assets/warning.png")} />
            <Text style={styles.warningText}>
              {tagItems[current].name} is out of Range
            </Text>
          </View>
        )}
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {tagItems.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => removeTag(index)}
                onLongPress={() => {
                  handleWarning(index);
                }}
              >
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
            <Text style={styles.modalTitle}>Register New Tag</Text>
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
              <Text style={styles.inputText}>Rmind Me!</Text>
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
    justifyContent: "space-between",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 30,
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
    marginTop: 20,
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
    backgroundColor: "#0C79FE",
    borderRadius: 29,
    marginBottom: 35,
  },
  inputText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 17,
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 12,
    fontWeight: "600",
  },
  form: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    gap: 15,
    position: "absolute",
    width: 343,
    height: 199,
    left: 16,
    top: 69,
  },

  formSubmit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3C23D4",
    borderRadius: 29,
    marginTop: 10,
    width: 250,
    height: 50,
  },
  formFields: {
    backgroundColor: "#FFF",
    height: 55,
    width: 343,
    margin: 8,
    borderRadius: 12,
    padding: 7,
  },
  warning: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
    width: 343,
    height: 68,
    backgroundColor: "#F44837",
    borderRadius: 6,
    marginTop: 25,
    marginBottom: 0,
  },
  warningText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
