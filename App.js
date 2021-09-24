import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import MainNav from "./screens/MainNav";

export default function App() {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: Platform.OS === "android" ? 25 : 0 }}
    >
      <MainNav />
    </SafeAreaView>
  );
}
