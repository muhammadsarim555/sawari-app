import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

// FILES
import Header from "../../component/Header";

// PACKAGES
import CodeInput from "react-native-confirmation-code-input";

export default class PhoneVerification extends Component {
  state = {
    text1: "",
    text2: "",
    text3: "",
    text4: ""
  };
  static navigationOptions = {
    header: null
  };

  _onFulfill = code => {
    alert(code);
  };

  render() {
    const { container, childContainer } = styles;

    return (
      <View>
        <Header title="Phone Verification" content="Enter your OTP code here" />
        <View style={container}>
          <CodeInput
            ref="codeInputRef1"
            secureTextEntry
            className={"border-b"}
            space={5}
            activeColor="black"
            inactiveColor="black"
            codeInputStyle={{
              borderBottomWidth: 4,
              fontSize: 18,
              justifyContent: "center",
              alignItems: "center"
            }}
            size={30}
            inputPosition="left"
            onFulfill={code => this._onFulfill(code)}
          />

          <View style={childContainer}>
            <TouchableOpacity
              style={{
                backgroundColor: "#DDDDDD",
                borderRadius: 10,
                backgroundColor: "#FF4D4D",
                padding: 20,
                width: "40%"
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",

                  justifyContent: "center",
                  color: "white"
                }}
              >
                {" "}
                Verify Now{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "80%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white"
  },
  childContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: "70%"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    color: "#333333",
    marginBottom: 20
  },
  textInputContainer: {
    marginBottom: 20
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4
  }
});
