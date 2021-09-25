import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";
// import  * as firebase from "firebase";
// require("firebase/firestore");
import * as firebase from "firebase";

// import apiKeys from "../config/key";
// firebase.initializeApp({
//   apiKey: apiKeys.firebaseConfig.apiKeys,
//   authDomain: apiKeys.firebaseConfig.authDomain,
//   projectId: apiKeys.firebaseConfig.projectId
// });
// firebase.initializeApp(apiKeys.firebaseConfig);

// var db = firebase.firestore();

export default function MainScreen() {
  console.log("aa");
  const db = firebase.firestore();

  const getData = () => {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      });
  };

  getData();
  return (
    <View style={styles.container}>
      <Text>Main Scrsseen</Text>
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
