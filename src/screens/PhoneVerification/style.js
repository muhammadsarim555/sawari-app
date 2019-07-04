import { Dimensions, StyleSheet } from "react-native";

// CONSTANT
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    height: "80%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white"
  },
  childContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: "70%",
    width: "60%"
  },

  verifyButton: {
    backgroundColor: "#DDDDDD",
    borderRadius: 10,
    backgroundColor: "#FF4D4D",
    height: height * 0.08,
    width: "100%"
  },
  verifyButtonText: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    lineHeight: height * 0.08
  },
  otpInput: {
    borderBottomWidth: 4,
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center"
  }
});
