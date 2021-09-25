import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ToastAndroid
} from "react-native";
import { Input, Button } from "react-native-elements";
import apiKeys from "../config/key";
// import Icon from "react-native-vector-icons/FontAwesome";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";

import * as firebase from "firebase";
// import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { COLORS, SIZES, FONTS, icons } from "../constants";

export default function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const recaptchaVerifier = React.useRef(null);
  const attemptInvisibleVerification = false;

  useEffect(() => {
    if (firebase.auth().currentUser) {
      navigation.navigate("Main");
    }
  }, []);

  const sendVerification = async () => {
    console.log(phoneNumber);
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        "+91" + phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      //   showMessage({
      //     text: "Verification code has been sent to your phone.",
      //   });
      console.log("Verification code has been sent to your phone.");
    } catch (err) {
      //   showMessage({ text: `Error: ${err.message}`, color: "red" });
      console.log(err);
    }
  };

  const confirmCode = async () => {
    try {
      // const credential = firebase.auth.PhoneAuthProvider.credential(
      //   verificationId,
      //   verificationCode
      // );

      // const timeNow = new Date().getTime();
      // await firebase.auth().signInWithCredential(credential);
      // const currentUser = firebase.auth().currentUser.toJSON();

      // if (timeNow < currentUser.createdAt) {

      if (true) {
        console.log("Craeted Now");
        //Create a new User in DB
        const uid = "shtiUKz57hX3WTcZiXGWzCY676y2";
        const number = "+917352916131";
        const db = firebase.firestore();
        db.collection("users")
          .doc(uid)
          .set(
            {
              phone: number,
              id: uid,

            },
            { merge: true }
          )
          .then(() => {
            ToastAndroid.show("Hello", ToastAndroid.SHORT)
            console.log("Added");
          })
          .catch((error) => {
            console.log(error);
          });
        // console.log(currentUser);
      } else {
        console.log("Older User");
      }
      console.log("Phone authentication successful 👍");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ height: "30%", justifyContent: "center" }}>
        <Image source={icons.brand_logo} />
      </View>
      <View style={styles.formContainer}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={apiKeys.firebaseConfig}
          attemptInvisibleVerification={attemptInvisibleVerification}
          title="Prove you are human!"
          cancelLabel="Close"
        />
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: SIZES.h1, color: COLORS.primary }}>
            Login
          </Text>
        </View>
        <Input
          placeholder="Phone Number"
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          autoCompleteType="tel"
          leftIcon={{
            type: "font-awesome",
            name: "phone",
            color: COLORS.primary,
          }}
          maxLength={10}
          inputContainerStyle={{ borderColor: COLORS.primary }}
        />

        <Button
          title="Send OTP"
          onPress={sendVerification}
          type="outline"
          disabled={!phoneNumber}
        />

        <Input
          placeholder="Confirmation Code"
          onChangeText={setVerificationCode}
          keyboardType="number-pad"
          leftIcon={{
            type: "font-awesome",
            name: "mobile",
            color: COLORS.primary,
          }}
          maxLength={6}
          inputContainerStyle={{ borderColor: COLORS.primary }}
        />

        <Button
          backgroundColor="red"
          buttonStyle={{ borderColor: "red" }}
          title="Verify"
          onPress={confirmCode}
          type="outline"
          disabled={!verificationCode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  formContainer: {
    flex: 1,
    justifyContent: "flex-start",
    width: "70%",
  },
});
