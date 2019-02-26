import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home";
import SecondPage from "./components/SecondPage";
import Login from "./components/Login";
import Splash from "./Splash";

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: ({ navigation }) => ({
        title: "Splash",
        header: null
      })
    },

    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        title: "Login"
      })
    },
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: "Explore"
      })
    },
    SecondPage: {
      screen: SecondPage,
      navigationOptions: ({ navigation }) => ({
        title: "Second Page"
      })
    }
  },
  {
    headerMode: "float"
  }
);

export default createAppContainer(AppNavigator);
