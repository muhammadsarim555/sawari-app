import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StatusBar
} from "react-native";

// PACKAGES
import BackIcon from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";

// FILES
import { styles } from "./style";

// CONSTANT
const { width, height } = Dimensions.get("window");
const numColumns = 4;
const size = Dimensions.get("window").width / numColumns;

class Tip extends Component {
  state = {
    tipAmout: [1, 2, 5]
  };

  static navigationOptions = ({ navigation }) => ({
    headerTitleStyle: { textAlign: "center", flex: 1, color: "white" },
    title: "Tips",
    headerStyle: {
      backgroundColor: "#2B2B2B"
    },
    headerLeft: (
      <TouchableOpacity
        style={{ paddingLeft: 20 }}
        onPress={() => navigation.goBack()}
      >
        <BackIcon name="ios-arrow-back" color="white" size={25} />
      </TouchableOpacity>
    ),
    headerRight: <View style={{ paddingRight: 20 }} />
  });

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  changeRoute = e => {
    alert(e);
  };
  render() {
    let { tipAmout } = this.state;
    const {
      cardContainer,
      container,
      avatar,
      body,
      name,
      carName,
      tip,
      amountButton,
      amountButtonViews,
      amountButtonText,
      otherAmountButton,
      doneButton,
      doneButtonText,
      mayBeButton
    } = styles;

    return (
      <View style={container}>
        <StatusBar backgroundColor="#2B2B2B" />
        <View style={cardContainer}>
          <Image
            style={avatar}
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
            }}
          />
          <ScrollView>
            <View style={body}>
              <Text style={name}>Muhammad Sarim</Text>
              <Text style={carName}>Car Name</Text>

              <Text style={tip}>Wow! A 5 star! Wanna add tip for Sarim</Text>
              <FlatList
                data={tipAmout}
                renderItem={({ item, id }) => (
                  <TouchableOpacity
                    onPress={() => this.changeRoute(item)}
                    style={amountButton}
                  >
                    <View
                      style={{
                        width: size,
                        height: size,
                        alignSelf: "center"
                      }}
                    >
                      <View style={amountButtonViews}>
                        <Text style={amountButtonText}>${item}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item}
                numColumns={numColumns}
              />

              <TouchableOpacity
                onPress={() => alert("chal rha aksdfkahsdfkakjfhkahsf")}
              >
                <Text style={otherAmountButton}>Choose other amount</Text>
              </TouchableOpacity>

              <TouchableOpacity style={doneButton}>
                <Text style={doneButtonText}> Done </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => alert("chal rha aksdfkahsdfkakjfhkahsf")}
              >
                <Text style={mayBeButton}>Maybe next time</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default withNavigation(Tip);
