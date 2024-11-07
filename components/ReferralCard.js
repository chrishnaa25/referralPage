import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { useFonts } from "expo-font";

export default function ReferralCard() {
  const [copy, setCopy] = useState(false);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  function handleCopy() {
    setCopy(!copy);
  }

  return (
    <View style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.referText}>Your referral code</Text>
        <Text style={styles.referCode}>BW4456840</Text>
      </View>

      <View style={styles.buttonContainer}>
        {copy ? (
          <CustomButton
            title="Copied"
            image={require("../assets/images/copied.png")}
            onPress={handleCopy}
            style={{ color: "green", fontWeight: "600" }}
          />
        ) : (
          <CustomButton
            title="Copy"
            image={require("../assets/images/copy.png")}
            onPress={handleCopy}
          />
        )}
        <View style={{ borderWidth: 1, borderColor: "#c8dfff" }}></View>
        <CustomButton
          title="Share"
          image={require("../assets/images/share.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#E0EDFF",
    paddingHorizontal: 28,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,

    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "black",
    borderRadius: 8,
  },
  referText: {
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
    color: "#556275",
    lineHeight: 18,
    fontFamily: "Poppins-Regular",
  },
  referCode: {
    fontSize: 28,
    lineHeight: 33,
    fontWeight: "500",
    color: "black",
    letterSpacing: 7,
    fontFamily: "Poppins-SemiBold",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 24,
  },
  textContainer: {
    gap: 16,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: "#c8dfff",
  },
});
