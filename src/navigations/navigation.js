import { createStackNavigator, createAppContainer } from "react-navigation";

// SCREENS
import * as Screens from "../screens";

const AppNavigator = createStackNavigator(
  {
    SignIn: Screens.SignIn
  },
  {
    PhoneVerification: Screens.PhoneVerification
  },
  {
    initialRouteName: "SignIn"
  }
);

export default createAppContainer(AppNavigator);
