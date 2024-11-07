import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Label({ title, date }) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 21,
    fontFamily: "Poppins-Regular",
  },
  date: {
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 15,
    fontFamily: "Poppins-Regular",
  },
});
