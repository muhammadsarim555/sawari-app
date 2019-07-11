import React, { Component } from "react";
import { Text, View, StatusBar, TouchableOpacity, Image } from "react-native";

// PACKAGES
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";
import PaymentIcon from "react-native-vector-icons/MaterialIcons";
import OptionIcon from "react-native-vector-icons/SimpleLineIcons";
import Modal from "react-native-modal";

// FILES
import { styles } from "./style";
import { Colors } from "../../constant/appColor";
import Car1 from "../../assets/icons/car1.png";
import Car2 from "../../assets/icons/car2.png";
import Car3 from "../../assets/icons/car3.png";
import Bike1 from "../../assets/icons/bike1.png";

// CONSTANT
const { grayColor } = Colors;

export default class ApplyBooking extends Component {
  state = {
    selectCar: null,
    isModalVisible: false,

    carInfo: [
      {
        name: "Corolla",
        time: "2min",
        price: 250,
        imagePath: Car1
      },
      {
        name: "Jeep",
        time: "2min",
        price: 250,
        imagePath: Car2
      },
      {
        name: "Alto",
        time: "2min",
        price: 150,
        imagePath: Car3
      },
      {
        name: "Bike",
        time: "2min",
        price: 45,
        imagePath: Bike1
      }
    ]
  };

  static navigationOptions = {
    header: null
  };

  toggleModal = () => {
    const { isModalVisible } = this.state;

    this.setState({ isModalVisible: !isModalVisible });
  };

  close = () => {
    setTimeout(() => {
      this.setState({ isModalVisible: false });
    }, 3000);
  };

  render() {
    const { carInfo, isModalVisible, selectCar } = this.state;
    const {
      backButton,
      footerContainer,
      footerCar,
      footerType,
      footerPricing,
      footerPaymentContainer,
      requestButton,
      requestButtonText,
      modalStyle,
      listContainer,
      childContainer,
      contentContainer,
      imageStyle,
      fontSetting
    } = styles;
    console.log(selectCar, "selectCar");
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
          onPress={() => this.props.navigation.goBack()}
          style={backButton}
        >
          <Icon name="ios-arrow-back" color={grayColor} size={30} />
        </TouchableOpacity>

        <View style={footerContainer}>
          {/* SELECT CAR  */}

          <View style={footerCar}>
            {/* TYPE */}
            <TouchableOpacity onPress={this.toggleModal}>
              <Image
                style={imageStyle}
                source={selectCar ? selectCar.imagePath : Car1}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <Modal isVisible={isModalVisible} style={modalStyle}>
              <View style={listContainer}>
                {carInfo.map((v, i) => {
                  const { imagePath, price, name, time } = v;
                  return (
                    <View style={childContainer} key={i}>
                      <TouchableOpacity
                        style={{
                          flexDirection: "row"
                        }}
                        onPress={() =>
                          this.setState({ selectCar: v, isModalVisible: false })
                        }
                      >
                        <Image
                          key={i}
                          source={v.imagePath}
                          style={{
                            width: 100,
                            height: 100
                          }}
                        />

                        <View style={contentContainer}>
                          <Text style={{ marginLeft: 20 }}>{name}</Text>
                          <View
                            style={{
                              justifyContent: "flex-end"
                            }}
                          >
                            <Text> {price}</Text>
                            <Text> {time}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })}
                <TouchableOpacity
                  onPress={() => this.setState({ isModalVisible: false })}
                >
                  <Text> CLose </Text>
                </TouchableOpacity>
              </View>
            </Modal>

            {/* CONTENT */}
            <View style={footerPricing}>
              <Text
                style={[fontSetting, { color: "black", fontWeight: "400" }]}
              >
                {selectCar ? selectCar.name : "Corolla"}
              </Text>
              <Text style={fontSetting}>Nearby you</Text>
            </View>

            {/* PRICE */}
            <View style={footerPricing}>
              <Text style={[fontSetting, { color: "red" }]}>
                {selectCar ? selectCar.price : "$25.00"}
              </Text>
              <Text style={fontSetting}>
                {selectCar ? selectCar.time : "2 min"}
              </Text>
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

          <TouchableOpacity
            style={requestButton}
            onPress={() => this.props.navigation.navigate("ConfirmBooking")}
          >
            <Text style={requestButtonText}>Request</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
