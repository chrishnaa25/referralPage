import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import { useFonts } from "expo-font";

export default function CombinedCard({ date, style }) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={[styles.root, style]}>
      <Text style={styles.date}>{date}</Text>

      <Text style={styles.title}>Earning (In Rupees)</Text>
      <Text style={styles.number}>1920</Text>

      <Text style={styles.title}>Unique Sign-Ups</Text>
      <Text style={styles.number}>60</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    gap: 4,
    width: 170,
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
  date: {
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 15,
    fontFamily: "Poppins-Regular",
  },
});
