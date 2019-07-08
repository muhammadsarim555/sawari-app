import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    paddingHorizontal: 17
  },
  footer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#eeeeee",
    paddingHorizontal: 10,
    padding: 5
  },
  btnSend: {
    backgroundColor: "#00BFFF",
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center"
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: "center"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderTopRightRadius: 20
  },
  itemIn: {
    alignSelf: "flex-start"
  },
  itemOut: {
    alignSelf: "flex-end",
    backgroundColor: "#4252FF",
    color: "white"
  },
  time: {
    alignSelf: "flex-end",
    margin: 15,
    fontSize: 12
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eeeeee",

    padding: 5
  },
  itemOutRadius: {
    // borderTopRightRadius: 300,
    // borderTopLeftRadius: 300,
    // borderBottomLeftRadius: 300,
    borderRadius: 300
  },
  itemInRadius: {
    // borderTopRightRadius: 300,
    // borderTopLeftRadius: 300,
    // borderBottomRightRadius: 300
    borderRadius: 300
  }
});
