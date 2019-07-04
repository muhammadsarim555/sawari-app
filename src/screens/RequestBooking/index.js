import React, { Component } from "react";
import { Text, View, StatusBar, TouchableOpacity } from "react-native";

// PACKAGES
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";
import PaymentIcon from "react-native-vector-icons/MaterialIcons";
import OptionIcon from "react-native-vector-icons/SimpleLineIcons";

// FILES
import { styles } from "./style";
import { Colors } from "../../constant/appColor";

// CONSTANT
const { grayColor } = Colors;

export default class ApplyBooking extends Component {
  state = {
    searchText: ""
  };

  static navigationOptions = {
    header: null
  };

  render() {
    const { searchText } = this.state;
    const {
      backButton,
      footerContainer,
      footerCar,
      footerType,
      footerPricing,
      footerPaymentContainer,
      requestButton,
      requestButtonText
    } = styles;

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
          style={backButton}
        >
          <Icon name="ios-arrow-back" color={grayColor} size={30} />
        </TouchableOpacity>

        <View style={footerContainer}>
          {/* SELECT CAR  */}
          <View style={footerCar}>
            {/* TYPE */}
            <View style={footerType} />

            {/* CONTENT */}
            <View style={footerPricing}>
              <Text>Just go</Text>
              <Text>Nearby you</Text>
            </View>

            {/* PRICE */}
            <View style={footerPricing}>
              <Text>$25.00</Text>
              <Text>2 min</Text>
            </View>
          </View>

          {/* PAYMENT | PROMO CODE | OPTIONS */}
          <View style={footerPaymentContainer}>
            {/* PAYMENT */}
            <View style={footerPricing}>
              <PaymentIcon name="payment" color={grayColor} size={30} />

              <Text>Payment</Text>
            </View>

            {/* PROMO CODE */}
            <View style={footerPricing}>
              <PaymentIcon name="payment" color={grayColor} size={30} />
              <Text>Promo Code</Text>
            </View>

            {/* OPTIONS */}
            <View style={footerPricing}>
              <OptionIcon name="options" color={grayColor} size={30} />
              <Text>Options</Text>
            </View>
          </View>

          <TouchableOpacity style={requestButton}>
            <Text style={requestButtonText}>Request</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
