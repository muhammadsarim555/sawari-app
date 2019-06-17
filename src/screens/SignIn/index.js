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
    isActive: "signIn"
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
      tabWrapper,
      tabContent,
      formStyling
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
              style={[
                tabContent,
                isActive === "signIn"
                  ? {
                      color: "black",
                      borderBottomColor: "red",
                      borderBottomWidth: 4
                    }
                  : { color: "#C5C5C5" }
              ]}
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
              style={[
                tabContent,
                isActive === "signUp"
                  ? {
                      color: "black",
                      borderBottomColor: "red",
                      borderBottomWidth: 4
                    }
                  : { color: "#C5C5C5" }
              ]}
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
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            {isActive === "signIn" && (
              <View style={formContainer}>
                <Item regular style={formStyling}>
                  <Input placeholder="example@gmail.com" />
                </Item>
                <Item regular style={formStyling}>
                  <Input placeholder="Underline Textbox" />
                </Item>
              </View>
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
