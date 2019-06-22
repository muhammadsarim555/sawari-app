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
const { width, height } = Dimensions.get("window");

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
// import { styles } from "./style";
import Logo from "../../assets/logo/logo.png";
import { Colors } from "../../constant/appColor";

// CONSTANT

export default class SignIn extends Component {
  state = {
    isActive: "signUp",
    isKeyboard: false
  };

  static navigationOptions = {
    header: null
  };

  // componentDidMount() {
  //   this.setState({
  //     pickerData: this.phone.getPickerData()
  //   });
  // }

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
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAolBMVEUAAADlPTLpPjNSFRHcOjBOFRHwQDTtPzTUOC6qLST////YOS9ZWFgLAABWFxI4DwyfKiLBMypAEQ2dmpmFg4NIEw8cBwb29fWPJh/CJBfLNiz7QzcMFBRqaWmnpKPKysqmrK3i4eFEQkG6uLhmGhXt6ekmJiWQjY3T09NycXFzHhmzMCdNTEzHwsIaGRl8e3uVFAZ9IRsjCQcpCggRHh46Nzf8UsULAAACDElEQVRYhe3YXXOiMBQG4JNTTAIon1VYu8VFEN3S2qrd///XlgTdnenCTmdyuOhM3gujXjweTxKJANjY2NjY2HwqSXA3DRxIjoLnE8j1gxvC4gljcjkUXb1BAmckrzvyIXQ4j+HEqOl1DjEyxk/wsCSmZQ4OYwxdejpur3TIQ2K65gtf0VFLv0RiX1XNHPKilY2KZgG9DLdptPQXpUMh1sGVjgJHrOnW351gKOqebtWDhNXpREUzdDTN9OLmSyGEcyaimQg1rYPr7hNEdImddkVBL33219Yz6iAKSU3r6G8hzH5iR+i+/hkBHU5GM4GT0cOxtKW/Kj0b3CwkdDIdvRqXGRoeLuV/yr6Y0dEojb6ZDCEfo0VkSN+OkgO0YT/G14h50QD5YEuMO63TDuxIZDTHqPafutFJSOSuJx8ujiJeEMndXMYcrzoilzUZrHFXdgcmgSjdCe4xnGdBMDNezMP5/mGky7zsx6Ig4S76PkWSvx+hgV/d06bp6eZoSgd609XfflSlt91BU2ZZWRXwmGXexpSWV9q7Vw3JUoC9l269OcCLof2H3qheP+puH9Iq2xwOG29rRt8aUih6X6lXRbop7ru8Nkb0Wah/RO1bTz9n6r1dWrx0Q2Pa7JzVictA0zs4lPP5wSsgq7Y/Vd/N8iT9dgHpHuC5q7Uod8V+D8dqV76ayjY2NjY2n89vPzEhhROK52wAAAAASUVORK5CYII="
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
                  { fontSize: 18, fontWeight: "bold" },
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
                  { fontSize: 18, fontWeight: "bold" },
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
                  style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 10
                  }}
                  placeholder={"example@gmail.com"}
                  onChangeText={text => this.setState({ text })}
                />
                <TextInput
                  style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 10
                  }}
                  placeholder={"Add Your Text Here"}
                  onChangeText={text => this.setState({ text })}
                />
                <Button>
                  <Text>Click Me!</Text>
                </Button>
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
                  style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 10
                  }}
                  placeholder={"0318282"}
                  onChangeText={text => this.setState({ text })}
                />

                <Button>
                  <Text>Click Me!</Text>
                </Button>
              </ScrollView>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  box1: {
    height: 200,
    backgroundColor: "blue"
  },
  box2: {
    height: 200,
    backgroundColor: "purple"
  }
});
