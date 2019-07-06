import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

// FILES
import Header from "../../component/Header";
import { styles } from "./style";

// PACKAGES
import CodeInput from "react-native-confirmation-code-input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
    const {
      container,
      childContainer,
      verifyButton,
      verifyButtonText,
      otpInput
    } = styles;

    return (
      <KeyboardAwareScrollView extraHeight={0} extraScrollHeight={0}>
        <Header title="Phone Verification" content="Enter your OTP code here" />
        <View style={container}>
          <CodeInput
            ref="codeInputRef1"
            secureTextEntry
            className={"border-b"}
            space={5}
            activeColor="black"
            inactiveColor="black"
            codeInputStyle={otpInput}
            autoFocus={false}
            size={30}
            inputPosition="left"
            onFulfill={code => this._onFulfill(code)}
          />

          <View style={childContainer}>
            <TouchableOpacity
              style={verifyButton}
              onPress={() => this.props.navigation.navigate("PickUp")}
            >
              <Text style={verifyButtonText}> Verify Now </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
