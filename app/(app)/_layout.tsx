import { Redirect } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function RootLayout() {
  if (true) {
    return <Redirect href="/onboarding" />
  }
  return (
    <View>
      <Text>Root Layout</Text>
    </View>
  )
}