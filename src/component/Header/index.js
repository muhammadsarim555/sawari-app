import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Image
} from "react-native";

// FILES
// PACKAGES
import Icon from "react-native-vector-icons/Ionicons";

// CONSTANT
const { width, height } = Dimensions.get("window");

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
          height: "35%",
          width: "100%",
          backgroundColor: "#2B2B2B"
        }}
      >
        <StatusBar backgroundColor="#2B2B2B" barStyle="light-content" />

        <View style={{ marginLeft: width * 0.07 }}>
          {/* BACK BUTTON */}
          <TouchableOpacity style={{ color: "white", fontSize: 20 }}>
            <Icon
              name="ios-arrow-back"
              color="white"
              size={35}
              style={{ marginTop: height * 0.03 }}
            />
          </TouchableOpacity>

          {/* TITLE */}
          <View
            style={{
              marginTop: height * 0.04,
              width: "100%"
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
              {title}
            </Text>

            {/* CONTENT */}
            <View style={{ marginTop: height * 0.02 }}>
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
