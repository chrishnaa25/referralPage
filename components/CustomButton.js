import { useFonts } from "expo-font";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function CustomButton({ image, title, style, onPress }) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Pressable onPress={onPress}>
      <View style={styles.root}>
        <Image source={image} style={style} />
        <Text style={[styles.text, style]}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  text: {
    color: "#184b5a",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: "Poppins-Regular",
  },
});
