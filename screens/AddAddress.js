import { Ionicons } from "@expo/vector-icons";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Tab from "../components/Tab";
import Input from "../components/Input";
import InputComp from "../components/InputComp";
import CusButton from "../components/CusButton";

export default function AddAddress({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Addresses",
      headerStyle: {
        backgroundColor: "#f2f4f7",
        flex: 1,
      },
      headerLeft: () => (
        <Ionicons
          name="chevron-back-outline"
          size={25}
          color="#716a54"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.root}>
      <View style={{ gap: 28 }}>
        <View style={{ gap: 8 }}>
          <Text>Addres Type</Text>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Tab
              image={require("../assets/images/homeee.png")}
              onPress={() => {}}
              title="Home"
            />
            <Tab
              title="Office"
              image={require("../assets/images/office.png")}
              onPress={() => {}}
            />
            <Tab
              title="Others"
              image={require("../assets/images/others.png")}
              onPress={() => {}}
            />
          </View>
        </View>
        <InputComp />
      </View>
      <CusButton title="Add Address" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    gap: 20,
    justifyContent: "space-between",
  },
});
