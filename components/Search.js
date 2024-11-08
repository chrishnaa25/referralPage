import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View, Text, StyleSheet, Image } from "react-native";

export default function Search() {
  return (
    <View>
      <View style={styles.searchBar}>
        <Image source={require("../assets/images/search.png")} />
        <TextInput
          style={styles.input}
          placeholder="Search 'Kia'"
          placeholderTextColor="#717171"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    height: 48,
    borderWidth: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderColor: "#d3cdb5",
    gap: 4,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  resultText: {
    marginTop: 20,
    fontSize: 16,
    color: "#333",
  },
});
