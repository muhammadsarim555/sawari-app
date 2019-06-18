import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

// FILES
import Navigation from "./src/navigations/navigation";

export default class PhoneVerification extends Component {
  render() {
    return <View />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
