import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Input({ placeholder, value, onChangeText, multiline }) {
  return (
    <TextInput
      style={styles.root}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
    />
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: 53,
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#d3cdb5",
    backgroundColor: "white",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
  },
});
