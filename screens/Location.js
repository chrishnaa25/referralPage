import React, { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Search from "../components/Search";
import CusButton from "../components/CusButton";
import { Ionicons } from "@expo/vector-icons";

export default function Location({ navigation }) {
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
    <ScrollView style={styles.root}>
      <View style={{ gap: 20 }}>
        <Search />
        <Image
          source={require("../assets/images/image 45.png")}
          style={{ width: "100%", borderRadius: 12, height: 500 }}
        />
        <CusButton
          title="Save & Add Full Addres"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f2f4f7",
    padding: 20,
  },
});
