import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

// PACKAGES
import { Input, Tab, Tabs, TabHeading, Container, Item } from "native-base";

// FILES
import Home from "../Home";
import { styles } from "./style";

export default class SignIn extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const {
      header,
      container,
      welcome,
      body,
      footer,
      formContainer,
      tabContainer
    } = styles;

    return (
      <View style={container}>
        <View style={header}>
          <Text style={welcome}>Logo</Text>
        </View>
        <View style={body}>
          <Tabs tabContainerStyle={tabContainer}>
            <Tab
              heading={
                <TabHeading>
                  <Text>Camera</Text>
                </TabHeading>
              }
            >
              <View style={formContainer}>
                <Item regular>
                  <Input placeholder="Regular Textbox" />
                </Item>
                <Item regular>
                  <Input placeholder="Regular Textbox" />
                </Item>
                <Item regular>
                  <Input placeholder="Regular Textbox" />
                </Item>
              </View>
            </Tab>

            <Tab
              heading={
                <TabHeading>
                  <Text>No Icon</Text>
                </TabHeading>
              }
            >
              <Home />
            </Tab>
          </Tabs>
        </View>

        <View style={footer}>
          <Text style={welcome}>Sign IN!</Text>
        </View>
      </View>
    );
  }
}
