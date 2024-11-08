import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CusButton({ title, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.root}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    backgroundColor: "#154fbb",
    paddingVertical: 18,
    paddingHorizontal: 10,
    width: "100%",
    height: 56,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 17,
  },
});
