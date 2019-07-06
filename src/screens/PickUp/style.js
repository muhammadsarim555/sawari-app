import { Dimensions, StyleSheet } from "react-native";

// FILES
import { Colors } from "../../constant/appColor";

// CONSTANT
const { width, height } = Dimensions.get("window");
const { whiteColor } = Colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },

  searchBar: {
    height: "10%",
    borderRadius: 100,
    width: "20%",
    position: "absolute",
    top: height * 0.09,
    marginLeft: 20,
    backgroundColor: whiteColor,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowOffset: { height: 0, width: 0 },
    elevation: 3,
    flexDirection: "row"
  }
});
