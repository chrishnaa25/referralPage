import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card({ title, number }) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    width: 174,
    gap: 4,
    height: 77,
  },
  title: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    color: "#556275",
    fontFamily: "Poppins-Regular",
  },
  number: {
    fontSize: 28,
    fontWeight: "400",
    lineHeight: 30,
    fontFamily: "Poppins-Regular",
  },
});
