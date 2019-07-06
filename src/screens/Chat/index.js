import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
  FlatList,
  Dimensions
} from "react-native";

// FILES
import CustomHeader from "../../component/Header";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Ionicons";

// CONSTANT
const { width, height } = Dimensions.get("window");

// PACKAGES
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class Chat extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit amet"
        },
        {
          id: 2,
          date: "9:50 am",
          type: "out",
          message: "Lorem ipsum dolor sit amet"
        },
        {
          id: 3,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met"
        },
        {
          id: 4,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met"
        },
        {
          id: 5,
          date: "9:50 am",
          type: "out",
          message: "Lorem ipsum dolor sit a met"
        },
        {
          id: 6,
          date: "9:50 am",
          type: "out",
          message: "Lorem ipsum dolor sit a met"
        },
        {
          id: 7,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met"
        },
        {
          id: 8,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met"
        },
        {
          id: 9,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met"
        }
      ],
      isFocus: false
    };
  }

  renderDate = date => {
    const { time } = styles;

    return <Text style={time}>{date}</Text>;
  };

  render() {
    const {
      container,
      list,
      itemIn,
      itemOut,
      balloon,
      footer,
      inputContainer,
      inputs,
      btnSend,
      iconSend
    } = styles;
    const { data, isFocus } = this.state;

    return (
      <View style={container}>
        {isFocus ? (
          <CustomHeader title="Muhammad Sarim" HeaderHeight="15%" />
        ) : (
          <CustomHeader title="Muhammad Sarim" />
        )}
        <FlatList
          style={list}
          data={data}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={message => {
            console.log(item);
            const item = message.item;
            let inMessage = item.type === "in";
            let itemStyle = inMessage ? itemIn : itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                {!inMessage && this.renderDate(item.date)}
                <View style={[balloon]}>
                  <Text>{item.message}</Text>
                </View>
                {inMessage && this.renderDate(item.date)}
              </View>
            );
          }}
        />
        <View style={footer}>
          <View style={inputContainer}>
            <TextInput
              style={inputs}
              placeholder="Write a message..."
              underlineColorAndroid="transparent"
              onChangeText={name_address => this.setState({ name_address })}
              onFocus={() => this.setState({ isFocus: true })}
              onBlur={() => this.setState({ isFocus: false })}
            />
          </View>

          <TouchableOpacity style={btnSend}>
            <Image
              source={{
                uri: "https://png.icons8.com/small/75/ffffff/filled-sent.png"
              }}
              style={iconSend}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
