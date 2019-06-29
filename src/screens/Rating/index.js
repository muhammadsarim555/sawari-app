import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";

// PACKAGES
import StarRating from "react-native-star-rating";
import Textarea from "react-native-textarea";

// CONSTANT
const { width, height } = Dimensions.get("window");

export default class Rating extends Component {
  state = {
    starCount: 3.5,
    comment: ""
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

    return (
      <View style={styles.container}>
        <View
          style={{
            width: "80%",
            height: "70%",
            backgroundColor: "white",
            alignSelf: "center",
            borderRadius: 20,
            shadowColor: "blue",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 12,
            shadowRadius: 2,
            elevation: 3
          }}
        >
          <Image
            style={styles.avatar}
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
            }}
          />
          <View style={styles.body}>
            <Text style={styles.name}>Muhammad Sarim</Text>
            <Text style={styles.carName}>Car Name</Text>

            <Text style={styles.tip}>How was your tip?</Text>
            <Text style={styles.tipDescription}>
              Your feedback will help improve our driving experience
            </Text>
            <View style={{ width: "90%", alignSelf: "center" }}>
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
              />
              <Textarea
                containerStyle={{
                  backgroundColor: "#E5E5E5",
                  borderRadius: 10,
                  marginTop: 20,
                  height: 150
                }}
                style={styles.textarea}
                onChangeText={this.onChange}
                defaultValue={comment}
                maxLength={120}
                placeholder={"Additional Comments..."}
                placeholderTextColor={"#c7c7c7"}
                underlineColorAndroid={"transparent"}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: "#DDDDDD",
                  borderRadius: 10,
                  backgroundColor: "#FF4D4D",
                  height: height * 0.06,
                  width: "100%",
                  marginTop: 10
                }}
                onPress={() =>
                  this.props.navigation.navigate("PhoneVerification")
                }
              >
                <Text
                  style={{
                    fontSize: width * 0.03,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    lineHeight: height * 0.06
                  }}
                >
                  {" "}
                  Submit Review{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
    backgroundColor: "blue"
  },
  header: {
    backgroundColor: "red",
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    top: -70
    // marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
    alignSelf: "center"
  },
  carName: {
    fontSize: 18,
    fontWeight: "300",
    alignSelf: "center"
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
    alignSelf: "center",
    marginTop: 20
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  tip: {
    fontSize: 24,
    color: "#696969",
    marginTop: 10,
    fontWeight: "600",
    marginTop: 20,
    textAlign: "center"
  },
  tipDescription: {
    fontSize: 18,
    color: "#696969",
    marginTop: 10,
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF"
  }
});
