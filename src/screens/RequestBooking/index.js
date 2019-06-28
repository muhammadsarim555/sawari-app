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
import PaymentIcon from "react-native-vector-icons/MaterialIcons";
import OptionIcon from "react-native-vector-icons/SimpleLineIcons";

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

        <TouchableOpacity
          onPress={() => alert("chal rha ha")}
          style={{
            justifyContent: "center",
            flexDirection: "row",
            marginLeft: width * 0.09,
            position: "absolute",
            top: height * 0.1,
            height: height * 0.07,
            backgroundColor: "#FFFFFF",
            width: width * 0.12,
            borderRadius: 20,
            alignItems: "center",
            shadowOpacity: 0.75,
            shadowRadius: 5,
            shadowColor: "red",
            shadowOffset: { height: 0, width: 0 },
            elevation: 3
          }}
        >
          <Icon name="ios-arrow-back" color="#909090" size={30} />
        </TouchableOpacity>

        <View
          style={{
            height: "40%",
            justifyContent: "space-between"
          }}
        >
          {/* SELECT CAR  */}
          <View
            style={{
              height: height * 0.0009,
              height: "40%",
              backgroundColor: "#F4F4F4",
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            {/* TYPE */}
            <View
              style={{
                height: 20,
                width: 50,
                backgroundColor: "black",
                flexDirection: "row"
              }}
            />

            {/* CONTENT */}
            <View style={{ flexDirection: "column" }}>
              <Text>Just go</Text>
              <Text>Nearby you</Text>
            </View>

            {/* PRICE */}
            <View style={{ flexDirection: "column" }}>
              <Text>$25.00</Text>
              <Text>2 min</Text>
            </View>
          </View>

          {/* PAYMENT | PROMO CODE | OPTIONS */}
          <View
            style={{
              height: height * 0.0009,
              height: "20%",
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            {/* PAYMENT */}
            <View style={{ flexDirection: "column" }}>
              {/* <Text>icon</Text> */}
              <PaymentIcon name="payment" color="#949494" size={30} />

              <Text>Payment</Text>
            </View>

            {/* PROMO CODE */}
            <View style={{ flexDirection: "column" }}>
              <PaymentIcon name="payment" color="#949494" size={30} />
              <Text>Promo Code</Text>
            </View>

            {/* OPTIONS */}
            <View style={{ flexDirection: "column" }}>
              <OptionIcon name="options" color="#949494" size={30} />
              <Text>Options</Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#DDDDDD",
              borderRadius: 10,
              backgroundColor: "#FF4D4D",
              height: height * 0.07,
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              marginBottom: height * 0.02
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: width * 0.06,
                fontFamily: "Courier-Bold",
                color: "white"
              }}
            >
              Request
            </Text>
          </TouchableOpacity>
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
