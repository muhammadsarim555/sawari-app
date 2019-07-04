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
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  backIcon: {
    alignSelf: "center",
    flexDirection: "row",
    marginRight: width * 0.05
  },
  searchBar: {
    height: height * 0.08,
    borderRadius: 20,
    width: "90%",
    position: "absolute",
    top: height * 0.009,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: whiteColor,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowOffset: { height: 0, width: 0 },
    elevation: 3,
    flexDirection: "row"
  },
  searchBarInput: {
    height: height * 0.08,
    borderRadius: 70,
    alignSelf: "center",
    backgroundColor: whiteColor,
    color: "black",
    width: "80%",
    textAlign: "center"
  },
  applyButton: {
    width: "100%",
    height: "10%",
    backgroundColor: "#367CFF",
    justifyContent: "center",
    alignItems: "center"
  },
  applyButtonText: {
    fontWeight: "bold",
    fontSize: width * 0.04,
    fontFamily: "Courier-Bold",
    color: "white"
  }
});
