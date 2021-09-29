import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";
// import  * as firebase from "firebase";
// require("firebase/firestore");
import * as firebase from "firebase";
import PostComponent from "../components/PostComponent";

// import apiKeys from "../config/key";
// firebase.initializeApp({
//   apiKey: apiKeys.firebaseConfig.apiKeys,
//   authDomain: apiKeys.firebaseConfig.authDomain,
//   projectId: apiKeys.firebaseConfig.projectId
// });
// firebase.initializeApp(apiKeys.firebaseConfig);

// var db = firebase.firestore();

const posts = [
  {
    id: "khkuhkhguuiuiyiuuuih",
    imageUrl: "https://ak.picdn.net/shutterstock/videos/17865847/thumb/5.jpg",
    description: "Buy Artistozyme syrup at 50% off 🎉🎊",
  },
  {
    id: "khkuhkhgdduuiuiyiuuuih",
    imageUrl: "http://avancederma.com/wp-content/uploads/2018/09/50-off.png",
    description: "Buy Rablet 20 tablet at 30% off 🎉🎁",
  },
  {
    id: "khkuhkhguuiuiyissuuuih",
    imageUrl: "https://ak.picdn.net/shutterstock/videos/17865847/thumb/5.jpg",
    description: "Buy Artistozyme syrup at 50% off 🎉",
  },
  {
    id: "khkuhkhgdduuiuaaiyiuuuih",
    imageUrl: "http://avancederma.com/wp-content/uploads/2018/09/50-off.png",
    description: "Buy Rablet 20 tablet at 30% off 🎉",
  },
];

export default function MainScreen() {
  const db = firebase.firestore();

  const getData = () => {
    // db.collection("users")
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       console.log(`${doc.id} => ${doc.data()}`);
    //     });
    //   });
    console.log("a");
  };
  // created: firebase.firestore.FieldValue.serverTimestamp()
  getData();
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={(offer) => <PostComponent post={offer.item} />}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: COLORS.gray,
  },
});
