import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";
import * as firebase from "firebase";

export default function ProfileScreen({ navigation }) {
  const onLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Logging Out...");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("Log out Error ", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "roboto-light", fontSize: 24 }}>
        Profile Screen
      </Text>
      <Button
        onPress={onLogOut}
        title="Learn More"
        color="red"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
});
