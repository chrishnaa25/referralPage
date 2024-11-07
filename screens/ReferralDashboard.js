import React from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ReferralCard from "../components/ReferralCard";
import Label from "../components/Label";
import Card from "../components/Card";
import CombinedCard from "../components/CombinedCard";
import { useFonts } from "expo-font";

const dates = [
  "Nov 17 - Nov 24",
  "Nov 10 - Nov 17",
  "Nov 03 - Nov 10",
  "Oct 27 - Nov 03",
  "Oct 20 - Oct 27",
];

export default function ReferralDashboard() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ScrollView style={styles.root}>
      <View style={styles.referralBox}>
        <ReferralCard />
      </View>

      <View style={styles.box}>
        <Text style={styles.text}>Your Referral Stats</Text>

        <View style={{ gap: 8 }}>
          <Label title="Present Week" date="Nov 24 -Nov 31" />
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Card title="Earnings (In Rupees)" number="960" />
            <Card title="Unique Sign-Ups" number="32" />
          </View>
        </View>

        <View style={{ gap: 8 }}>
          <Label title="Present Month" date="Nov 2024" />
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Card title="Earnings (In Rupees)" number="1920" />
            <Card title="Unique Sign-Ups" number="60" />
          </View>
        </View>

        <View style={{ gap: 8 }}>
          <Label title="Previous Weeks" date="" />

          <FlatList
            data={dates}
            horizontal={true}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <CombinedCard date={item} style={styles.card} />
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  referralBox: {
    backgroundColor: "#E0EDFF",
    paddingHorizontal: 28,
    paddingVertical: 20,
  },
  box: {
    backgroundColor: "#c8dfff",
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 20,
    width: "100%", // Ensures it takes up full width
    overflow: "visible",
  },
  root: {
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 30,
    fontFamily: "Poppins-Regular",
  },
  prevWeeks: {
    flexDirection: "row",
    gap: 10,
  },
  scrollContainer: {
    paddingVertical: 10,

    paddingHorizontal: 10,
  },
  card: {
    width: 150,
    marginRight: 10,
  },
});
