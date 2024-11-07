import React from "react";
import { Button, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Navigate"
        onPress={() => navigation.navigate("Referral Dashboard")}
      />
    </View>
  );
}
