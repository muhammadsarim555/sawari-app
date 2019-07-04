import { Dimensions, StyleSheet } from "react-native";

// FILES
import { Colors } from "../../constant/appColor";

// CONSTANT
const { width, height } = Dimensions.get("window");
const { whiteColor, grayColor, pinkColor } = Colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  backButton: {
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: width * 0.09,
    position: "absolute",
    top: height * 0.1,
    height: height * 0.07,
    backgroundColor: whiteColor,
    width: width * 0.12,
    borderRadius: 20,
    alignItems: "center",
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: grayColor,
    shadowOffset: { height: 0, width: 0 },
    elevation: 3
  },
  footerContainer1: {
    height: "20%",
    backgroundColor: "#F4F4F4",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  },
  directionColumn: { flexDirection: "column" },
  directionRow: { flexDirection: "row" },
  recommendation: {
    height: "10%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  },
  footerContainer3: {
    height: "20%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  },
  confirmButton: {
    borderRadius: 10,
    backgroundColor: pinkColor,
    height: height * 0.07,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: height * 0.02
  },
  confirmButtonText: {
    fontWeight: "bold",
    fontSize: width * 0.05,
    fontFamily: "Courier-Bold",
    color: "white"
  }
});
