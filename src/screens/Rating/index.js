import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";

// PACKAGES
import StarRating from "react-native-star-rating";
import Textarea from "react-native-textarea";
import BackIcon from "react-native-vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Header } from "react-navigation";

// FILES
import { styles } from "./style";

// CONSTANT
const { width, height } = Dimensions.get("window");
const headerHeight = Header.HEIGHT;

export default class Rating extends Component {
  state = {
    starCount: 3.5,
    comment: ""
  };

  static navigationOptions = {
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center",
      flex: 1,
      color: "white"
    },
    title: "Ratings",
    headerStyle: {
      backgroundColor: "#2B2B2B"
    },
    headerLeft: (
      <TouchableOpacity style={{ paddingLeft: 20 }}>
        <BackIcon name="ios-arrow-back" color="white" size={25} />
      </TouchableOpacity>
    ),
    headerRight: <View style={{ paddingRight: 20 }} />
  };

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  onChange = comment => {
    this.setState({ comment });
  };

  render() {
    let { comment } = this.state;
    const {
      container,
      cardContainer,
      avatar,
      body,
      name,
      carName,
      tip,
      tipDescription,
      starContainer,
      starStyling,
      textArea,
      submitButton,
      submitButtonText
    } = styles;

    return (
      <KeyboardAwareScrollView>
        <View style={container}>
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

                <Text style={tip}>How was your tip?</Text>
                <Text style={tipDescription}>
                  Your feedback will help improve our driving experience
                </Text>
                <View style={starContainer}>
                  <StarRating
                    disabled={false}
                    emptyStar={"ios-star-outline"}
                    fullStar={"ios-star"}
                    halfStar={"ios-star-half"}
                    iconSet={"Ionicons"}
                    maxStars={5}
                    rating={this.state.starCount}
                    selectedStar={rating => this.onStarRatingPress(rating)}
                    fullStarColor={"yellow"}
                    containerStyle={starStyling}
                  />
                  <Textarea
                    containerStyle={textArea}
                    onChangeText={this.onChange}
                    defaultValue={comment}
                    maxLength={120}
                    placeholder={"Additional Comments..."}
                    placeholderTextColor={"#c7c7c7"}
                    underlineColorAndroid={"transparent"}
                  />
                  <TouchableOpacity
                    style={submitButton}
                    onPress={() =>
                      this.props.navigation.navigate("PhoneVerification")
                    }
                  >
                    <Text style={submitButtonText}> Submit Review </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
