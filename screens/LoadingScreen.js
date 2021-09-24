import React from "react";
import { View, Text, StyleSheet } from "react-native";


import { dummyData, theme, COLORS, SIZES, FONTS, icons } from "../constants";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Text>Loading Screen...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.primary,
    alignItems: "center",
    justifyContent: "center"
  }
});
