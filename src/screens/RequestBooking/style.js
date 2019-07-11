import { Dimensions, StyleSheet } from "react-native";

// FILES
import { Colors } from "../../constant/appColor";

// CONSTANT
const { width, height } = Dimensions.get("window");
const { whiteColor, pinkColor, grayColor } = Colors;

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
  footerContainer: {
    height: "40%",
    justifyContent: "space-between"
  },
  footerCar: {
    height: height * 0.0009,
    height: "40%",
    backgroundColor: "#F4F4F4",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  },
  footerType: {
    height: 20,
    width: 50,
    backgroundColor: "black",
    flexDirection: "row"
  },
  footerPricing: { flexDirection: "column" },
  footerPaymentContainer: {
    height: height * 0.0009,
    height: "20%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  },
  requestButton: {
    borderRadius: 10,
    backgroundColor: pinkColor,
    height: height * 0.07,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: height * 0.02
  },
  requestButtonText: {
    fontWeight: "bold",
    fontSize: width * 0.05,
    fontFamily: "Courier-Bold",
    color: whiteColor
  },
  modalStyle: { justifyContent: "flex-end", margin: 0 },
  listContainer: {
    backgroundColor: "white",
    padding: 22,
    width: "100%",
    height: "60%",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  childContainer: {
    width: "100%"
  },
  contentContainer: {
    width: "80%",
    justifyContent: "space-between",
    alignSelf: "center",
    flexDirection: "row"
  },
  imageStyle: { width: 100, height: 100 },
  fontSetting: { fontSize: width * 0.03, fontWeight: "300" }
});
