import { Ionicons } from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Search from "../components/Search";
import Details from "../components/Details";

export default function Addresses({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Addresses",
      headerStyle: {
        backgroundColor: "#f2f4f7",
        flex: 1,
      },
      headerLeft: () => (
        <Ionicons name="chevron-back-outline" size={25} color="#716a54" />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.root}>
      <Search />

      <Pressable onPress={() => navigation.navigate("Select Location")}>
        <View style={styles.addContainer}>
          <Image source={require("../assets/images/addaddress.png")} />
          <Text style={styles.addText}>Add New Address</Text>
        </View>
      </Pressable>

      <View>
        <Details
          logo={require("../assets/images/home.png")}
          title="Home"
          address="Door No: 11-15-52/2, Nadella vari street, Anand NagarGandhi Kukatpally, Pin: 522265"
          image={require("../assets/images/edit.png")}
          onPress={() => navigation.navigate("Add Address")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f2f4f7",
    padding: 20,
    gap: 20,
  },
  addContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    height: 52,
  },
  addText: {
    color: "#184ba5",
  },
});
