import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Details({ image, title, logo, address, onPress }) {
  return (
    <View style={styles.root}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <Image source={logo} />
          <Text>{title}</Text>
        </View>
        <Pressable onPress={onPress}>
          <Image source={image} />
        </Pressable>
      </View>

      <Text>{address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 16,
  },
});
