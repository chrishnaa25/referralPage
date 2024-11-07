import React from "react";
import { Text as RNText, StyleSheet } from "react-native";

const GlobalText = (props) => {
  return <RNText {...props} style={[styles.text, props.style]} />;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins-Regular",
  },
});

export default GlobalText;
