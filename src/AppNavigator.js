import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Home";
import SecondPage from "./SecondPage";
import Splash from "./Splash";

const AppNavigator = createStackNavigator(
  {
    Splash: { screen: Splash },
    Home: { screen: Home },
    SecondPage: { screen: SecondPage }
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
