import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";

export default function OrderBookScreen() {
  return (
    <View style={styles.container}>
      <Text>OrderBook Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: COLORS.white,
  },
});
