import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Tab({ image, title, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.root}>
        <Image source={image} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    width: 79,
    height: 33,

    padding: 8,
    gap: 4,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#d3cdb5",
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "500",
    textAlign: "center",
    color: "#556275",
  },
});
