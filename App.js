import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import HowToScreen from './src/screens/HowToScreen';
import OptionsScreen from './src/screens/OptionsScreen';
import SomeComponent from './src/components/SomeComponent';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen,
    HowTo: HowToScreen,
    Options: OptionsScreen
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(navigator);