import React, { useState } from "react";
import { View } from "react-native";
import Input from "./Input";
import { StyleSheet } from "react-native";

export default function InputComp() {
  const [hno, setHno] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");

  return (
    <View style={styles.root}>
      <Input
        placeholder="House / Flat / Floor / Block Number"
        value={hno}
        onChangeText={setHno}
      />
      <Input
        placeholder="Appartment / Road / Area"
        value={area}
        onChangeText={setArea}
      />
      <Input
        placeholder="Landmark / Directions To Reach (Optional)"
        value={landmark}
        onChangeText={setLandmark}
        multiline={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: 20,
  },
});
