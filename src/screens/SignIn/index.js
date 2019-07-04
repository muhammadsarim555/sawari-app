import React, { Component } from "react";
import {
  Platform,
  Image,
  TouchableWithoutFeedback,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
  StyleSheet
} from "react-native";

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
import PhoneInput from "react-native-phone-input";
import Swipeable from "react-native-gesture-handler/Swipeable";

// FILES
import Home from "../Home";
import { styles } from "./style";
import Logo from "../../assets/logo/logo.png";
import { Colors } from "../../constant/appColor";

// CONSTANT
const { width, height } = Dimensions.get("window");

export default class SignIn extends Component {
  state = {
    isActive: "signUp",
    isKeyboard: false
  };

  static navigationOptions = {
    header: null
  };

  onPressFlag() {
    this.myCountryPicker.open();
  }

  selectCountry(country) {
    this.phone.selectCountry(country.iso2);
  }

  changeTab = (name, value) => {
    let obj = { name, value };
    this.setState({ isActive: name });
  };

  renderLeftActions = (progress, dragX) => {
    // const trans = dragX.interpolate({
    //   inputRange: [0, 50, 100, 101],
    //   outputRange: [-20, 0, 0, 1]
    // });
    alert("sdfa");
  };

  render() {
    // const {
    //   header,
    //   container,
    //   welcome,
    //   body,
    //   footer,
    //   formContainer,
    //   tabContainer,
    //   tabWrapper,
    //   tabContent,
    //   isKeyboard,
    //   formStyling
    // } = styles;
    const { tabContainerStyle1, textInput } = styles;
    const { isActive } = this.state;

    return (
      <View style={styles.root}>
        <ScrollView
          contentContainerStyle={{
            flex: 1
          }}
        >
          {/* <View style={styles.box1} /> */}

          <View
            style={{
              height: "40%",
              backgroundColor: Colors.backgroundColor,
              justifyContent: "center"
              // alignItems: "center"
            }}
          >
            <Image
              source={{
                uri:
                  "data:image/png;base64,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"
              }}
              style={{
                width: 100,
                height: 100,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 10
              }}
            />
            <Swipeable renderLeftActions={() => this.renderLeftActions}>
              <Text>"hello"</Text>
            </Swipeable>
          </View>

          {/* CARD WRAPPER WITH TABS */}

          <View
            style={{
              backgroundColor: "white",
              height: height * 0.1,
              width: "85%",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              alignSelf: "center",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomWidth: 2,
              borderColor: "#C5C5C5",
              shadowColor: "blue",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 12,
              shadowRadius: 2,
              elevation: 3
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => this.changeTab("signUp", !isActive)}
            >
              <Text
                style={[
                  tabContainerStyle1,
                  isActive === "signUp"
                    ? {
                        color: "black",
                        borderBottomColor: "#FF4D4D",
                        borderBottomWidth: 4
                      }
                    : { color: "#C5C5C5" }
                ]}
              >
                Sign up
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
              onPress={() => this.changeTab("signIn", !isActive)}
            >
              <Text
                style={[
                  { fontSize: width * 0.06, fontWeight: "bold" },
                  isActive === "signIn"
                    ? {
                        color: "black",
                        borderBottomColor: "#FF4D4D",
                        borderBottomWidth: 4
                      }
                    : { color: "#C5C5C5" }
                ]}
              >
                Sign in
              </Text>
            </TouchableWithoutFeedback>
          </View>

          <View
            style={{
              height: "40%",
              backgroundColor: "white",
              width: "85%",
              justifyContent: "space-between",
              alignSelf: "center",
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              shadowColor: "blue",
              shadowOffset: { width: 5, height: 5 },
              shadowOpacity: 10,
              shadowRadius: 5,
              elevation: 3
            }}
          >
            {isActive === "signUp" && (
              <ScrollView
                contentContainerStyle={{
                  flexGrow: 1,
                  justifyContent: "space-around"
                }}
                keyboardShouldPersistTaps={"always"}
                automaticallyAdjustContentInsets={false}
              >
                <TextInput
                  style={textInput}
                  placeholder={"example@gmail.com"}
                  onChangeText={text => this.setState({ text })}
                />
                <TextInput
                  style={textInput}
                  placeholder={"Add Your Text Here"}
                  onChangeText={text => this.setState({ text })}
                />

                <TouchableOpacity
                  style={{
                    backgroundColor: "#DDDDDD",
                    borderRadius: 10,
                    backgroundColor: "#FF4D4D",
                    height: height * 0.08,
                    width: "90%",
                    alignSelf: "center"
                  }}
                  onPress={() =>
                    this.props.navigation.navigate("PhoneVerification")
                  }
                >
                  <Text
                    style={{
                      fontSize: width * 0.05,
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                      lineHeight: height * 0.08
                    }}
                  >
                    {" "}
                    Sign Up{" "}
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            )}

            {isActive === "signIn" && (
              <ScrollView
                contentContainerStyle={{
                  flexGrow: 1,
                  justifyContent: "space-around"
                }}
                keyboardShouldPersistTaps={"always"}
                automaticallyAdjustContentInsets={false}
              >
                <TextInput
                  style={textInput}
                  placeholder={"0317-2142662"}
                  keyboardType={"numeric"}
                  onChangeText={text => this.setState({ text })}
                />

                <TouchableOpacity
                  style={{
                    backgroundColor: "#DDDDDD",
                    borderRadius: 10,
                    backgroundColor: "#FF4D4D",
                    height: height * 0.08,
                    width: "90%",
                    alignSelf: "center"
                  }}
                  onPress={() =>
                    this.props.navigation.navigate("PhoneVerification")
                  }
                >
                  <Text
                    style={{
                      fontSize: width * 0.05,
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                      lineHeight: height * 0.08
                    }}
                  >
                    {" "}
                    Sign in{" "}
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}
