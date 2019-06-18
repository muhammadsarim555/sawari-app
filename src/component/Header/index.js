import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  StatusBar
} from "react-native";

// FILES
// PACKAGES
import Icon from "react-native-vector-icons/Ionicons";

export default class Header extends Component {
  static defaultProps = {
    title: "",
    content: ""
  };

  render() {
    let { title, content } = this.props;

    return (
      <View
        style={{
          height: "20%",
          width: "100%",
          backgroundColor: "#2B2B2B"
        }}
      >
        <StatusBar backgroundColor="#2B2B2B" barStyle="light-content" />

        <View style={{ marginLeft: 30 }}>
          {/* BACK BUTTON */}
          <TouchableOpacity style={{ color: "white", fontSize: 20 }}>
            <Icon name="ios-arrow-back" color="white" size={35} />
          </TouchableOpacity>

          {/* TITLE */}
          <View style={{ marginLeft: 5, marginTop: 20 }}>
            <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
              {title}
            </Text>

            {/* CONTENT */}
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 18, color: "white" }}>{content}</Text>
            </View>
          </View>
        </View>
      </View>
    );
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
