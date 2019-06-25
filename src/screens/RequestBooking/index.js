import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity
} from "react-native";

// PACKAGES
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";
import RemoveIcon from "react-native-vector-icons/AntDesign";

// FILES

// CONSTANT
const { width, height } = Dimensions.get("window");

export default class ApplyBooking extends Component {
  state = {
    searchText: ""
  };

  static navigationOptions = {
    header: null
  };

  render() {
    const { searchText } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" color="black" />

        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 24.91444,
            longitude: 67.029831,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />

        {/* <View
          style={{
            height: 40,
            borderRadius: 20,
            width: "90%",

            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "white",
            shadowOpacity: 0.75,
            shadowRadius: 5,
            shadowColor: "red",
            shadowOffset: { height: 0, width: 0 },
            elevation: 3,
            flexDirection: "row"
          }}
        > */}
        <TouchableOpacity
          onPress={() => alert("chal rha ha")}
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
            marginLeft: width * 0.09,
            position: "absolute",
            top: height * 0.009,
            height: height * 0.05,
            backgroundColor: "#FFFFFF",
            width: width * 0.09,
            borderRadius: 20,
            alignItems: "center",
            shadowOpacity: 0.75,
            shadowRadius: 5,
            shadowColor: "red",
            shadowOffset: { height: 0, width: 0 },
            elevation: 3
          }}
        >
          <Icon
            name="ios-arrow-back"
            color="#E5E5E5"
            size={30}
            // style={{ marginHorizontal: width * 0.01 }}
          />
        </TouchableOpacity>
        {/* </View> */}

        <TouchableOpacity
          style={{
            width: "90%",
            height: "8%",
            backgroundColor: "#FF4D4D",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            borderRadius: 20,
            marginBottom: height * 0.02
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              fontFamily: "Courier-Bold",
              color: "white"
            }}
          >
            Request
          </Text>
        </TouchableOpacity>
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
