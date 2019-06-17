import React, { Component } from "react";
import { Platform, TouchableWithoutFeedback, Text, View } from "react-native";

// PACKAGES
import {
  Input,
  Tab,
  Tabs,
  TabHeading,
  Container,
  Item,
  Button
} from "native-base";

// FILES
import Home from "../Home";
import { styles } from "./style";

export default class SignIn extends Component {
  state = {
    isActive: ""
  };

  static navigationOptions = {
    header: null
  };

  changeTab = (name, value) => {
    let obj = { name, value };
    this.setState({ isActive: name });
  };

  render() {
    const {
      header,
      container,
      welcome,
      body,
      footer,
      formContainer,
      tabContainer,
      tabWrapper
    } = styles;
    const { isActive } = this.state;

    return (
      <View style={container}>
        <View style={header}>
          <Text style={welcome}>Logo</Text>
        </View>

        {/* CARD WRAPPER WITH TABS */}

        <View style={tabWrapper}>
          <TouchableWithoutFeedback
            onPress={() => this.changeTab("signIn", !isActive)}
          >
            <Text
              style={
                isActive === "signIn"
                  ? { color: "black" }
                  : { color: "#C5C5C5" }
              }
            >
              Sign In
            </Text>
          </TouchableWithoutFeedback>

          <View
            style={{
              borderLeft: 2,
              borderColor: "#C5C5C5",
              borderWidth: 1,
              height: 40
            }}
          />
          <TouchableWithoutFeedback
            onPress={() => this.changeTab("signUp", !isActive)}
          >
            <Text
              style={
                isActive === "signUp"
                  ? { color: "black" }
                  : { color: "#C5C5C5" }
              }
            >
              Sign Up
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={body}>
          <View
            style={{
              padding: 20,
              width: "40%",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {isActive === "signIn" && (
              <Text>
                SignInSignInSignInSignInSignInSignInSignInSignInSignInSignInSignInSignInSignInSignInSignInSignInSignInSignInSignInSignInSignInSignInSignInSignIn
              </Text>
            )}

            {isActive === "signUp" && (
              <Text>
                SignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUpSignUp
              </Text>
            )}
          </View>
        </View>

        {/* FOOTER */}
        <View style={footer}>
          <Text style={welcome}>Sign IN!</Text>
        </View>
      </View>
    );
  }
}
