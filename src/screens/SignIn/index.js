import React, { Component } from "react";
import {
  Platform,
  Image,
  TouchableWithoutFeedback,
  Text,
  View,
  StatusBar,
  TouchableOpacity
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

// FILES
import Home from "../Home";
import { styles } from "./style";
import Logo from "../../assets/logo/logo.png";

export default class SignIn extends Component {
  state = {
    isActive: "signUp"
  };

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.setState({
      pickerData: this.phone.getPickerData()
    });
  }

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
        <StatusBar backgroundColor="#2B2B2B" barStyle="light-content" />
        <View style={header}>
          <Image
            source={{
              uri:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAolBMVEUAAADlPTLpPjNSFRHcOjBOFRHwQDTtPzTUOC6qLST////YOS9ZWFgLAABWFxI4DwyfKiLBMypAEQ2dmpmFg4NIEw8cBwb29fWPJh/CJBfLNiz7QzcMFBRqaWmnpKPKysqmrK3i4eFEQkG6uLhmGhXt6ekmJiWQjY3T09NycXFzHhmzMCdNTEzHwsIaGRl8e3uVFAZ9IRsjCQcpCggRHh46Nzf8UsULAAACDElEQVRYhe3YXXOiMBQG4JNTTAIon1VYu8VFEN3S2qrd///XlgTdnenCTmdyuOhM3gujXjweTxKJANjY2NjY2HwqSXA3DRxIjoLnE8j1gxvC4gljcjkUXb1BAmckrzvyIXQ4j+HEqOl1DjEyxk/wsCSmZQ4OYwxdejpur3TIQ2K65gtf0VFLv0RiX1XNHPKilY2KZgG9DLdptPQXpUMh1sGVjgJHrOnW351gKOqebtWDhNXpREUzdDTN9OLmSyGEcyaimQg1rYPr7hNEdImddkVBL33219Yz6iAKSU3r6G8hzH5iR+i+/hkBHU5GM4GT0cOxtKW/Kj0b3CwkdDIdvRqXGRoeLuV/yr6Y0dEojb6ZDCEfo0VkSN+OkgO0YT/G14h50QD5YEuMO63TDuxIZDTHqPafutFJSOSuJx8ujiJeEMndXMYcrzoilzUZrHFXdgcmgSjdCe4xnGdBMDNezMP5/mGky7zsx6Ig4S76PkWSvx+hgV/d06bp6eZoSgd609XfflSlt91BU2ZZWRXwmGXexpSWV9q7Vw3JUoC9l269OcCLof2H3qheP+puH9Iq2xwOG29rRt8aUih6X6lXRbop7ru8Nkb0Wah/RO1bTz9n6r1dWrx0Q2Pa7JzVictA0zs4lPP5wSsgq7Y/Vd/N8iT9dgHpHuC5q7Uod8V+D8dqV76ayjY2NjY2n89vPzEhhROK52wAAAAASUVORK5CYII="
            }}
            style={{
              width: 80,
              height: 80,
              alignItems: "center",
              alignSelf: "center"
            }}
          />
        </View>

        {/* CARD WRAPPER WITH TABS */}

        <View style={tabWrapper}>
          <TouchableWithoutFeedback
            onPress={() => this.changeTab("signUp", !isActive)}
          >
            <Text
              style={[
                tabContent,
                isActive === "signUp"
                  ? {
                      color: "black",
                      borderBottomColor: "#FF4D4D",
                      borderBottomWidth: 4
                    }
                  : { color: "#C5C5C5" }
              ]}
            >
              Sign Up
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
                tabContent,
                isActive === "signIn"
                  ? {
                      color: "black",
                      borderBottomColor: "#FF4D4D",
                      borderBottomWidth: 4
                    }
                  : { color: "#C5C5C5" }
              ]}
            >
              Sign In
            </Text>
          </TouchableWithoutFeedback>
        </View>

        {/* CARD WRAPPER */}
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
            {isActive === "signUp" && (
              <View style={formContainer}>
                <Item regular style={formStyling}>
                  <Input placeholder="example@gmail.com" />
                </Item>

                <Item regular style={formStyling}>
                  <View
                    style={{
                      borderRightColor: "gray",
                      borderRightWidth: 1,
                      width: 80,
                      height: 40,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <PhoneInput
                      style={{ width: "90%" }}
                      ref={ref => {
                        this.phone = ref;
                      }}
                      onPressFlag={this.onPressFlag}
                    />
                  </View>
                  <Input placeholder="Mobile Number" keyboardType="numeric" />
                </Item>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    backgroundColor: "#DDDDDD",
                    width: "100%",
                    borderRadius: 10,
                    backgroundColor: "#FF4D4D",
                    padding: 20,
                    marginTop: "5%"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",

                      alignItems: "center",
                      justifyContent: "center",
                      color: "white"
                    }}
                  >
                    {" "}
                    Sign Up{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {isActive === "signIn" && (
              <View style={formContainer}>
                <Item regular style={formStyling}>
                  <View
                    style={{
                      borderRightColor: "gray",
                      borderRightWidth: 1,
                      width: 80,
                      height: 40,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <PhoneInput
                      style={{ width: "90%" }}
                      ref={ref => {
                        this.phone = ref;
                      }}
                      onPressFlag={this.onPressFlag}
                    />
                  </View>
                  <Input placeholder="Mobile Number" keyboardType="numeric" />
                </Item>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    backgroundColor: "#DDDDDD",
                    width: "100%",
                    borderRadius: 10,
                    backgroundColor: "#FF4D4D",
                    padding: 20,
                    marginTop: "5%"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white"
                    }}
                  >
                    {" "}
                    Sign In{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        {/* FOOTER */}
        <View style={footer}>
          <Text style={welcome}>
            By signing up, you agree to our{" "}
            <Text style={{ fontWeight: "bold" }}>Terms and Conditions!</Text>
          </Text>
        </View>
      </View>
    );
  }
}
