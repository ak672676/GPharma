import React from "react";
import { LogBox } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as firebase from "firebase";
require("firebase/firestore");
import apiKeys from "../config/key";

import LoadingScreen from "./LoadingScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
// import MainScreen from "./MainScreen";
import MainNav from "./MainNav";

const Stack = createStackNavigator();
LogBox.ignoreLogs(['Setting a timer']);
export default function AuthNav() {

  if (!firebase.apps.length) {
    console.log("Connected with Firebase");
    firebase.initializeApp(apiKeys.firebaseConfig);
  } 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name={"Loading"}
          component={LoadingScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainNav}
          options={{ headerShown: false }}
        />
        {/*<Stack.Screen
          name="Sign In"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Dashboard"}
          component={Dashboard}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
